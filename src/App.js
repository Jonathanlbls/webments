import React from 'react';
import './components/navbar/Navbar.css';
import Navbar from './components/navbar/Navbar';
import Grandeimg from './components/grandeimg/Grandeimg.js';
import Petitesimg from './components/petitesimg/Petitesimg.js';
import Footer from './components/footer/Footer.js';
import './components/grandeimg/Grandeimg.css'
import './components/petitesimg/Petitesimg.css'
import './components/footer/Footer.css'

function App() {
  const [Logo, setLogo] = React.useState("Street");
  const [Couleur, setCouleur] = React.useState("Street");
  const [Typo, setTypo] = React.useState("Street");


  const [Pimg, setPimg] = React.useState("Universelle");
  const [PimgCouleur, setPimgCouleur] = React.useState("Street");
  const [PimgTypo, setPimgTypo] = React.useState("Street");
 

  const [Gimg, setGimg] = React.useState("Streetn");
  const [Gimgcouleur, setGimgcouleur] = React.useState("Street");
  const [Gimgtypo, setGimgtypo] = React.useState("Street");

  const [Footcouleur, setFootcouleur] = React.useState("Street");
  const [Foottypo, setFootypo] = React.useState("Street");

  return (
    <div className="App">
      <Navbar Logo={Logo} Couleur={Couleur} Typo={Typo}></Navbar>
      <Petitesimg Pimg={Pimg} PimgCouleur={PimgCouleur} PimgTypo={PimgTypo}></Petitesimg>
      <Grandeimg Gimg={Gimg} Gimgcouleur={Gimgcouleur} Gimgtypo={Gimgtypo} ></Grandeimg>
      <Footer Footcouleur={Footcouleur} Foottypo={Foottypo}></Footer>
    
    </div>
  )
  };

export default App;
