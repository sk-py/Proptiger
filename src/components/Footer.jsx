import React from 'react';
import { GoLocation } from 'react-icons/go';

import { AiFillPhone,AiFillLinkedin,AiFillMessage} from 'react-icons/ai';

const Footer = () => {
  return (
    <>
    <footer>
        <div className='d1'>
            <h1>Proptiger</h1>
            <p>&all rights reserved</p>
        </div>
            <div className='d2'>
                <a href="/" target={'_blank'}><GoLocation/><br/>Address:Proptiger Main Office
                    123, ABC Building, Main Street,
                    Mumbai,<br/> Maharashtra - 400001
                    India</a>
            </div>
        <div className='Foot'>
            <h5 className='h5'>Connect With Us</h5>
                <a href="/" target={'_blank'}><AiFillPhone/>720867542</a>
                <a href="/" target={'_blank'}><AiFillMessage/>Message</a>
                <a href="/" target={'_blank'}><AiFillLinkedin/>LinkedIn</a>

            </div>
            <div id='connectw'></div>
    </footer>
    </>
  );
};

export default Footer;