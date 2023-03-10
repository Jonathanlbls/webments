import React from 'react';
import logogot from "../image/logogot.svg";
import classiquelog from "../image/classiquelog.svg";
import universellelog from "../image/universellelog.svg";
import streetlog from "../image/streetlog.svg";
import { CgLoupe } from "react-icons/cg";
import { CgShoppingBag } from "react-icons/cg";
import { MdFavorite } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MySwitch } from "./MySwitch";

function Navbar({Logo, Couleur, Typo}) {
  
    return (

      <div className={"App "+Typo}>
      <div className='navbar'>
          <div className={"dessus "+Couleur}>

            <div className= {"left "+Couleur}>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              {Logo === "Universelle" && <img src={universellelog}/>}
              {Logo === "Classique" && <img src={classiquelog}/>}
              {Logo === "Gothique" && <img src={logogot}/>}
              {Logo === "Street" && <img src={streetlog}/>}

              </a>
              <div class="ligne"></div>
                <a href="https://www.w3schools.com/">Femme</a>
                <div class="ligne"></div>
                <a href="https://www.w3schools.com/">Homme</a>
                <div class="ligne"></div>
                <a href="https://www.w3schools.com/">Neutre</a>
                <div class="ligne"></div>
            </div>
  
            <div className='right'>
              <a href="/my-page">
              <MySwitch class={"icon " +Couleur}></MySwitch>
              </a>
              <a href="/my-page" class={"icon " +Couleur}>
              <FaUserAlt/>
              </a>
              <a href="/my-page" class={"icon " +Couleur}>
              <MdFavorite/>
              </a>
              <a href="/my-page" class={"icon " +Couleur}>
              <CgShoppingBag/>
              </a>
              <a href="/my-page" class={"icon " +Couleur}>
              <CgLoupe/>
              </a>
            </div>
          </div>
 
          <div className={'dessous '+Couleur}>
            <a href="https://www.w3schools.com/">Promo</a>
            <a href="https://www.w3schools.com/">Nouveaut??s</a>
            <a href="https://www.w3schools.com/">V??tements</a>
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
      </div>
    );
  }


  export default Navbar;