import React from 'react';
import vg from "../Assets/home2.png";
import { Link } from 'react-router-dom';
import {AiFillGoogleCircle,AiFillFacebook,AiFillYoutube,AiFillInstagram} from"react-icons/ai";


const Home = () => {
  return (
    <>
    
    <div className='home'>
   <main>
    <h1 className='bt'>Proptiger</h1>
    <p>Property Hunter</p>
   </main>


   </div>


   <div id="about" className="home2">
    <main>
    <img className='vectorg' src={vg} alt="Graphics" />
    
        <p><span className='welcome'>Welcome To Proptiger!</span> <br/>We specialize in connecting you with top-notch channel partner firms
           that offer exceptional opportunities.<br/>
           Trust us to represent your interests and make your real estate journey seamless and stress-free. <br/>
           Start your search today and let us help you find the perfect place to call home.<br/>
         <Link to={"/contact"}>Start Now</Link></p>
   </main>
   </div>
   <div></div>
  <div className="home3">
    <div>
    <h1> Why us ?</h1>
    <h2> Choose Excellence <span className='colon'>:</span> Unmatched Real Estate Deals Since the 2000s</h2>
    <p>
    <strong className='strong'>O</strong>ur team has a proven track record of executing extraordinary real estate deals since the early 2000s.<br/> With our unrivaled expertise,
      unwavering dedication, and a deep understanding of the market,
      we consistently deliver outstanding results.Trust in our legacy and join us in shaping the future of real estate.
    </p>
    </div>
  </div>

  <div id="socials" className="home4">
    <div>
      <h1>
        Get Social
      </h1>
      <article>
         <div style={
          {
            animationDelay:"0s",
          }
         }>
          <AiFillGoogleCircle/>
          <p>Google</p>
         </div>
         <div style={
           {
            animationDelay:"0.6s",
          }
         }>
          <AiFillFacebook/>
          <p>Facebook</p>
         </div>
         <div style={
           {
            animationDelay:"1s",
          }
         }>
          <AiFillInstagram/>
          <p>Instagram</p>
         </div>
         <div style={
           {
            animationDelay:"1.6s",
          }
         }>
          <AiFillYoutube/>
          <p>Youtube</p>
         </div>
      </article>
    </div>
  </div>
   
   </>
  );
};

export default Home;