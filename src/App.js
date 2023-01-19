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
  const [Logo, setLogo] = React.useState("Universelle");
  const [Couleur, setCouleur] = React.useState("Universelle");
  const [Typo, setTypo] = React.useState("Universelle");

  const [Gimg, setGimg] = React.useState("Universelle");
  const [Gimgcouleur, setGimgcouleur] = React.useState("Universelle");
  const [Gimgtypo, setGimgtypo] = React.useState("Universelle");

  const [Footcouleur, setFootcouleur] = React.useState("Universelle");
  const [Foottypo, setFootypo] = React.useState("Universelle");

  return (
    <div className="App">
      <Navbar Logo={Logo} Couleur={Couleur} Typo={Typo}></Navbar>
      <Petitesimg/>
      <Grandeimg Gimg={Gimg} Gimgcouleur={Gimgcouleur} Gimgtypo={Gimgtypo} ></Grandeimg>
      <Footer Footcouleur={Footcouleur} Foottypo={Foottypo}></Footer>
    </div>
  )
  };

export default App;
