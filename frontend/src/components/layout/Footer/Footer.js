import React from 'react';
import Appstore from '../../../images/Appstore.png';
import Playstore from '../../../images/playstore.png';
import App from '../../../App';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={Appstore} alt="Appstore" />
            <img src={Playstore} alt="Playstore" />
        </div>

        <div className="midFooter">
            <h1>ECOMMERCE.</h1>
            <p>High Quality is our first priority</p>
            <p>Copyrights 2023 &copy; Lakshman</p>
        </div>

        <div className="rightFooter">
            <h4>FOLLOW US</h4>
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
            <a href="#">Facebook</a>
        </div>
    </footer>
  )
}

export default Footer