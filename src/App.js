import React from 'react';
import './components/navbar/Gothique.css';
import Gothique from './components/navbar/Gothique';
import Grandeimg from './components/grandeimg/Grandeimg';
import Petitesimg from './components/petitesimg/Petitesimg';
import Footer from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/footer/Footer.js';
import 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/grandeimg/Grandeimg.css'
import 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/petitesimg/Petitesimg.css'
import 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/footer/Footer.css'

function App() {
  const [Image, setImage] = React.useState("Universelle");
  const [Couleur, setCouleur] = React.useState("Rose");
  const [Typo, setTypo] = React.useState("Universelle");
  return (
    <div className="App">
      <Gothique></Gothique>
      <Petitesimg Image={Image} Couleur={Couleur} Typo={Typo}></Petitesimg>
      <Grandeimg></Grandeimg>
      <Footer></Footer>
    </div>
  )
  };

export default App;
