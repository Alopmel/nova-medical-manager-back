import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from "react";

function Navbar() {
    const { isAuthenticated, logout , user } = useAuth();
    const [nav, setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav);
    }

  return (
    <nav className='bg-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 '>
        <ul className='hidden md:flex'>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/servicios">Servios</Link>
            </li>
            <li>
                <Link to="/quiensoy">¿Quién Soy?</Link>
            </li>
            <h1 className="ml-72 mr-80"> Nova Medical Manager</h1>     
            {
                isAuthenticated ? (
                    <>
                        <li className="ml-65">
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
        <div onClick={handleNav} class>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#e8c869] ease-in-out duration-500 z-2 ' : 'fixed left-[-100%]'}>
            <ul className="uppercase p-4">
            {
                    isAuthenticated ? (
                        <>
                            <li className="ml-65 p-4 ">
                                Welcome {user.username}!
                            </li>
                        </>
                    ) : (
                        <>
                        </>
                    )
                }
                <div onClick={handleNav} class>
                    {!nav ? <AiOutlineClose size={20}/> : ''}
                </div>
                <li className="p-4 border-b border-fcbe08">
                    <Link to="/">Inicio</Link>
                </li>
                <li className="p-4 border-b border-fcbe08">
                    <Link to="/servicios">Servios</Link>
                </li>
                <li className="p-4 border-b border-fcbe08">
                    <Link to="/quiensoy">¿Quién Soy?</Link>
                </li>
                {
                    isAuthenticated ? (
                        <>
                            <li className="p-4 border-b border-fcbe08">
                                <Link to="/perfil">Perfil</Link>
                            </li>
                            <li className="p-4 border-b border-fcbe08">
                                <Link to="/" onClick={() => {logout();}}>Salir</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="p-4 border-b border-fcbe08">
                                <Link to="/login">Acceder</Link>
                            </li>
                            <li className="p-4 border-b border-fcbe08">
                                <Link to="/registro">Registrar</Link>
                            </li>
                        </>
                    )
                }
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
