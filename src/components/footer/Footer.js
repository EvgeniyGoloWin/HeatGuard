import React, {useRef} from 'react';
import mail from "../../assets/logo/mail.png";
import phone from "../../assets/logo/phone.png";

export const Footer = () => {
    let contactSectionRef = useRef(null);
    return (
        <div>
            <footer>
                <div className="contact-section" ref={(ref) => (contactSectionRef = ref)}>
                    <h2 className="contact-title">Contact Us</h2>
                    <div className="contact-info">
                        <div className="contact-item">
                            <img src={mail} alt='mail'/>
                            <a href="mailto:info@heatguard.io">info@heatguard.io</a>
                        </div>
                        <div className="contact-item">
                            <img src={phone} alt='Phone'/>
                            <a href="tel:+4560213269">+4560213269</a>
                        </div>
                    </div>
                </div>
                <div className="footer-logo">
                    <p>© Copyright - HeatGuard 2023</p>
                    {/*<img className='footer-logo-img' src={logo} alt="Footer-logo"/>*/}
                </div>
            </footer>
        </div>
    );
};
