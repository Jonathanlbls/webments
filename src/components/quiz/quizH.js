import React from "react";
import hommeclassique from "../image/hommeclassique.png";
import hommestreetwear from '../image/hommestreetwear.png';
import hommegothique from '../image/hommegothique.png';
import useForm from "./useform";

function Fonctionquizstyle({QuizH,setQuiz, setStyle, test}) {
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
        <div className="top">
     <form ref={FormRef} onSubmit={handleSubmit} className="quizz-container" id="quizz">
        <div className="quizz-header">
            <h2 id="question">Quel style vestimentaire retient ton attention ? </h2>
            <ul >
                <li>
                {QuizH === "hommes" && <img src={hommeclassique}/>}
                </li>

                <li>
                    <img src ={hommestreetwear} className="hommestreetwear" onClick={() => setStyle("hommetreetwear")}/>
                </li>
        
                <li>                    
                    <img src ={hommegothique} className="hommegothique" onClick={() => setStyle("hommegothique")}/>
                </li>
            </ul>
        </div>
<div className="Suivant">        
<button id="submit" >Suivant</button>
</div>
    </form>
    </div>
            )
}

export default Fonctionquizstyle;