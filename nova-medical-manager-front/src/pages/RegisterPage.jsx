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
    <div className="flex h-[calc(100vh-100px)]  items-center justify-center">
        <div className=" bg-zinc-800 max-w-md p-10 rounded-md">
        {
            registerErrors.map((error, i) =>(
                <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
                    {error}
                </div>    
            ))
        }

        <h1 className="text-2xl font-bold text-center text-white">Regístrate</h1>


        <form 
            onSubmit={onSubmit}
        >
            <input 
                type="text" 
                {...register("username", {required: true})}
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            />
            {errors.username && <p className="text-red-500">Debe insertar un nombre de usuario</p>}
            
            <input 
                type="email" 
                {...register("email", {required: true})} 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            />
            {errors.email && <p className="text-red-500">Debe insertar un email</p>}

            <input 
                type="password" 
                {...register("password", {required: true})}
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            />
            {errors.password && <p className="text-red-500">Debe insertar un contraseña</p>}
            
            <button type="submit" className="text-white">
                Register
            </button>
        </form>
        <p className="flex gap-x-2 justify-between text-white"> 
                    ¿Ya tienes cuenta? 
                    <Link to="/login" className="text-sky-500"> Accede </Link> 
                </p>
        </div>
    </div>
  )
}

export default RegisterPage;
