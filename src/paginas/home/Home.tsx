import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import ListaPostagem from "../../components/postagens/listaPostagem/ListaPostagem";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";
import { ToastAlerta } from "../../utils/ToastAlerts";

function Home() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', '')
            navigate('/login');
        }
    }, [token])

    return (
        <>
            {/* First Background */}
            <div id="container" className='flex justify-center bg-indigo-800'>

                {/* Container */}
                <div id="subcontainer" className=' grid grid-cols-2 container text-white'>

                    {/* Grid Left Side */}
                    <div id="texto" className='flex flex-col gap-4 items-center justify-center py-4'>

                        <h2 className="text-5x1 font-bold">Seja Bem Vindo!</h2>
                        <p className="text-x1">Escreva para o mundo suas opiniões e pensamentos!</p>

                        <div className="flex justify-around gap-4">
                            <ModalPostagem />
                        </div>
                    </div>

                    {/* Grid Right Side */}
                    <div id="imagem" className="flex justify-center">
                        <img src='https://i.imgur.com/VpwApCU.png' alt="Imagem da página home" className="w-2/3"></img>
                    </div>
                </div>


            </div>
            <ListaPostagem />
        </>
    )
}


export default Home;