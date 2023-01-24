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
      <div className={"App "+Couleur}>
      <div className={'navbar '+Typo}>
          <div className= {"dessus "+Couleur}>

            <div className= {"left "+Couleur}>
              <a href="https://www.example.com">
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
      </div>
    );
  }
  
  export default Navbar;