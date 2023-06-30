import React from 'react';
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
//import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <FacebookIcon className='sd'/>
      <TwitterIcon/>
      <InstagramIcon/>
      

    </div>
  );
}

export default Footer;