import React from 'react'
import './Header.css'
import Logo from '../../assets/logoo.png'
function Header() {
    return (
        <div className="header-wrapper">
            <div className="header-inner">
                <div className="items">
                    <img src={Logo} alt="" />
                </div>
                <div className="items">
                    <ul>
                        <li><a href="#">store Location</a></li>
                        <li><a href="#">Login/Register</a></li>

                    </ul>
                </div>

            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Everyday Value</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" >Disabled</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>

    )

}
export default Header;