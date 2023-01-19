import React from 'react';
import { Component } from "react";
import Design from "./components/quiz/Design.js"
import SetQuiz from "./components/quiz/SetQuiz.js"
import "./components/quiz/quiz.css"
{/* import Generator from './components/Generator.js'; */}

function App() {

  return (
    <div className="App">
 {/* <Generator></Generator> */}
 <Design></Design>
 <SetQuiz></SetQuiz>

    </div>
  );
}

export default App;