import React from "react";
import gothique from "/Users/jonathan/Desktop/code/webments/src/components/image/gothique.png";
import classique from "/Users/jonathan/Desktop/code/webments/src/components/image/classique.png";
import streetwear from "/Users/jonathan/Desktop/code/webments/src/components/image/streetwear.png";



function Fonctionquiz4({setQuiz}) {

    return (
        <div className="quizz-container" id="quizz">
        <div className="quizz-header">
            <h2 id="question">Quel est ta palette préférée ? </h2>
            
            <div className="checkbox-wrapper">
                <input type="checkbox" id="check" hidden/>
                <label for="check" className="checkmark"></label>
             </div>

            <ul className="ul2">
                <li>
                    <img src ={gothique} className="palette1"></img> 
                </li>

        
                <li>
                <div className="checkbox-wrapper2">
                <input type="checkbox2" id="check2" hidden/>
                <label for="check2" className="checkmark2"></label>
                 </div>
                        <img src ={classique} className="palette2"></img>   
                </li>

                <li>
                <div className="checkbox-wrapper">
                <input type="checkbox" id="check" hidden/>
                <label for="check" className="checkmark"></label>
             </div>
                        <img src ={streetwear} className="palette3"></img>    
                </li>

            </ul>
        </div>

        <button id="submit" onClick={() => setQuiz("Generator")} className>Soumettre</button>

    </div>
            )
}

export default Fonctionquiz4;