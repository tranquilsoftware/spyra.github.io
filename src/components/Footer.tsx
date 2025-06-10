import { useState } from 'react';
import { Mail, Clock, Instagram } from 'lucide-react';
import { ELEVATOR_PITCH, CONTACT_QUOTE_EMAIL, BRAND_NAME, INSTAGRAM_LINK, HREF_PRODUCT_LINK, AVAILABILITY, TRANQUILSOFTWARE_LINK } from '../globals';
import { Link } from 'react-router-dom';
import GooglyEye from './animations/GooglyEye';

const Footer = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    // <footer className="text-content-secondary bg-background border-t border-border">
    <footer id="footer" className="relative bg-background-dark overflow-visible">

      <div className="container px-5 py-16 mx-auto flex flex-col md:flex-row">
        {/* Brand Info */}
        <div className="w-full md:w-1/3 lg:w-1/4 mb-10 md:mb-0">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Link
              to="/" 
              className="flex items-center"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative h-12 w-12 flex items-center justify-center">
                <GooglyEye 
                  size={40}
                  eyeColor="#ffffff" 
                  pupilColor="#000000" 
                  className="transition-transform hover:scale-110"
                />
              </div>
              <span className="text-2xl font-bold gradient-text mx-4">
                {BRAND_NAME}
              </span>
              <div className="relative h-12 w-12 flex items-center justify-center">
                <GooglyEye 
                  size={40}
                  eyeColor="#ffffff" 
                  pupilColor="#000000" 
                  className="transition-transform hover:scale-110"
                />
              </div>
            </Link>

            <p className="mt-2 text-sm w-full max-w-md mx-auto md:mx-0">{ELEVATOR_PITCH}</p>
            {/* <div className="flex space-x-4 mt-4">
              <a 
                href={INSTAGRAM_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-content-secondary hover:text-primary transition-colors"
              > 
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${CONTACT_QUOTE_EMAIL}`}
                className="text-content-secondary hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div> */}
          </div>
        </div>

        {/* Quick Links and Contact */}
        <div className="w-full md:w-2/3 lg:w-3/4 flex flex-wrap">
          <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0">
            <h2 className="title-font font-medium text-content tracking-widest text-sm mb-3 text-center md:text-left">QUICK LINKS</h2>
            <nav className="list-none text-center md:text-left">
              <li className="mb-2">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li className="mb-2">
                <Link to={HREF_PRODUCT_LINK} className="hover:text-primary transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="title-font font-medium text-content tracking-widest text-sm mb-3 text-center md:text-left">CONTACT</h2>
            <nav className="list-none space-y-3">

            <li className="flex items-start justify-center md:justify-start">
              <Instagram className="w-4 h-4 mt-0.5 mr-2 text-primary flex-shrink-0" />
              <a 
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                @{INSTAGRAM_LINK.split('/').filter(Boolean).pop()}
              </a>
            </li>

              <li className="flex items-start justify-center md:justify-start">
                <Mail className="w-4 h-4 mt-0.5 mr-2 text-primary flex-shrink-0" />
                <a href={`mailto:${CONTACT_QUOTE_EMAIL}`} className="hover:text-primary transition-colors">
                  {CONTACT_QUOTE_EMAIL}
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <Clock className="w-4 h-4 mt-0.5 mr-2 text-primary flex-shrink-0" />
                <span>{AVAILABILITY}</span>
              </li>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between items-center">
          <p className="text-content-tertiary text-sm text-center sm:text-left mb-2 sm:mb-0">
            {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <p className="text-content-tertiary text-sm">
            Made by{' '}
            <a 
              href={TRANQUILSOFTWARE_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Tranquil Software
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;