import './Footer.css'
import React from 'react'
import footer_logo from '../../assets/footer-logo.png'
import apple_logo from '../../assets/app-store.png'
function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-inner">
                <div className="footer-top">
                    <div className="item">
                        <img src={footer_logo} />
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="items">


                        <ul>
                            <li>Information</li>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">matio book</a></li>
                            <li><a href="#">privacy policy</a></li>

                        </ul>
                    </div>
                    <div className="items">
                        <ul>
                            <li>Food</li>
                            <li><a href="#">Select recipie</a></li>

                        </ul>
                    </div>
                    <div className="items">
                        <ul>
                            <li>lLocations</li>
                            <li><a href="#">Find aa store</a></li>

                        </ul>
                    </div>
                    <div className="items">
                        <ul>
                            <li>Get in touch</li>
                            <li><a href="#">contact us</a></li>
                            <li><a href="#">join us</a></li>
                            <li><a href="#">scolor ship</a></li>
                            <li><a href="#">term and condition</a></li>
                        </ul>
                    </div>
                    <div className="items">
                        <img src={apple_logo} />
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Footer;