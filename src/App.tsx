import './App.css'
import NavBar from "./components/NavBar.tsx";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe.tsx";

function App() {

    return (
        <>
            <NavBar />
            <Home></Home>
            <AboutMe></AboutMe>
        </>
    )
}

export default App
