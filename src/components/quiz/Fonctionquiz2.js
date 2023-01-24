import React from "react";
import hommeclassique from "../image/hommeclassique.png";
import hommestreetwear from '../image/hommestreetwear.png';
import hommegothique from '../image/hommegothique.png';
import "./Fq2.css"
import useForm from "./useform";

function Fonctionquiz2({setQuiz, setStyle, test}) {
    const [FormRef,handleSubmit,resetForm] = useForm((data)=>{
        console.log(data.answer,test) // Write your submit function here
        setStyle(data.answer)
        setQuiz("question3")
      })
      
    return (
        <div className="top">
        <form ref={FormRef} onSubmit={handleSubmit} className="quizz-container" id="quizz">
        <div className="quizz-head">
            <h2 id="question">Quel est ton style préféré ?</h2>
            <ul className="ul-container">
                <li>
                    <div className="classiqueh">
                        <input type="radio" name="answer" id="a" value="homme" className="answerStyle"></input> 
                        <img src ={hommeclassique} className="hommeclassique"/>
                    </div>

                </li>

                <li>
                    <div className="classiqueh">
                         <input type="radio" name="answer" id="b" value="femme" className="answerStyle"/> 
                         <img src ={hommestreetwear} className="hommeclassique"/>
                    </div>
                </li>

                <li>
                     <div className="classiqueh">
                          <input type="radio" name="answer" id="c" value="neutre" className="answerStyle"/> 
                          <img src ={hommegothique} className="hommeclassique"/>
                    </div>
                </li>

            </ul>
        </div>
<div className="Suivant2">        
<button id="submit" >Suivant</button>
</div>


      {/* <div className="link-container">
      <Link to='/about-gender'>Learn more about gender</Link>
   </div>  */}    

    </form>
    </div>


            )
}

export default Fonctionquiz2;