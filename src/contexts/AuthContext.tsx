import { ReactNode, createContext, useState } from "react"
import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import { ToastAlerta } from "../utils/ToastAlerts"

{/* Contexto que lida com Autenticação*/}

{/* Definição da interface para o contexto de autenticação */}
interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

{/* Interface para as propriedades do provedor de autenticação */}
interface AuthProvidersProps {
    children: ReactNode
}

{/* Criação do contexto de autenticação */}
export const AuthContext = createContext({} as AuthContextProps)

{/* Componente do provedor de autenticação */}
export function AuthProvider({ children }: AuthProvidersProps) {
    {/* Estado para armazenar as informações do usuário */}
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })

    {/* Estado para controlar o estado de carregamento */}
    const [isLoading, setIsLoading] = useState(false)

    {/* Função Assincrona para lidar com o processo de login */}
    async function handleLogin(userLogin: UsuarioLogin) {

        {/* Inicia a animação de Loading */}
        setIsLoading(true)

        try {
            {/* Chama a função de Login do Service, enviando o Caminho, o Objeto e a Função */}
            await login(`/usuarios/logar`, userLogin, setUsuario)
            ToastAlerta("Usuário autenticado com sucesso!", 'sucesso')
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            ToastAlerta("Erro ao logar.", 'erro')
            setIsLoading(false)
        }
        
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        })
    }
    
    return(
        <AuthContext.Provider value={{usuario, handleLogin, handleLogout, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}


// AuthCoNTEXT.TSX