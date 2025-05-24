import "../styles/avaleht.css";
import "../styles/global.css"
import { useEffect} from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../functions/Carousel";
import pilt from "../pics/1.jpg";

const images = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg"
];

const Avaleht = () => {


    useEffect(() => {
        document.body.classList.add("avaleht-overflow-hidden");
        window.scrollTo(0, 0);
            return () => {
                document.body.classList.remove("avaleht-overflow-hidden");
            };
    }, []);
    
  return (
    <div className="avaleht-container">
      <div className="avaleht-content">
        <div className="main-content">
          <div className="main-content-width">
            <h1 className="no-select">HENRIK SAEGA</h1>
            <hr />
            <p className="no-select">"You can make money with time, but you can't make time with money"</p>
            <div className="title-images-container no-select">
              {/* {[...Array(3)].map((_, i) => (
                <div key={i} className="title-showcase-image">
                  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000">
                    <path d="M186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66ZM237.33-278h486l-148-197.33-128 167.33-92-124.67-118 154.67Zm-50.66 91.33v-586.66 586.66Z"/>
                  </svg>
                </div>
              ))} */}
              <Carousel items={images} interval={3000}/>
            </div>
          </div>
        </div>
        <div className="side-content">
          <div className="picture-placeholder no-select">
            <img className="no-select" src={pilt} alt="Picture of Henrik, watching sunset."/>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Avaleht;
