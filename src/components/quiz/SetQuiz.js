import React from "react";
import "./quiz.css";
import Fonctionquiz from "./Fonctionquiz";
import Fonctionquiz2 from "./Fonctionquiz2";
import Fonctionquiz3 from "./Fonctionquiz3";
import Gothique from "../navbar/Gothique";
import { Design } from "/Users/jonathan/Desktop/code/webments/src/components/quiz/Design.js";


function SetQuiz() {
  
  const [Quiz, setQuiz] = React.useState("quiz");
  const [Genre, setGenre] = React.useState("homme");
  const [Style, setStyle] = React.useState("classique");
 
  

  return (
    
    <div>
      
      {Quiz === "quiz" && <Fonctionquiz setQuiz={setQuiz} setGenre={setGenre}></Fonctionquiz>}
      {Quiz === "question2" && <Fonctionquiz2 setQuiz={setQuiz}></Fonctionquiz2>}
      {Quiz === "question3" && <Fonctionquiz3 setQuiz={setQuiz}></Fonctionquiz3>}
      {Quiz === "Gothique" && <Gothique setQuiz={setQuiz} Genre={Genre} Style={Style}></Gothique>}
    </div>
    
  );
}

export default SetQuiz;