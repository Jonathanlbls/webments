import React from 'react';
import { AiFillHeart } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import univimg1 from '../image/univimg1.png'
import univimg2 from '../image/univimg2.png'
import univimg3 from '../image/univimg3.png'
import univimg4 from '../image/univimg4.png'
import gotimgf1 from '../image/gotimgf1.png'
import gotimgf2 from '../image/gotimgf2.png'
import gotimgf3 from '../image/gotimgf3.png'
import gotimgf4 from '../image/gotimgf4.png'
import gotimgh1 from '../image/gotimgh1.png'
import gotimgh2 from '../image/gotimgh2.png'
import gotimgh3 from '../image/gotimgh3.png'
import gotimgh4 from '../image/gotimgh4.png'
import gotimgn1 from '../image/gotimgn1.png'
import gotimgn2 from '../image/gotimgn2.png'
import gotimgn3 from '../image/gotimgn3.png'
import gotimgn4 from '../image/gotimgn4.png'
import classimgf1 from '../image/classimgf1.png'
import classimgf2 from '../image/classimgf2.png'
import classimgf3 from '../image/classimgf3.png'
import classimgf4 from '../image/classimgf4.png'
import classimgh1 from '../image/classimgh1.png'
import classimgh2 from '../image/classimgh2.png'
import classimgh3 from '../image/classimgh3.png'
import classimgh4 from '../image/classimgh4.png'
import classimgn1 from '../image/classimgn1.png'
import classimgn2 from '../image/classimgn2.png'
import classimgn3 from '../image/classimgn3.png'
import classimgn4 from '../image/classimgn4.png'
import streetimgf1 from '../image/streetimgf1.png'
import streetimgf2 from '../image/streetimgf2.png'
import streetimgf3 from '../image/streetimgf3.png'
import streetimgf4 from '../image/streetimgf4.png'
import streetimgh1 from '../image/streetimgh1.png'
import streetimgh2 from '../image/streetimgh2.png'
import streetimgh3 from '../image/streetimgh3.png'
import streetimgh4 from '../image/streetimgh4.png'
import streetimgn1 from '../image/streetimgn1.png'
import streetimgn2 from '../image/streetimgn2.png'
import streetimgn3 from '../image/streetimgn3.png'
import streetimgn4 from '../image/streetimgn4.png'

function Petitesimg({Pimg, PimgCouleur, PimgTypo}) {

    return (
      
      <div className={'fond '+PimgCouleur}>
        <div className={'police '+PimgTypo}>
        <div className={'titre '+PimgCouleur}>
          <h3>Nouveautés</h3>
          <div>
            <button className={'paramètres '+PimgCouleur}><GoSettings/></button>
            </div>
        </div>

        <div className={"Bloc1 "+PimgCouleur}>

          <div className='petitesimg'>  
            <div>
              <button className={'like '+PimgCouleur}><AiFillHeart/></button>
            </div>
              {Pimg === "Universelle" && <img src={univimg1}/>}
              {Pimg === "Gothique femme" && <img src={gotimgf1}/>}
              {Pimg === "Gothique homme" && <img src={gotimgh1}/>}
              {Pimg === "Gothique neutre" && <img src={gotimgn1}/>}
              {Pimg === "Classique femme" && <img src={classimgf1}/>}
              {Pimg === "Classique homme" && <img src={classimgh1}/>}
              {Pimg === "Classique neutre" && <img src={classimgn1}/>}
              {Pimg === "Street femme" && <img src={streetimgf1}/>}
              {Pimg === "Street homme" && <img src={streetimgh1}/>}
              {Pimg === "Street neutre" && <img src={streetimgn1}/>}
            <div className={'nom '+PimgCouleur}>
              <h5>Nom du vêtement</h5>
              <div className='texte'><p>Modèle du vêtement</p>
              <p>Prix €</p></div>
            </div>
          </div>

          <div className='petitesimg'>
            <div>
              <button className={'like '+PimgCouleur}><AiFillHeart/></button>
            </div>
              {Pimg === "Universelle" && <img src={univimg2}/>}
              {Pimg === "Gothique femme" && <img src={gotimgf2}/>}
              {Pimg === "Gothique homme" && <img src={gotimgh2}/>}
              {Pimg === "Gothique neutre" && <img src={gotimgn2}/>}
              {Pimg === "Classique femme" && <img src={classimgf2}/>}
              {Pimg === "Classique homme" && <img src={classimgh2}/>}
              {Pimg === "Classique neutre" && <img src={classimgn2}/>}
              {Pimg === "Street femme" && <img src={streetimgf2}/>}
              {Pimg === "Street homme" && <img src={streetimgh2}/>}
              {Pimg === "Street neutre" && <img src={streetimgn2}/>}
            <div className={'nom '+PimgCouleur}>
              <h5>Nom du vêtement</h5>
              <div className='texte'><p>Modèle du vêtement</p>
              <p>Prix €</p></div>
            </div>
          </div>

          <div className='petitesimg'>
            <div>
              <button className={'like '+PimgCouleur}><AiFillHeart/></button>
            </div>
              {Pimg === "Universelle" && <img src={univimg3}/>}
              {Pimg === "Gothique femme" && <img src={gotimgf3}/>}
              {Pimg === "Gothique homme" && <img src={gotimgh3}/>}
              {Pimg === "Gothique neutre" && <img src={gotimgn3}/>}
              {Pimg === "Classique femme" && <img src={classimgf3}/>}
              {Pimg === "Classique homme" && <img src={classimgh3}/>}
              {Pimg === "Classique neutre" && <img src={classimgn3}/>}
              {Pimg === "Street femme" && <img src={streetimgf3}/>}
              {Pimg === "Street homme" && <img src={streetimgh3}/>}
              {Pimg === "Street neutre" && <img src={streetimgn3}/>}
            <div className={'nom '+PimgCouleur}>
              <h5>Nom du vêtement</h5>
              <div className='texte'><p>Modèle du vêtement</p>
              <p>Prix €</p></div>
            </div>
          </div>

          <div className='petitesimg'>
            <div>
              <button className={'like '+PimgCouleur}><AiFillHeart/></button>
            </div>
              {Pimg === "Universelle" && <img src={univimg4}/>}
              {Pimg === "Gothique femme" && <img src={gotimgf4}/>}
              {Pimg === "Gothique homme" && <img src={gotimgh4}/>}
              {Pimg === "Gothique neutre" && <img src={gotimgn4}/>}
              {Pimg === "Classique femme" && <img src={classimgf4}/>}
              {Pimg === "Classique homme" && <img src={classimgh4}/>}
              {Pimg === "Classique neutre" && <img src={classimgn4}/>}
              {Pimg === "Street femme" && <img src={streetimgf4}/>}
              {Pimg === "Street homme" && <img src={streetimgh4}/>}
              {Pimg === "Street neutre" && <img src={streetimgn4}/>}
            <div className={'nom '+PimgCouleur}>
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