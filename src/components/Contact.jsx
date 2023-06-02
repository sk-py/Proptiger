import React from 'react';
// import { useEffect } from 'react';

const Contact = () => {

  return (
    <>
        <div className='Formdiv' id='contactp'>
      <form class="enquiry-form">
  <div class="form-group">
    <h4 className='h4'>Customer Information & Requirements Form </h4>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Your Name" required/>
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="mailto" id="name" name="name" placeholder="Your Name" required/>
  </div>
  
  <div class="form-group">
    <label for="number">Number:</label>
    <input type="tel" id="number" name="number" placeholder="Your Phone Number" required/>
  </div>
  <div class="radio">
    <label for="bhk">BHK:</label>
    <div class="radio-group">
      <input type="radio" id="1bhk" name="bhk" value="1bhk"/>
      <label for="1bhk">1BHK</label>
    </div>
    <div class="radio-group">
      <input type="radio" id="2bhk" name="bhk" value="2bhk"/>
      <label for="2bhk">2BHK</label>
    </div>
    <div class="radio-group">
      <input type="radio" id="3bhk" name="bhk" value="3bhk"/>
      <label for="3bhk">3BHK</label>
    </div>
  </div>


  <div class="form-group">
    <label for="status">Budget:</label>
    <div class="checkbox-group">
      <input type="checkbox" id="under-construction" name="status" value="under-construction"/>
      <label for="under-construction">30 - 50L</label>
    </div>
    <div class="checkbox-group">
      <input type="checkbox" id="rtmi" name="status" value="rtmi"/>
      <label for="rtmi">50 - 70L</label>
    </div>
    <div class="checkbox-group">
      <input type="checkbox" id="rtmi" name="status" value="rtmi"/>
      <label for="rtmi">70L - 1Cr</label>
    </div>
    <div class="checkbox-group">
      <input type="checkbox" id="rtmi" name="status" value="rtmi"/>
      <label for="rtmi">1 Cr Onwards</label>
    </div>
  </div> 
 
  
  <div class="form-group">
    <label for="status">Status:</label>
    <div class="checkbox-group">
      <input type="checkbox" id="under-construction" name="status" value="under-construction"/>
      <label for="under-construction">Under Construction</label>
    </div>
    <div class="checkbox-group">
      <input type="checkbox" id="rtmi" name="status" value="rtmi"/>
      <label for="rtmi">RTMI (Ready to Move In)</label>
    </div>
  </div>
  <div className='Btn'>
  <button type="submit" class="submit-button">Submit</button>
  </div>
</form>

    </div>
    </>

);

};



export default Contact;