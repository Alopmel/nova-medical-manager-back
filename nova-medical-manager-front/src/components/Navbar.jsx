import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const { isAuthenticated, logout , user } = useAuth();

  return (
    <nav className='bg-white my-3 flex justify-between py-5 px-10 '>
        <ul className='flex gap-x-2'>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/quiensoy">¿Quién Soy?</Link>
            </li>
            <li>
                <Link to="/servicios">Servios</Link>
            </li>
            {
                isAuthenticated ? (
                    <>
                        <li>
                            Welcome {user.username}!
                        </li>
                        <li>
                            <Link to="/perfil">Perfil</Link>
                        </li>
                        <li>
                            <Link to="/" onClick={() => {logout();}}>Salir</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login">Acceder</Link>
                        </li>
                        <li>
                            <Link to="/registro">Registrar</Link>
                        </li>
                    </>
                )
            }
        </ul>
    </nav>
  )
}

export default Navbar
