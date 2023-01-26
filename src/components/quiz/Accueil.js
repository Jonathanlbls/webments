import React from "react";
import Design from "./Design";
import "./Accueil.css";


function Accueil( {setPage}) {
    

    return (
     <div className="Pres">   
           <div className="animationtitre">
            <div  className="title"><h1>Bienvenue sur Mode <div className="Policeuniverselle"></div></h1></div>
            </div>
            <div  className="subtitle"><h2>Vivez une expérience unique ultra personnalisée</h2></div>     
            
            <button id="accepter" className="Btnaccepter" onClick={() =>{
        setPage("SetQuiz")}}><b><h3>Participer à l'expérience</h3></b></button>
            <button id="refuser" className="Btnrefuser" onClick={() =>{
              setPage("Generator")}}><b><h3>Une prochaine fois</h3></b></button> 
         <Design></Design>
      </div>
        
    );
  }
  
  export default Accueil;