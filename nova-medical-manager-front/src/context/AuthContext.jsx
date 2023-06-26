import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context){
        throw new Error("useAuth mus be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            // console.log(error.response.data);
            setErrors(error.response.data);// recoge el mensaje que viene del back
        }
    };

    const signin = async (user) => {
        

        try {
            const res = await loginRequest(user)
            console.log(res)
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (error) {
            if (Array.isArray(error.response.data)){
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message]);
        }
    };

    const logout = () => {
        Cookies.remove("token");
        setIsAuthenticated(false);
        setUser(null);
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(()=> {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])
    
    useEffect(() => {
        const checkLogin = async () => {
          const cookies = Cookies.get();
          console.log(cookies)
          console.log(cookies.token)
          if (!cookies.token) {
            setIsAuthenticated(false);
            setLoading(false);
            return;
          }
    
          try {
            const res = await verifyTokenRequest(cookies.token);
            console.log(res);
            if (!res.data) return setIsAuthenticated(false);
            setIsAuthenticated(true);
            setUser(res.data);
            setLoading(false);
          } catch (error) {
            setIsAuthenticated(false);
            setLoading(false);
          }
        };
        checkLogin();
      }, []);

    return(
        <AuthContext.Provider 
        value={{
            signup,
            signin,
            logout,
            loading, 
            user,
            isAuthenticated,
            errors,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};