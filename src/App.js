import React from 'react';
import "./anais.css"
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
