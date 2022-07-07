import Nav from "./Components/NavBar"
import CadastroAlunos from "./Pages/CadastroAlunos"
import Home from "./Pages/Home"
import { AuthContextProvider } from "./Context/AuthContext";

function App() {

  return (
    <>
    <Nav />
    <CadastroAlunos />
    </>
  )
}

export default App
