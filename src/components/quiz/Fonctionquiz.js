import React from "react";
import {BsGenderMale} from "react-icons/bs"; 
import {BsGenderFemale} from "react-icons/bs";
import {IoMaleFemaleOutline} from "react-icons/io5"; 
import useForm from "./useform";



function Fonctionquiz({setQuiz, setGenre, test}) {
    const [FormRef,handleSubmit,resetForm] = useForm((data)=>{
        console.log(data.answer,test) // Write your submit function here
        setGenre(data.answer)
        setQuiz("question2")
      })
      
    return (
        <div className="top">
        <form ref={FormRef} onSubmit={handleSubmit} className="quizz-container" id="quizz">
        <div className="quizz-header">
            <h2 id="question">Quel est ton genre ?</h2>
            <ul className="quizz-ul">
                <li>
                    <div className="quizz-relatif">
                        <input type="radio" name="answer" id="a" value="homme" className="answergenre homme"></input> 
                            <div className="circleHomme circle">
                            <BsGenderMale className="ic"></BsGenderMale>
                            </div>
                    </div>
                    <label htmlFor="a" id="a_text">Homme</label>
                </li>

                <li>
                    <div className="quizz-relatif">
                         <input type="radio" name="answer" id="b" value="femme" className="answergenre femme"/> 
                            <div className="circleFemme circle">
                                <BsGenderFemale className="ic"></BsGenderFemale>
                            </div>
                    </div>
                    <label htmlFor="b" id="b_text">Femme</label>
                </li>

                <li>
                     <div className="quizz-relatif">
                          <input type="radio" name="answer" id="c" value="neutre" className="answergenre neutre"/> 
                          <div className="circleNeutre circle"><IoMaleFemaleOutline className="ic"></IoMaleFemaleOutline></div>
                    </div>
                    <label htmlFor="c" id="c_text">Neutre</label>
                </li>

            </ul>
        </div>
<div className="Suivant">        
<button id="submit" >Soumettre</button>
</div>


      {/* <div className="link-container">
      <Link to='/about-gender'>Learn more about gender</Link>
   </div>  */}    

    </form>
    </div>


            )
}

export default Fonctionquiz;