import React, { Component } from 'react';
import { CgComponents } from 'react-icons/cg';
import Uniimg from '../image/Uniimg.png'
import gotimgf from '../image/gotimgf.png'
import gotimgm from '../image/gotimgm.png'
import gotimgn from '../image/gotimgn.png'
import classimgf from '../image/classimgf.png'
import classimgm from '../image/classimgm.png'
import classimgn from '../image/classimgn.png'
import streetimgm from '../image/streetimgm.png'
import streetimgf from '../image/streetimgf.png'
import streetimgn from '../image/streetimgn.png'


function Grandeimg({Gimg, Gimgcouleur, Gimgtypo}) {

    return (
      <div className={"font "+Gimgtypo}>
      <div className={"Bloc3 "+Gimgcouleur}>
          <div className={'text '+Gimgcouleur}>
          <h3>NOM DU VETEMENT</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <a href='https://flexboxfroggy.com/#fr'>Acheter maintenant</a>
          </div>

          <div className={'photo '+Gimgcouleur}>

          {Gimg === "Universelle" && <img src={Uniimg}/>}

          {/* Gothique */}
          {Gimg === "Gothiquef" && <img src={gotimgf}/>}
          {Gimg === "Gothiquem" && <img src={gotimgm}/>}
          {Gimg === "Gothiquen" && <img src={gotimgn}/>}

          {/* Classique */}
          {Gimg === "Classiquef" && <img src={classimgf}/>}
          {Gimg === "Classiquem" && <img src={classimgm}/>}
          {Gimg === "Classiquen" && <img src={classimgn}/>}

          {/* Street */}
          {Gimg === "Streetm" && <img src={streetimgm}/>}
          {Gimg === "Streetf" && <img src={streetimgf}/>}
          {Gimg === "Streetn" && <img src={streetimgn}/>}
          
          <p className={'reduction '+Gimgcouleur}>50%</p>
          </div>

      </div>
      </div>
    );
  }
  
  export default Grandeimg;