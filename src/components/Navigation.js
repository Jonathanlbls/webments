import React from 'react';


function Navigation() {
  return (
    <div className="App">
        <div className='navbarre'>

          <div className='left'>
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png" alt=''/> */}
            <img src='/Capture d’écran 2022-12-16 120712.png'/>
            <a href="https://www.w3schools.com/">Pricing</a>
            <a href="https://www.w3schools.com/">Blog</a>
            <a href="https://www.w3schools.com/">Widgets</a>
            <a href="https://www.w3schools.com/">Feedback</a>
          </div>

          <div className='right'>
            <a href="https://www.w3schools.com/">Sign in</a>
            <button type="button">Sign up for free</button>
          </div>

        </div>
    </div>
  );
}

export default Navigation;
