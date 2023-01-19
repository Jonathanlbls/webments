import React from "react";
import "./quiz.css";
import Fonctionquiz from "./Fonctionquiz";
import Fonctionquiz2 from "./Fonctionquiz2";
import Fonctionquiz3 from "./Fonctionquiz3";
import Generator from "../Generator.js";


function SetQuiz() {
  
  const [Quiz, setQuiz] = React.useState("quiz");
  const [Genre, setGenre] = React.useState("question2");
  const [Style, setStyle] = React.useState("question3");
  const [palette, setPalette] = React.useState("Generator");
 
  

  return (
    
    <div>
      
      {Quiz === "quiz" && <Fonctionquiz setQuiz={setQuiz} setGenre={setGenre}></Fonctionquiz>}
      {Quiz === "question2" && <Fonctionquiz2 setQuiz={setQuiz} setStyle={setStyle}></Fonctionquiz2>}
      {Quiz === "question3" && <Fonctionquiz3 setQuiz={setQuiz} setPalette={setPalette}></Fonctionquiz3>}
      {Quiz === "Generator" && <Generator setQuiz={setQuiz} Genre={Genre} Style={Style}></Generator>}
    </div>
    
  );
}

export default SetQuiz;