import React from "react";
import "./Fq5.css"
import PStreet from "../image/PStreet.png";
import PClassique from "../image/PClassique.png";
import Pgothique from "../image/Pgothique.png";
import PVert from "../image/PVert.png";
import PRose from "../image/PRose.png";
import PCiel from "../image/PCiel.png";
import useForm from "./useform";



function Fonctionquiz4({setQuiz, setPalette, test}) {
    const [FormRef,handleSubmit,resetForm] = useForm((data)=>{
        console.log(data.answer,test) // Write your submit function here
        setPalette(data.answer)
        setQuiz("Generator")
      })
      
    return (
        <div className="top">
        <form ref={FormRef} onSubmit={handleSubmit} className="quizz-container" id="quizz">
        <div className="quizz-heade">
            <h2 id="question">Quelle est ta palette préférée ?</h2>
            <ul className="grid-container">
                <li>
                    <div className="quizz-relatif">
                        <input type="radio" name="answer" id="a" value="Street" className="answerpal"></input> 
                        <img src ={PStreet} className="image"/>
                    </div>
                </li>

                <li>
                    <div className="quizz-relatif">
                         <input type="radio" name="answer" id="b" value="Classique" className="answerpal"/> 
                         <img src ={PClassique} className="image"/>
                    </div>
                </li>

                <li>
                     <div className="quizz-relatif">
                          <input type="radio" name="answer" id="c" value="Gothique" className="answerpal"/> 
                          <img src ={Pgothique} className="image"/>
                      </div>
                </li>

                <li>
                     <div className="quizz-relatif">
                          <input type="radio" name="answer" id="c" value="Vert" className="answerpal"/> 
                          <img src ={PVert} className="image"/>
                      </div>
                </li>

                <li>
                     <div className="quizz-relatif">
                          <input type="radio" name="answer" id="c" value="Rose" className="answerpal"/> 
                          <img src ={PRose} className="image"/>
                      </div>
                </li>
                
                <li>
                     <div className="quizz-relatif">
                          <input type="radio" name="answer" id="c" value="Ciel" className="answerpal"/> 
                          <img src ={PCiel} className="image"/>
                      </div>
                </li>


            </ul>
        </div>
<div className="Suivant3">        
<button id="submit" >Suivant</button>
</div>


    </form>
    </div>


            )
}

export default Fonctionquiz4;