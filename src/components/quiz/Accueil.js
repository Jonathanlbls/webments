import React from "react";
import Design from "./Design";
import "./quiz.css";

function Accueil() {

    return (
     <div className="Pres">   
           <div className="animationtitre">
            <div  className="title"><h1>Bienvenue sur Mode <div className="Policeuniverselle"></div></h1></div>
            </div>
            <div  className="subtitle"><h2>Vivez une expérience unique ultra personnalisée</h2></div>     
            
            <button id="accepter" className="Btnaccepter"><b><h3>Participer à l'expérience</h3></b></button>
            <button id="refuser" className="Btnrefuser"><b><h3>Une prochaine fois</h3></b></button> 
         <Design></Design>
      </div>
        
    );
  }
  
  export default Accueil;