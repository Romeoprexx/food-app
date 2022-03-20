import {
  FaLinkedinIn,
  FaGooglePlay,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaHeart,
  FaAppStoreIos,
  

} from "react-icons/fa";
import {BsMicrosoft} from "react-icons/bs"
import {GrAppleAppStore} from "react-icons/gr"

const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <div className="socials">
          <div className="socialLinks">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div className="tenhang">
          <span className="logoFooter">
            <img className="myLogo" src="https://logos.textgiraffe.com/logos/logo-name/Romeo-designstyle-colors-m.png" alt="Logo" />
          </span>
          <p className="uk">
             Made with  <span><FaHeart className="heart"/></span>by Romeo
            <p className="copy">Copyrights 2022 Deno's Romeo Acuity. All Rights Reserved</p>
            <p className="place">123 Wharf Road Sydney, NSW</p>
          </p>
        </div>

       
        <div className="icons">

          <span>
            <BsMicrosoft />
          </span>
          <span>
            <FaGooglePlay />
          </span>
          <span>
            <GrAppleAppStore />
          </span>
        </div>
      </footer>
      
    </div>
  );
};
export default Footer;
