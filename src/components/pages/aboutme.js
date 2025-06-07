import "../styles/aboutme.css"
import "../styles/global.css"
import OtherSkillsToggle from "../functions/otherSkills";
import certNameCheap from "../pics/How to Make a Website with NameCheap Course.PNG";
import certLearmHTML from "../pics/Learn HTML Course.PNG"
import certJSFundamental from "../pics/JS - Fundamentals Course.PNG";
import certJSFunctions from "../pics/JS - Functions and Scope Course.png";

import pilt from "../pics/2.png";

const Aboutme = () => {
    return (
        <>
            <div className="aboutme-row">
                <div className="text-container">
                    <div className="text-content-width">
                        <h1 className="no-select">ABOUT ME</h1><hr/>
                        <h2 className="no-select">HENRIK SAEGA</h2>
                        <p className="no-select">I am a 20 years old student in Tartu Vocational College and currently studying software development.</p>
                    </div>
                </div>
                <div className="aboutme-picture-placeholder-container">
                    <div className="aboutme-picture-placeholder">
                        <img className="no-select" src={pilt} alt="Picture of Henrik, watching sunset."/>
                    </div>
                </div>
            </div>

            <hr className="aboutme-hr"/>

            <div className="aboutme-main-content">
                <div className="text-section">
                    <p>
                        Choosing between software development and IT system specialist was tough, but my early interest in programming led me to software development.
                    </p>
                </div>
                <div className="text-section">
                    <p>
                        In gymnasium, I signed up for a programming course at the University of Tartu, where I learned Python for a year. In my second year of gymnasium, I did my final project on a topic that combined my interests: programming, 3D modeling, IoT, and virtual reality.
                    </p>
                </div>
                <div className="text-section">
                    <p>
                        I am calm and thoughtful and work well under pressure - a mindset shaped further by military service in Kuperjanov Infantry Batallion. I take the initiative of tasks and see them through with discipline and teamwork.
                    </p>
                </div>
            </div>

            <hr className="aboutme-hr"/>

            <div className="skills">
                <h2 className="no-select">SKILLS</h2>
                <div className="skills-item-container">
                    <div className="skills-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
                        <p className="no-select">HTML</p>
                    </div>
                    <div className="skills-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
                        <p className="no-select">CSS</p>
                    </div>
                    <div className="skills-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
                        <p className="no-select">JavaScript</p>
                    </div>
                    <div className="skills-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"/>
                        <p className="no-select">GitHub</p>
                    </div>
                    <div className="skills-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg"/>
                        <p className="no-select">WordPress</p>
                    </div>
                    <div className="skills-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>
                        <p className="no-select">React</p>
                    </div>
                    <div className="skills-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg"/>
                        <p className="no-select">MariaDB</p>
                    </div>
                </div>
                <OtherSkillsToggle/>
            </div>
            
            <hr className="aboutme-hr"/>

            <div className="certifiactions">
                <p className="no-select main-p">CodeCademy</p>
                <h2 className="no-select">CERTIFICATIONS</h2>
                
                <div className="cert-container">
                    <div className="cert">
                        <p className="no-select">How to make a Website with NameCheap</p>
                        <div className="cert-pic">
                            <img src={certNameCheap} alt=""/>
                        </div>
                    </div>
                    <div className="cert">
                        <p className="no-select">LearnHTML</p>
                        <div className="cert-pic">
                            <img src={certLearmHTML} alt=""/>
                        </div>
                    </div>
                    <div className="cert">
                        <p className="no-select">Learn JavaScript: Functions and Scope Course</p>
                        <div className="cert-pic">
                            <img src={certJSFunctions} alt=""/>
                        </div>
                    </div>
                    <div className="cert">
                        <p className="no-select">Learn JavaScript: Fundamentals Course</p>
                        <div className="cert-pic">
                            <img src={certJSFundamental} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="aboutme_footer">
                <p>&copy; 2025 All rights reserved</p>
            </footer>
        </>
      );
}
export default Aboutme