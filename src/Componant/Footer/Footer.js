import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';



const Footer = () => {


    return (
        <div className="footer">
            © CureHealth. All Right reserved
            <div className="m-3 icon">

                <p className="m-2"> < FaFacebook size='30px' /> </p>
                <p className="m-2">< FaTwitter size='30px' /></p>
                <p className="m-2">< FaInstagram size='30px' /></p>
                <p className="m-2">< FaYoutube size='30px' /></p>





            </div>


        </div>
    );
};

export default Footer;
