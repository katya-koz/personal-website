import React from 'react';
import '../Global/App.scss'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer id = "footer" className="section">
            <div className="footer-content">
                <div className="footer-copyright paragraph">
                    &copy;  Copyright {new Date().getFullYear()} Katya Kozlovsky
                </div>
            </div>
        </footer>
    );
};

export default Footer;
