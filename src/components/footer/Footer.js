import React from 'react';
import useForm from '../../utile/useform';
  
function Footer({Footcouleur,Foottypo}) {

    const [FormRef,handleSubmit,resetForm] = useForm((data)=>{
    console.log(data) // Write your submit function here
      })
    return (
      <div className={"Typo "+Foottypo}>
      <div className={"B4 "+Footcouleur}>
        <div className={'haut '+Footcouleur}>
            <div className={'g '+Footcouleur}>
                <h4>Sign up to get 30% off</h4>
                <p>
                    Get regular updates about our 
                    new arrivals, discounts and offers.
                </p>
                <form ref={FormRef} onSubmit={handleSubmit}>
                <input name="email" type="text"className={'email '+Footcouleur}/>
                <button id="Send" className='button'>Send</button>
                </form>
                
            </div>
            <div className={'m '+Footcouleur}>
                <h4>Quick Links</h4>
                <a href='https://flexboxfroggy.com/#fr'>Home</a>
                <a href='https://flexboxfroggy.com/#fr'>Shop</a>
                <a href='https://flexboxfroggy.com/#fr'>About Us</a>
                <a href='https://flexboxfroggy.com/#fr'>FAQs</a>
                <a href='https://flexboxfroggy.com/#fr'>Contact Us</a>
                <a href='https://flexboxfroggy.com/#fr'>Privacy Policy</a>
                <a href='https://flexboxfroggy.com/#fr'>Return Policy</a>
                <a href='https://flexboxfroggy.com/#fr'>Affiliate Program</a>
            </div>

            <div className={'d '+Footcouleur}>
                <h4>Connect With Us</h4>
                <a href='https://flexboxfroggy.com/#fr'>Facebook</a>
                <a href='https://flexboxfroggy.com/#fr'>Instagram</a>
                <a href='https://flexboxfroggy.com/#fr'>Tumblr</a>
                <a href='https://flexboxfroggy.com/#fr'>Pinterest</a>
            </div>
        </div>

          <div className={'bas '+Footcouleur}>
          <a href='https://flexboxfroggy.com/#fr'>Copyright © 2021 AJCA. All Rights Reserved.</a>
          </div>
          </div>
      </div>
    );
  }
  
  export default Footer;