import React from "react";
import hommeclassique from "/Users/jonathan/Desktop/code/webments/src/components/image/hommeclassique.png";
import hommestreetwear from '/Users/jonathan/Desktop/code/webments/src/components/image/hommestreetwear.png';
import hommegothique from '/Users/jonathan/Desktop/code/webments/src/components/image/hommegothique.png';
import useForm from "./useform";


function Fonctionquiz2({setQuiz, setGenre, test}) {
    const [FormRef,handleSubmit,resetForm] = useForm((data)=>{
        console.log(data.answer,test) // Write your submit function here
        setGenre(data.answer)
        setQuiz("question3")
      })

    return (
        <div className="quizz-container" id="quizz">
        <div className="quizz-header">
            <h2 id="question">Quel style vestimentaire retiens ton attention ? </h2>
            <ul >
                <li>
                    <img src ={hommeclassique} className="hommeclassique"></img>
                    
                </li>

                <li>
                    <img src ={hommestreetwear} className="hommestreetwear"></img>
                </li>
        
                <li>                    
                    <img src ={hommegothique} className="hommegothique"></img>
                </li>

            </ul>
        </div>

        <button id="submit">Soumettre</button>

    </div>
            )
}

export default Fonctionquiz2;