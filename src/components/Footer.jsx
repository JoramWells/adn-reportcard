import logo from '../imgs/logo.jpeg'

const Footer = () => {
  return (
    <div>
                    {/* Footer code */}
                    <div className="footer-container">
                {/* Column 1: Logo */}
                <div className="footer-column-logo">
                    <img src={logo} alt="Logo" className="footer-logo" />
                </div>
                {/* Column 2: Links */}
                <div className="footer-column">
                    <a href="home.html">Home</a>
                    <a href="aboutUs.html">About</a>
                    <a href="contactUs.html">Contact Us</a>
                    <a href="signUp.html">Sign Up</a>
                    <a href="login.html">Login</a>
                </div>
                {/* Column 3: Links */}
                <div className="footer-column">
                    <a href="#">Accesibility Information</a>
                    <a href="#">Copyrignt notice</a>
                    <a href="#">T &amp; Cs</a>
                    <a href="#">Privacy</a>
                    <a href="#">Report Issues</a>
                </div>
                {/* Column 4: Newsletter */}
                <div className="footer-column">
                    <p>Get Your Newsletter</p>
                    <div className="newsletter-container">
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                    <div className="social-icons">
                        <a href="#" className="fa fa-facebook" />
                        <a href="#" className="fa fa-twitter" />
                        <a href="#" className="fa fa-linkedin" />
                        <a href="#" className="fa fa-instagram" />
                    </div>
                </div>
            </div>
            <div className="fixed-footer">
                @ 2023 SKILLIFY, INC
            </div>
    </div>
  )
}

export default Footer