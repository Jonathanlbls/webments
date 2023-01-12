import React from 'react';
import gotimgf1 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgf1.png'
import gotimgf2 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgf2.png'
import gotimgf3 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgf3.png'
import gotimgf4 from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimgf4.png'

function Petitesimg() {

    return (
      <div>
        <div className='titre'>
          <h3>Nouveautés</h3>
        </div>

        <div className="Bloc1">

          <div className='petitesimg'>
            <img src={gotimgf1}/>
            <div className='nom'>
              <h5>Nom du vêtement</h5>
              <div className='texte'><p>Modèle du vêtement</p>
              <p>Prix €</p></div>
            </div>
          </div>

          <div className='petitesimg'>
            <img src={gotimgf2}/>
            <div className='nom'>
              <h5>Nom du vêtement</h5>
              <div className='texte'><p>Modèle du vêtement</p>
              <p>Prix €</p></div>
            </div>
          </div>

          <div className='petitesimg'>
            <img src={gotimgf3}/>
            <div className='nom'>
              <h5>Nom du vêtement</h5>
              <div className='texte'><p>Modèle du vêtement</p>
              <p>Prix €</p></div>
            </div>
          </div>

          <div className='petitesimg'>
            <img src={gotimgf4}/>
            <div className='nom'>
              <h5>Nom du vêtement</h5>
              <div className='texte'><p>Modèle du vêtement</p>
              <p>Prix €</p></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
  
  export default Petitesimg;