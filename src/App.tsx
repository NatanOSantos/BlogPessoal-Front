import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer.tsx';
import Navbar from './components/navbar/Navbar.tsx';
import Cadastro from './paginas/cadastro/Cadastro.tsx';
import Home from './paginas/home/Home.tsx';
import Login from './paginas/login/Login.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';
import ListaTemas from './components/temas/listaTemas/ListaTemas.tsx';
import FormularioTema from './components/temas/formularioTema/FormularioTema.tsx';
import DeletarTema from './components/temas/deletarTema/DeletarTema.tsx';
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem.tsx';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem.tsx';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem.tsx';
import Perfil from './paginas/perfil/Perfil.tsx';


import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />

          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path='/cadastro' element={<Cadastro />} />
                {/** Rotas Para Postagem */}
              <Route path='/postagens' element={<ListaPostagem />} />
              <Route path='/cadastroPostagem' element={<FormularioPostagem/>}/>
              <Route path='/cadastroPostagem/:id' element={<FormularioPostagem />} />
              <Route path='/deletarPostagem/:id' element={<DeletarPostagem/>}/>
                {/** Rotas Para Tema */}
              <Route path='/temas' element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />

              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>

  );
}

export default App;


