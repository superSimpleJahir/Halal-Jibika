import { NavLink } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import style from "../../style/Footer.module.css";
import header from '../../style/Header.module.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={`${style.row}`}>
          <div className={`${style.coll} ${header.logo}`}>
            <NavLink to="/">HaLal~JiBiKa</NavLink>
          </div>
          <div className={`${style.coll} ${style.coll1}`}>
            <div className={`${style.subColl}`}>
              <h4>Abouts Us</h4>
              <ul>
                <li>
                  <NavLink to="/">Concept</NavLink>
                </li>
                <li>
                  <NavLink to="/">Franchise</NavLink>
                </li>
                <li>
                  <NavLink to="/">Business</NavLink>
                </li>
                <li>
                  <NavLink to="/">Restaurant signup</NavLink>
                </li>
                <li>
                  <NavLink to="/">For Investors</NavLink>
                </li>
              </ul>
            </div>

            <div className={`${style.subColl}`}>
              <h4>Get help</h4>
              <ul>
                <li>
                  <NavLink to="/">Read FAQs</NavLink>
                </li>
                <li>
                  <NavLink to="/">Restaurants</NavLink>
                </li>
                <li>
                  <NavLink to="/">Specialities</NavLink>
                </li>
                <li>
                  <NavLink to="/">Sign up to deliver</NavLink>
                </li>
                <li>
                  <NavLink to="/">English</NavLink>
                </li>
              </ul>
            </div>

            <div className={`${style.subColl}`}>
              <h4>Contact us</h4>
              <ul>
                <li>
                  <NavLink to="/">Yellow kitchen Paris 11</NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    69 avenue de la Republique 75011 <br /> Paris
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">0800 111 126</NavLink>
                </li>
                <li>
                  <NavLink to="/">contact@yellowkitchens.com</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section className={`${style.dowenFooter}`}>
          <div className={style.coll1}>
            <NavLink to="https://www.instagram.com/jahirul_islam00/">
              <FaInstagramSquare className={style.icon} />
            </NavLink>
            <NavLink to="https://twitter.com/devJahir">
              <FaTwitter className={style.icon} />
            </NavLink>
            <NavLink to="https://www.facebook.com/mohammadjahirul.islam.121/">
              <FaFacebook className={style.icon} />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/jahirul-isla-m">
              <FaLinkedin className={style.icon} />
            </NavLink>
          </div>
          <div className={style.coll}>
            <NavLink to="/">Privacy Policy</NavLink>
            <NavLink to="/">Terms</NavLink>
            <NavLink to="/">© 2020 Yellow kitchen</NavLink>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
