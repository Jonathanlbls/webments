import React from 'react';
import '../components/navbar/Navbar.css';
import Navbar from '../components/navbar/Navbar';
import Grandeimg from '../components/grandeimg/Grandeimg.js';
import Petitesimg from '../components/petitesimg/Petitesimg.js';
import '../components/grandeimg/Grandeimg.css'
import '../components/petitesimg/Petitesimg.css'
import Footer from '../components/footer/Footer.js';
import '../components/footer/Footer.css';

function Generator({Universelle, Genre, Style}) {
  const [Logo, setLogo] = React.useState("Gothique");
  const [Couleur, setCouleur] = React.useState("Universelle");
  const [Typo, setTypo] = React.useState("Universelle");


  const [Pimg, setPimg] = React.useState("Universelle");
  const [PimgCouleur, setPimgCouleur] = React.useState("Universelle");
  const [PimgTypo, setPimgTypo] = React.useState("Universelle");
 

  const [Gimg, setGimg] = React.useState("Universelle");
  const [Gimgcouleur, setGimgcouleur] = React.useState("Universelle");
  const [Gimgtypo, setGimgtypo] = React.useState("Universelle");

  const [Footcouleur, setFootcouleur] = React.useState("Universelle");
  const [Foottypo, setFootypo] = React.useState("Universelle");

  // React.useEffect(()=>{
    
  // setGimg(`${Genre === "Femme" } ${Style === "undefined"}`)
  // setLogo("Universelle");
  // setCouleur("Universelle");
  // setTypo("Universelle");

  // setPimg("Street femme");
  // setPimgCouleur("Universelle");
  // setPimgTypo("Universelle");

  // setGimg("Universelle");
  // setGimgcouleur("Universelle");
  // setGimgtypo("Universelle");
  
  // setFootcouleur("Universelle");
  // setFootypo("Universelle");

    
  //   },[Genre, Style]) 

// states si click sur " aller sur le site Universelle"
    React.useEffect(()=>{
    if(Universelle){
      setLogo("Universelle");
      setCouleur("Universelle");
      setTypo("Universelle");

      setPimg("Universelle");
      setPimgCouleur("Universelle");
      setPimgTypo("Universelle");

      setGimg("Universelle");
      setGimgcouleur("Universelle");
      setGimgtypo("Universelle");
      
      setFootcouleur("Universelle");
      setFootypo("Universelle");
    } 
        },[Universelle]) 



  return (
    <div className="Page">
      <Navbar Logo={Logo} Couleur={Couleur} Typo={Typo}></Navbar>
      <Petitesimg Pimg={Pimg} PimgCouleur={PimgCouleur} PimgTypo={PimgTypo}></Petitesimg>
      <Grandeimg Gimg={Gimg} Gimgcouleur={Gimgcouleur} Gimgtypo={Gimgtypo} ></Grandeimg>
      <Footer Footcouleur={Footcouleur} Foottypo={Foottypo}></Footer>
    
    </div>
  )
  };

export default Generator;
