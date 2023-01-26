import { Component } from "react";
import './Components/navbar/Navbar.css';
import Navbar from './Components/navbar/Navbar';
import Grandeimg from './Components/grandeimg/Grandeimg.js';
import Petitesimg from './Components/petitesimg/Petitesimg.js';
import Footer from './Components/footer/Footer.js';
import './Components/grandeimg/Grandeimg.css'
import './Components/petitesimg/Petitesimg.css'
import './Components/footer/Footer.css'
import "./components/quiz/quiz.css"
import Accueil from './components/quiz/Accueil.js';
import SetQuiz from './components/quiz/SetQuiz.js';
import Generator from './components/Generator.js';





function App() {
  const [Page, setPage] = React.useState("Accueil");


  return (
    <div className="App">
      {Page === "Accueil" && <Accueil setPage={setPage} ></Accueil>}
      {Page === "SetQuiz" && <SetQuiz setPage={setPage} ></SetQuiz>}
      {Page === "Generator" && <Generator setPage={setPage}></Generator>}
    </div>    
  );
}



export default App;