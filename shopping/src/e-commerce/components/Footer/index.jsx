import React from 'react'
import './index.scss';

const Footer = () => {
    return (
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col-1">
                        <h3>Download Our App</h3>
                        <p>Download App for Android and iso mobile phone.</p>
                        <div class="app-logo">
                            <img src="https://i.ibb.co/KbPTYYQ/play-store.png" alt="" />
                            <img src="https://i.ibb.co/hVM4X2p/app-store.png" alt="" />
                        </div>
                    </div>

                    <div class="footer-col-2">
                        <img src="https://pbs.twimg.com/profile_images/1610235070589304837/sL2eCR-X_400x400.jpg" alt="" />
                        <p>
                            Our Purpose Is To Sustainably Make the Pleasure and Benefits of
                            Sports Accessible to the Many.
                        </p>
                    </div>

                    <div class="footer-col-3">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>

                    <div class="footer-col-4">
                        <h3>Follow us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>YouTube</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p class="copyright">Copyright &copy; 2021 - Red Store</p>
            </div>
        </div>
    )
}
export default Footer;