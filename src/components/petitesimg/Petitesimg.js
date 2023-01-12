import React from 'react';
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import gotimgf1 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgf1.png'
import gotimgf2 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgf2.png'
import gotimgf3 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgf3.png'
import gotimgf4 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgf4.png'

function Petitesimg() {

    return (
      <div>
        <div className='titre'>
          <h3>Nouveautés</h3>
          <div>
            <button  className='paramètres'><GoSettings/></button>
            </div>
        </div>

        <div className="Bloc1">

          <div className='petitesimg'>  
            <div>
              <button  className='like'><AiFillHeart/></button>
            </div>
             <img src={gotimgf1}/>
            <div className='nom'>
              <h5>Nom du vêtement</h5>
              <div className='texte'><p>Modèle du vêtement</p>
              <p>Prix €</p></div>
            </div>
          </div>

          <div className='petitesimg'>
            <div>
              <button className='like'><AiFillHeart/></button>
            </div>
              <img src={gotimgf2}/>
            <div className='nom'>
              <h5>Nom du vêtement</h5>
              <div className='texte'><p>Modèle du vêtement</p>
              <p>Prix €</p></div>
            </div>
          </div>

          <div className='petitesimg'>
            <div>
              <button  className='like'><AiFillHeart/></button>
            </div>
             <img src={gotimgf3}/>
            <div className='nom'>
              <h5>Nom du vêtement</h5>
              <div className='texte'><p>Modèle du vêtement</p>
              <p>Prix €</p></div>
            </div>
          </div>

          <div className='petitesimg'>
            <div>
              <button  className='like'><AiFillHeart/></button>
            </div>
             <img src={gotimgf4}/>
            <div className='nom'>
              <h5>Nom du vêtement</h5>
              <div className='texte'><p>Modèle du vêtement</p>
              <p>Prix €</p></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
  
  export default Petitesimg;