import React from 'react';
import logogot from 'C:/Users/charlotte.sm/Desktop/webments/webments/src/components/image/logogot.svg';
import { CgLoupe } from "react-icons/cg";
import { CgShoppingBag } from "react-icons/cg";
import { MdFavorite } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MySwitch } from 'C:/Users/charlotte.sm/Desktop/webments/webments/src/components/navbar/MySwitch';

function Gothique() {
 
    return (
      <div className="App">
          <div className='navbarre'>

            <div className='left'>
            <img src={logogot} />
            <div class="ligne"></div>
              <a href="https://www.w3schools.com/">Femme</a>
              <div class="ligne"></div>
              <a href="https://www.w3schools.com/">Homme</a>
              <div class="ligne"></div>
              <a href="https://www.w3schools.com/">Neutre</a>
              <div class="ligne"></div>
            </div>
  
            <div className='right'>
            <MySwitch size="large" className="icon"></MySwitch>
            <a href="/my-page" class="icon">
            <FaUserAlt/>
            </a>
            <a href="/my-page" class="icon">
            <MdFavorite/>
            </a>
            <a href="/my-page" class="icon">
            <CgShoppingBag/>
            </a>
            <a href="/my-page" class="icon">
            <CgLoupe/>
            </a>
            </div>
            </div>

            <div className='dessous'>
            <a href="https://www.w3schools.com/">Promo</a>
            <a href="https://www.w3schools.com/">Nouveautés</a>
            <a href="https://www.w3schools.com/">Vêtements</a>
            <a href="https://www.w3schools.com/">Robes</a>
            <a href="https://www.w3schools.com/">Chaussures</a>
            <a href="https://www.w3schools.com/">Cadeaux</a>
            <a href="https://www.w3schools.com/">Accessoires</a>
            <a href="https://www.w3schools.com/">Sport</a>
            <a href="https://www.w3schools.com/">Hiver</a>
            <a href="https://www.w3schools.com/">Visage&corps</a>
            <a href="https://www.w3schools.com/">Marques</a>
          </div>
          
      </div>
    );
  }
  
  export default Gothique;