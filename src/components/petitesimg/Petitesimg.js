import React from 'react';
import { AiFillHeart } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import univimg1 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/univimg1.png'
import univimg2 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/univimg2.png'
import univimg3 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/univimg3.png'
import univimg4 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/univimg4.png'
import gotimgf1 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgf1.png'
import gotimgf2 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgf2.png'
import gotimgf3 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgf3.png'
import gotimgf4 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgf4.png'
import gotimgh1 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgh1.png'
import gotimgh2 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgh2.png'
import gotimgh3 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgh3.png'
import gotimgh4 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgh4.png'
import gotimgn1 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgn1.png'
import gotimgn2 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgn2.png'
import gotimgn3 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgn3.png'
import gotimgn4 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgn4.png'
import classimgf1 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/classimgf1.png'
import classimgf2 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/classimgf2.png'
import classimgf3 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/classimgf3.png'
import classimgf4 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/classimgf4.png'
import classimgh1 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/classimgh1.png'
import classimgh2 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/classimgh2.png'
import classimgh3 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/classimgh3.png'
import classimgh4 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/classimgh4.png'
import classimgn1 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/classimgn1.png'
import classimgn2 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/classimgn2.png'
import classimgn3 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/classimgn3.png'
import classimgn4 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/classimgn4.png'
import streetimgf1 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/streetimgf1.png'
import streetimgf2 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/streetimgf2.png'
import streetimgf3 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/streetimgf3.png'
import streetimgf4 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/streetimgf4.png'
import streetimgh1 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/streetimgh1.png'
import streetimgh2 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/streetimgh2.png'
import streetimgh3 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/streetimgh3.png'
import streetimgh4 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/streetimgh4.png'
import streetimgn1 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/streetimgn1.png'
import streetimgn2 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/streetimgn2.png'
import streetimgn3 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/streetimgn3.png'
import streetimgn4 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/streetimgn4.png'

function Petitesimg({Image, Couleur, Typo}) {

    return (
      
      <div className={'fond '+Couleur}>
        <div className={'police '+Typo}>
        <div className={'titre '+Couleur}>
          <h3>Nouveautés</h3>
          <div>
            <button className={'paramètres '+Couleur}><GoSettings/></button>
            </div>
        </div>

        <div className={"Bloc1 "+Couleur}>

          <div className='petitesimg'>  
            <div>
              <button className={'like '+Couleur}><AiFillHeart/></button>
            </div>
              {Image === "Universelle" && <img src={univimg1}/>}
              {Image === "Gothique femme" && <img src={gotimgf1}/>}
              {Image === "Gothique homme" && <img src={gotimgh1}/>}
              {Image === "Gothique neutre" && <img src={gotimgn1}/>}
              {Image === "Classique femme" && <img src={classimgf1}/>}
              {Image === "Classique homme" && <img src={classimgh1}/>}
              {Image === "Classique neutre" && <img src={classimgn1}/>}
              {Image === "Streetwear femme" && <img src={streetimgf1}/>}
              {Image === "Streetwear homme" && <img src={streetimgh1}/>}
              {Image === "Streetwear neutre" && <img src={streetimgn1}/>}
            <div className={'nom '+Couleur}>
              <h5>Nom du vêtement</h5>
              <div className='texte'><p>Modèle du vêtement</p>
              <p>Prix €</p></div>
            </div>
          </div>

          <div className='petitesimg'>
            <div>
              <button className={'like '+Couleur}><AiFillHeart/></button>
            </div>
              {Image === "Universelle" && <img src={univimg2}/>}
              {Image === "Gothique femme" && <img src={gotimgf2}/>}
              {Image === "Gothique homme" && <img src={gotimgh2}/>}
              {Image === "Gothique neutre" && <img src={gotimgn2}/>}
              {Image === "Classique femme" && <img src={classimgf2}/>}
              {Image === "Classique homme" && <img src={classimgh2}/>}
              {Image === "Classique neutre" && <img src={classimgn2}/>}
              {Image === "Streetwear femme" && <img src={streetimgf2}/>}
              {Image === "Streetwear homme" && <img src={streetimgh2}/>}
              {Image === "Streetwear neutre" && <img src={streetimgn2}/>}
            <div className={'nom '+Couleur}>
              <h5>Nom du vêtement</h5>
              <div className='texte'><p>Modèle du vêtement</p>
              <p>Prix €</p></div>
            </div>
          </div>

          <div className='petitesimg'>
            <div>
              <button className={'like '+Couleur}><AiFillHeart/></button>
            </div>
              {Image === "Universelle" && <img src={univimg3}/>}
              {Image === "Gothique femme" && <img src={gotimgf3}/>}
              {Image === "Gothique homme" && <img src={gotimgh3}/>}
              {Image === "Gothique neutre" && <img src={gotimgn3}/>}
              {Image === "Classique femme" && <img src={classimgf3}/>}
              {Image === "Classique homme" && <img src={classimgh3}/>}
              {Image === "Classique neutre" && <img src={classimgn3}/>}
              {Image === "Streetwear femme" && <img src={streetimgf3}/>}
              {Image === "Streetwear homme" && <img src={streetimgh3}/>}
              {Image === "Streetwear neutre" && <img src={streetimgn3}/>}
            <div className={'nom '+Couleur}>
              <h5>Nom du vêtement</h5>
              <div className='texte'><p>Modèle du vêtement</p>
              <p>Prix €</p></div>
            </div>
          </div>

          <div className='petitesimg'>
            <div>
              <button className={'like '+Couleur}><AiFillHeart/></button>
            </div>
              {Image === "Universelle" && <img src={univimg4}/>}
              {Image === "Gothique femme" && <img src={gotimgf4}/>}
              {Image === "Gothique homme" && <img src={gotimgh4}/>}
              {Image === "Gothique neutre" && <img src={gotimgn4}/>}
              {Image === "Classique femme" && <img src={classimgf4}/>}
              {Image === "Classique homme" && <img src={classimgh4}/>}
              {Image === "Classique neutre" && <img src={classimgn4}/>}
              {Image === "Streetwear femme" && <img src={streetimgf4}/>}
              {Image === "Streetwear homme" && <img src={streetimgh4}/>}
              {Image === "Streetwear neutre" && <img src={streetimgn4}/>}
            <div className={'nom '+Couleur}>
              <h5>Nom du vêtement</h5>
              <div className='texte'><p>Modèle du vêtement</p>
              <p>Prix €</p></div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    );
  }
  
  export default Petitesimg;