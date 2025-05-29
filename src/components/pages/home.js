import "../styles/home.css";
import "../styles/global.css"
import { useEffect} from "react";
import Carousel from "../functions/Carousel";
import pilt from "../pics/1-1.png";

const images = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg"
];

const Home = () => {


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

export default Home;