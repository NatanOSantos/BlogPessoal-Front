import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerts'

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta('Você precisa estar logado', "")
            navigate("/login")
        }
    }, [usuario.token])

    return (
        <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>

            <img 
                className='w-full h-72 object-cover border-b-8 border-white' 
                src="https://ik.imagekit.io/gwq8l9cqx/Design%20sem%20nome%20(6).png?updatedAt=1707257252650" alt="Capa do Perfil" />

            <img 
                className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' 
                src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />

            <div 
                className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-sky-900 text-white text-2xl items-center justify-center"
            >
                <p>Nome: {usuario.nome} </p>
                <p>Email: {usuario.usuario}</p>
            </div>

        </div>
    )
}

export default Perfil