import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function LoginPage() {

    const {
        register, 
        handleSubmit,
        formState: {errors},
    } = useForm();
    const {signin, errors: signinErrors} = useAuth();
    
    const onSubmit = handleSubmit(data =>{
        signin(data);
    }) 

  return (
    <div className="flex h-[calc(100vh-100px)]  items-center justify-center ">
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
