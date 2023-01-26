import React from 'react';
import '../components/navbar/Navbar.css';
import Navbar from '../components/navbar/Navbar';
import Grandeimg from '../components/grandeimg/Grandeimg.js';
import Petitesimg from '../components/petitesimg/Petitesimg.js';
import '../components/grandeimg/Grandeimg.css'
import '../components/petitesimg/Petitesimg.css'
import Footer from '../components/footer/Footer.js';
import '../components/footer/Footer.css';

function Generator({Universelle, Style, Palette,}) {
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


  // IMAGE

  // Homme
  // states si click sur "homme classique"
  React.useEffect(()=>{
    if(Style === "Classique homme"){
  setLogo("Classique");
  setPimg("Classique homme");
  setGimg("Classique homme");
    }
  },[Style]) 

   // states si click sur "homme gothique"
   React.useEffect(()=>{
    if(Style === "Gothique homme"){
  setLogo("Gothique");
  setPimg("Gothique homme");
  setGimg("Gothique homme");
    }
  },[Style]) 

     // states si click sur "homme street"
   React.useEffect(()=>{
    if(Style === "Street homme"){
  setLogo("Street");
  setPimg("Street homme");
  setGimg("Street homme");
    }
  },[Style]) 


  // Femme
  // states si click sur "femme classique"
  React.useEffect(()=>{
    if(Style === "Classique femme"){
  setLogo("Classique");
  setPimg("Classique femme");
  setGimg("Classique femme");
    }
  },[Style]) 

   // states si click sur "femme gothique"
   React.useEffect(()=>{
    if(Style === "Gothique femme"){
  setLogo("Gothique");
  setPimg("Gothique femme");
  setGimg("Gothique femme");
    }
  },[Style]) 

     // states si click sur "femme street"
   React.useEffect(()=>{
    if(Style === "Street femme"){
  setLogo("Street");
  setPimg("Street femme");
  setGimg("Street femme");
    }
  },[Style]) 


  // Neutre
  // states si click sur "neutre classique"
  React.useEffect(()=>{
    if(Style === "Classique neutre"){
  setLogo("Classique");
  setPimg("Classique neutre");
  setGimg("Classique neutre");
    }
  },[Style]) 

   // states si click sur "femme gothique"
   React.useEffect(()=>{
    if(Style === "Gothique neutre"){
  setLogo("Gothique");
  setPimg("Gothique neutre");
  setGimg("Gothique neutre");
    }
  },[Style]) 

     // states si click sur "femme street"
   React.useEffect(()=>{
    if(Style === "Street neutre"){
  setLogo("Street");
  setPimg("Street neutre");
  setGimg("Street neutre");
    }
  },[Style]) 



// COULEURS

     // states si click sur "couleur Classique"
     React.useEffect(()=>{
      if(Palette === "Classique"){
        setCouleur("Classique");
        setTypo("Classique");
  
        setPimgCouleur("Classique");
        setPimgTypo("Classique");
  
        setGimgcouleur("Classique");
        setGimgtypo("Classique");
        
        setFootcouleur("Classique");
        setFootypo("Classique");
      }
    },[Style]) 

         // states si click sur "couleur Gothique"
         React.useEffect(()=>{
          if(Palette === "Gothique"){
            setCouleur("Gothique");
            setTypo("Gothique");
      
            setPimgCouleur("Gothique");
            setPimgTypo("Gothique");
      
            setGimgcouleur("Gothique");
            setGimgtypo("Gothique");
            
            setFootcouleur("Gothique");
            setFootypo("Gothique");
          }
        },[Style]) 

         // states si click sur "couleur Rose"
         React.useEffect(()=>{
          if(Palette === "Rose"){
            setCouleur("Rose");
      
            setPimgCouleur("Rose");
      
            setGimgcouleur("Rose");
            
            setFootcouleur("Rose");
          }
        },[Style])


         // states si click sur "couleur Rose et Gothique"
        React.useEffect(()=>{
          if(Palette === "Rose" && Style==="Gothique femme" || Style==="Gothique homme"|| Style==="Gothique neutre" ){
            setCouleur("Rose");
            setTypo("Gothique");
      
            setPimgCouleur("Rose");
            setPimgTypo("Gothique");
      
            setGimgcouleur("Rose");
            setGimgtypo("Gothique");
            
            setFootcouleur("Rose");
            setFootypo("Gothique");
          }
        },[Style]) 


         // states si click sur "couleur Vert"
         React.useEffect(()=>{
          if(Palette === "Vert"){
            setCouleur("Vert");
      
            setPimgCouleur("Vert");
      
            setGimgcouleur("Vert");
            
            setFootcouleur("Vert");
          }
        },[Style])

         // states si click sur "couleur Ciel"
         React.useEffect(()=>{
          if(Palette === "Ciel"){
            setCouleur("Ciel");
      
            setPimgCouleur("Ciel");
      
            setGimgcouleur("Ciel");
            
            setFootcouleur("Ciel");
          }
        },[Style])

         // states si click sur "couleur Street"
         React.useEffect(()=>{
          if(Palette === "Street"){
            setCouleur("Street");
            setTypo("Street");
      
            setPimgCouleur("Street");
            setPimgTypo("Street");
      
            setGimgcouleur("Street");
            setGimgtypo("Street");
            
            setFootcouleur("Street");
            setFootypo("Street");
          }
        },[Style]) 

        


// states si click sur " aller sur le site Universel"
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
