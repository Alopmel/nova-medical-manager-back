import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";


function LoginPage() {
    const { signin, isAuthenticated, isAdmin,user, errors: signinErrors } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    
    useEffect(() => {
      if (isAdmin) {
        navigate("/administrador");
      } else if (isAuthenticated) {
        navigate("/perfil");
      }
    }, [isAdmin, isAuthenticated]);
    // useEffect(() => {
    //   if (isAuthenticated && isAdmin) {
    //       navigate("/administrador");
    //     } else {
    //       navigate("/perfil");
    //     }
    //   }
    // , [isAuthenticated, isAdmin]);
    
    // Hace el post de los datos de usuario
    const onSubmit = handleSubmit((data) => {
      signin(data)
    })

    /*
    * Función para el login 
    * Verifica si está autentificado
    * Si lo está y tiene el rol 2 va a la p. de administrador
    * Si no tiene el rol 2 va a la página del perfil
    */

  return (
    <div className="bkg_login flex h-screen items-center justify-center">
        <div className=" backdrop-blur-md  bg-[#CFFDE1] bg-opacity-30 max-w-md w-full p-10 rounded-md">
            {signinErrors.map((error, i) =>(
                <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
                    {error}
                </div>    
            ))} 

            <h1 className="text-2xl font-bold text-center">Inicia sesión</h1>

            <form 
            onSubmit={onSubmit}
            >
            <span>Email</span>
            <input 
                type="email" 
                {...register("email", {required: true})} 
                className="w-full bg-zinc-100 text-black px-4 py-2 rounded-md my-2"
            />
            {errors.email && <p className="text-red-500">Debe insertar un email</p>}
            <span>Password</span>
            <input 
                type="password" 
                {...register("password", {required: true})}
                className="w-full bg-zinc-100 text-black px-4 py-2 rounded-md my-2"
            />
            {errors.password && <p className="text-red-500">Debe insertar un contraseña</p>}
            
            <button type="submit" >
                Acceder
            </button>
        </form>
            <p className="flex gap-x-2 justify-between "> 
                ¿Aún no tienes cuenta? 
                <Link to="/registro" className="text-sky-500"> Regístrate </Link> 
            </p>
        </div>
    </div>
  )
}

export default LoginPage
