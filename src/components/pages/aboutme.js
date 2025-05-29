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
            <div className="global-row global-full-height">
                <div className="col left-intro-container">
                    <div className="aboutme-intro-content-width">
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
                <p className="no-select">Choosing between software development and IT system specialist was tough, but my early interest in programming led me to software development.
                <br/>In gymnasium, I signed up for a programming course at the University of Tartu, where I learned Python for a year. In my second year of gymnasium, I did my final project on a topic that combined my interests: programming, 3D modeling, IoT, and virtual reality. The goal was to escape from three school rooms using the help of IoT devices. After reaching the goal, players could explore the whole school in VR. During this period, I focused mainly on game development and was learning C#. 
                <br/>I am calm and thoughtful and work well under pressure—a mindset shaped further by 11 months of military service in Kuperjanov Infantry Batallion. I take the initiative of tasks and see them through with discipline and teamwork.
                </p>
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
            </div>
            
            <OtherSkillsToggle/>
            <hr className="aboutme-hr"/>
            
            <div className="certifiactions">
                <h2 className="no-select">CERTIFIACTIONS</h2>
                <hr className="cert-hr"/>
                <div className="cert-container">
                    <div className="cert">
                        <h2 className="no-select">How to make a Website with NameCheap</h2>
                        <div className="cert-pic">
                            <img src={certNameCheap} alt=""/>
                        </div>
                    </div>
                    <div className="cert">
                        <h2 className="no-select">LearnHTML</h2>
                        <div className="cert-pic">
                            <img src={certLearmHTML} alt=""/>
                        </div>
                    </div>
                    <div className="cert">
                        <h2 className="no-select">Learn JavaScript: Functions and Scope Course</h2>
                        <div className="cert-pic">
                            <img src={certJSFunctions} alt=""/>
                        </div>
                    </div>
                    <div className="cert">
                        <h2 className="no-select">Learn JavaScript: Fundamentals Course</h2>
                        <div className="cert-pic">
                            <img src={certJSFundamental} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>&copy; 2025 All rights reserved</p>
            </footer>
        </>
      );
}
export default Aboutme