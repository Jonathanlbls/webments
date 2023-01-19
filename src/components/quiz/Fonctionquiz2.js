import React from "react";
import hommeclassique from "../image/hommeclassique.png";
import hommestreetwear from '../image/hommestreetwear.png';
import hommegothique from '../image/hommegothique.png';
import useForm from "./useform";

function Fonctionquiz2({setQuiz, setStyle, test}) {
    const [FormRef,handleSubmit,resetForm] = useForm((data)=>{
        console.log(data.answer,test) // Write your submit function here
        setStyle(data.answer)
        setQuiz("question3")
    })

    const handleImageClick = (answer) => {
      FormRef.current.setData({ answer });
      handleSubmit();
    }

    return (
     <form ref={FormRef} onSubmit={handleSubmit} className="quizz-container" id="quizz">
        <div className="quizz-header">
            <h2 id="question">Quel style vestimentaire retiens ton attention ? </h2>
            <ul >
                <li>
                    <img src ={hommeclassique} className="hommeclassique" onClick={() => handleImageClick("hommeclassique")}/>
                </li>

                <li>
                    <img src ={hommestreetwear} className="hommestreetwear" onClick={() => handleImageClick("hommestreetwear")}/>
                </li>
        
                <li>                    
                    <img src ={hommegothique} className="hommegothique" onClick={() => handleImageClick("hommegothique")}/>
                </li>
            </ul>
        </div>
        <button id="submit">Soumettre</button>
    </form>
            )
}

export default Fonctionquiz2;