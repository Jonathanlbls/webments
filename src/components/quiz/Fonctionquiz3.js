import React from "react";
import gothique from "/Users/jonathan/Desktop/code/webments/src/components/image/gothique.png";
import classique from "/Users/jonathan/Desktop/code/webments/src/components/image/classique.png";
import streetwear from "/Users/jonathan/Desktop/code/webments/src/components/image/streetwear.png";
import useForm from "./useform";



function Fonctionquiz3({setQuiz, setGenre, test}) {
    const [FormRef,handleSubmit,resetForm] = useForm((data)=>{
        console.log(data.answer,test) // Write your submit function here
        setGenre(data.answer)
        setQuiz("question2")
      })

    return (
        <div className="quizz-container" id="quizz">
        <div className="quizz-header">
            <h2 id="question">Quel est ta palette préférée ? </h2>
        
            <ul className="ul2">
            <input type="radio" name="palette" id="a" className="palettegothique"></input> 

                <li>
                    <img src ={gothique} className="palette1"></img> 
                </li>


                <li>
                
                        <img src ={classique} className="palette2"></img>
                </li>

                <li>
                
                        <img src ={streetwear} className="palette3"></img> 
                </li>

            </ul>
        </div>

        <button id="submit">Soumettre</button>

    </div>
            )
}

export default Fonctionquiz3;