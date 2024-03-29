import { useForm} from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate , Link} from "react-router-dom";

function RegisterPage() {

    const {register, 
           handleSubmit,
           formState: {errors},
          } = useForm();
    const {signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/');
    }, [isAuthenticated]);

    const onSubmit = handleSubmit( async (values) => {
        signup(values);
    });

  return (
    <div className="bkg_login flex h-screen items-center justify-center">
        <div className=" backdrop-blur-md  bg-[#CFFDE1] bg-opacity-30 max-w-md p-10 rounded-md">
        {
            registerErrors.map((error, i) =>(
                <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
                    {error}
                </div>    
            ))
        }

        <h1 className="text-2xl font-bold text-center ">Regístrate</h1>


        <form 
            onSubmit={onSubmit}
        >
            <input 
                type="text" 
                {...register("username", {required: true})}
                className="w-full bg-zinc-100 text-white px-4 py-2 rounded-md my-2"
            />
            {errors.username && <p className="text-red-500">Debe insertar un nombre de usuario</p>}
            
            <input 
                type="email" 
                {...register("email", {required: true})} 
                className="w-full bg-zinc-100 text-white px-4 py-2 rounded-md my-2"
            />
            {errors.email && <p className="text-red-500">Debe insertar un email</p>}

            <input 
                type="password" 
                {...register("password", {required: true})}
                className="w-full bg-zinc-100 text-white px-4 py-2 rounded-md my-2"
            />
            {errors.password && <p className="text-red-500">Debe insertar un contraseña</p>}
            
            <button type="submit">
                Register
            </button>
        </form>
        <p className="flex gap-x-2 justify-between"> 
                    ¿Ya tienes cuenta? 
                    <Link to="/login" className="text-sky-500"> Accede </Link> 
                </p>
        </div>
    </div>
  )
}

export default RegisterPage;
