import React from 'react';
import gotimg from 'C:/Users/anais/Documents/Ynov/Design génératif/webments/src/components/image/gotimg.png'

function Grandeimg() {

    return (
      <div className="Bloc3">
          <div className='text'>
          <h3>NOM DU VETEMENT</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <a href='https://flexboxfroggy.com/#fr'>Acheter maintenant</a>
          </div>

          <div className='photo'>
          <img src={gotimg}/>
          <p className='reduction'>50%</p>
          </div>

      </div>
    );
  }
  
  export default Grandeimg;