import React, {useRef} from 'react';
import logo from "../../assets/icon/new_logo-removebg-preview.png";
import {Link} from "react-scroll";
import './header.css';

export const Header = () => {
    let technologySectionRef = useRef(null);
    let aboutSectionRef = useRef(null);
    return (
        <div>
            <header className="header">
                <div className='header-content'>
                    <div className='left-content'>
                        <img className='header-logo' src={logo} alt='Logo'/>
                    </div>
                    <div className="right-content">
                        <div className="header-buttons">
                            <Link to="video-player" smooth={true} duration={600}>
                                <button className="scroll-button">Video</button>
                            </Link>
                            <Link to="benefit-section" smooth={true} duration={600}>
                                <button className="scroll-button">Technology</button>
                            </Link>
                            <Link to="about-section" smooth={true} duration={600}>
                                <button className="scroll-button">About Us</button>
                            </Link>
                            <Link to="contact-section" smooth={true} duration={600}>
                                <button className="scroll-button">Contact Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="header-quote">
                    <blockquote>
                        <p>
                            “It has long been known that the cheapest and cleanest unit of energy is the one you don’t
                            need to use.”
                        </p>
                        <cite>David Brooks, the Concord Monitor.</cite>
                    </blockquote>
                </div>
            </header>
        </div>
    );
};
