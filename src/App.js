import React from 'react';
import './components/navbar/Gothique.css';
import Gothique from './components/navbar/Gothique';
import Grandeimg from './components/grandeimg/Grandeimg';
import Petitesimg from './components/petitesimg/Petitesimg';
import 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/grandeimg/Grandeimg.css'
import 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/petitesimg/Petitesimg.css'



function App() {
  return (
    <div className="App">
      <Gothique></Gothique>
      <Petitesimg></Petitesimg>
      <Grandeimg></Grandeimg>
    </div>
  )
  };

export default App;
