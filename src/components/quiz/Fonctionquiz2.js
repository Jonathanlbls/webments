import React from "react";
import hommeclassique from "../image/hommeclassique.png";
import hommestreetwear from '../image/hommestreetwear.png';
import hommegothique from '../image/hommegothique.png';
import femmeclassique from '../image/femmeclassique.png';
import femmegothique from '../image/femmegothique.png';
import femmestreet from '../image/femmestreet.png';
import classiqueneutre from '../image/classiqueneutre.png';
import gothiqueneutre from '../image/gothiqueneutre.png';
import streetneutre from '../image/streetneutre.png';
import "./Fq2.css"
import useForm from "./useform";

function Fonctionquiz2({setQuiz, setStyle, test, Genre }) {
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

            {/* questionnaire homme */}
{Genre === "homme" && <ul className="ul-container">
                <li>
                    <div className="classiqueh">
                        <input type="radio" name="answer" id="a" value="Classique homme" className="answerStyle"></input> 
                        <img src ={hommeclassique} className="hommeclassique"/>
                    </div>

                </li>

                <li>
                    <div className="classiqueh">
                         <input type="radio" name="answer" id="b" value="Street homme" className="answerStyle"/> 
                         <img src ={hommestreetwear} className="hommeclassique"/>
                    </div>
                </li>

                <li>
                     <div className="classiqueh">
                          <input type="radio" name="answer" id="c" value="Gothique homme" className="answerStyle"/> 
                          <img src ={hommegothique} className="hommeclassique"/>
                    </div>
                </li>

            </ul>}

{/* questionnaire femme */}
            {Genre === "femme" && <ul className="ul-container">
                <li>
                    <div className="classiqueh">
                        <input type="radio" name="answer" id="a" value="Classique femme" className="answerStyle"></input> 
                        <img src ={femmeclassique} className="hommeclassique"/>
                    </div>

                </li>

                <li>
                    <div className="classiqueh">
                         <input type="radio" name="answer" id="b" value="Street femme" className="answerStyle"/> 
                         <img src ={femmestreet} className="hommeclassique"/>
                    </div>
                </li>

                <li>
                     <div className="classiqueh">
                          <input type="radio" name="answer" id="c" value="Gothique femme" className="answerStyle"/> 
                          <img src ={femmegothique} className="hommeclassique"/>
                    </div>
                </li>

            </ul>}

{/* questionnaire neutre */}
{Genre === "neutre" && <ul className="ul-container">
                <li>
                    <div className="classiqueh">
                        <input type="radio" name="answer" id="a" value="Classique neutre" className="answerStyle"></input> 
                        <img src ={classiqueneutre} className="hommeclassique"/>
                    </div>

                </li>

                <li>
                    <div className="classiqueh">
                         <input type="radio" name="answer" id="b" value="Street neutre" className="answerStyle"/> 
                         <img src ={streetneutre} className="hommeclassique"/>
                    </div>
                </li>

                <li>
                     <div className="classiqueh">
                          <input type="radio" name="answer" id="c" value="Gothique neutre" className="answerStyle"/> 
                          <img src ={gothiqueneutre} className="hommeclassique"/>
                    </div>
                </li>

            </ul>}



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