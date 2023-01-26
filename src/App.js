import React from 'react';
import { Component } from "react";
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