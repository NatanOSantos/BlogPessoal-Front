import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import Usuario from "../../models/Usuario"
import { useNavigate } from "react-router-dom"
import { cadastrarUsuario } from "../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import { ToastAlerta } from "../../utils/ToastAlerts"

function Cadastro() {

    const navigate = useNavigate()

    {/*  */}
    const [isLoading, setIsLoading] = useState<boolean>(false)

    {/*  */}
    const [confirmaSenha, setConfirmaSenha] = useState<string>("")

    {/*  */}
    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    {/*  */}
    useEffect(() => {
        if (usuario.id !== 0) {
            retornar()
        }
    }, [usuario])

    {/*  */}
    function retornar() {
        navigate('/login')
    }

    {/*  */}
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    {/*  */}
    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
        console.log(confirmaSenha)
    }

    {/*  */}
    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        {/*  */}
        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

            {/* Inicia a animação de Loading */}
            setIsLoading(true)

            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
                ToastAlerta('Usuário cadastrado com sucesso!!!', 'sucesso')
            } catch (error) {
                ToastAlerta('Erro ao cadastrar o usuário!', 'erro')
                console.log(error);
                
            }
        } else {
            ToastAlerta('Dados estão inconsistentes. Verifique as informações do cadastro.', 'erro')
            setUsuario({ ...usuario, senha: '' })
            setConfirmaSenha('')
        }

        setIsLoading(false)
    }

    return (
        <>
            <div className="grid grid-cols-2 h-screen">
                {/*LEFT*/}
                <div id="imagem" className="
            grid place-items-center w-full">
                    < img src='https://ik.imagekit.io/gwq8l9cqx/Sem%20nome%20(600%20x%20600%20px).png?updatedAt=1707307178208' alt='blog pessoal imagem'></img>
                </div>

                {/*RIGHT*/}
                <div id="cadastro" className="
            grid place-items-center font-bold w-full">
                    <form
                        className="flex justify-center place-items-center flex-col gap-4 w-3/4"
                        onSubmit={cadastrarNovoUsuario}>
                        <h2 className="text-slate-900 text-5xl">Cadastrar</h2>
                        <div className="flex flex-col w-full">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type='text'
                                id="nome"
                                name="nome"
                                placeholder="Nome"
                                className="border-2 border-slate-700 rounded p-2"
                                value={usuario.nome}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <input
                                type='text'
                                id="usuario"
                                name="usuario"
                                placeholder="Usuário"
                                className="border-2 border-slate-700 rounded p-2"
                                value={usuario.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <input
                                type='text'
                                id="foto"
                                name="foto"
                                placeholder="Foto"
                                className="border-2 border-slate-700 rounded p-2"
                                value={usuario.foto}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <input
                                type='password'
                                id="senha"
                                name="senha"
                                placeholder="Senha"
                                className="border-2 border-slate-700 rounded p-2"
                                value={usuario.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <input
                                type='password'
                                id="senha"
                                name="senha"
                                placeholder="Confirmar Senha"
                                className="border-2 border-slate-700 rounded p-2"
                                value={confirmaSenha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                            />
                        </div>

                        <div className="flex-col w-full
                            grid grid-cols-2 place-items-center">
                            <button type='submit' className='
                                rounded bg-rose-500 hover:bg-rose-900
                                text-white w-3/4 py-2 flex justify-center'
                                onClick={retornar}>
                                Cancelar
                            </button>

                            <button type='submit' className='
                                rounded bg-indigo-500 hover:bg-indigo-900
                                text-white w-3/4 py-2 flex justify-center'>
                                {isLoading ? <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}/> : <span>Cadastrar</span>}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Cadastro