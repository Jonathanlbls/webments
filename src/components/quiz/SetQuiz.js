import React, { Component } from "react";
import "./quiz.css";
import Fonctionquiz from "./Fonctionquiz";
import Fonctionquiz2 from "./Fonctionquiz2";
import Fonctionquiz3 from "./Fonctionquiz5";
import Generator from "../Generator.js";



function SetQuiz() {
  
  const [Quiz, setQuiz] = React.useState("quiz");
  const [Genre, setGenre] = React.useState("question2");
  const [Style, setStyle] = React.useState("question3");
  const [Palette, setPalette] = React.useState("Generator");
  const [Universelle, setUniverselle] = React.useState(false);


 
  

  return (
    
    <div>
      {/* <div> */}
      {Quiz === "quiz" && <Fonctionquiz setQuiz={setQuiz} setGenre={setGenre}></Fonctionquiz>}
      {Quiz === "question2" && <Fonctionquiz2 setQuiz={setQuiz} setStyle={setStyle} Genre={Genre} ></Fonctionquiz2>}
      {Quiz === "question3" && <Fonctionquiz3 setQuiz={setQuiz} setPalette={setPalette}></Fonctionquiz3>}
      {Quiz === "Generator" && <Generator setQuiz={setQuiz} Style={Style} Palette={Palette}></Generator>}


      <div className="Centrer">
      {Quiz != "Generator" && <button  onClick={() =>{
        setUniverselle(true)
        setQuiz("Generator")

      } }  className="Normal">Aller sur le site universel</button>}
    </div>
  </div>
  );
}

export default SetQuiz;