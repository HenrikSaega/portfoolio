import "../styles/aboutme.css"
import "../styles/global.css"
import AboutMeExpandButton from "../functions/AboutMeExpandButton";

const Aboutme = () => {
    return (
        <>
            <div className="global-row global-full-height">
                <div className="col left-intro-container">
                    <div className="aboutme-intro-content-width">
                        <h1>ABOUT ME</h1><hr/>
                        <h2>HENRIK SAEGA</h2>
                        <p>I am a 20 years old student in Tartu Vocational College and currently studying software development.</p>
                    </div>
                </div>
                <div className="aboutme-picture-placeholder-container">
                    <div className="aboutme-picture-placeholder">
                       <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66ZM237.33-278h486l-148-197.33-128 167.33-92-124.67-118 154.67Zm-50.66 91.33v-586.66 586.66Z"/></svg> 
                    </div>
                </div>
            </div>

            <hr className="aboutme-hr"/>

            <div className="aboutme-main-content">
                <p>Choosing between software development and IT system specialist was tough, but my early interest in programming led me to software development.
                In gymnasium, I signed up for a programming course at the University of Tartu, where I learned Python for a year. In my second year of gymnasium, I did my final project on a topic that combined my interests: programming, 3D modeling, IoT, and virtual reality(VR). The goal was to escape from three school rooms using the help of IoT devices. After reaching the goal, players could explore the whole school in VR. During this period, I focused mainly on game development and was learning C#. 
                </p>
            </div>

            <hr className="aboutme-hr"/>

            <div className="familiars">
                <h2>WHAT AM I FAMILIAR WITH</h2>
                <div className="familiar-item-container">
                    <div className="familiar-item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="80%" fill="#FFFFFF"><path d="M0-360v-240h52v86h98.67v-86h52v240h-52v-102H52v102H0Zm314 0v-188h-70v-52h192v52h-70v188h-52Zm163.33 0v-204q0-15.67 10.17-25.83Q497.67-600 513.33-600h193.34q15.66 0 25.83 10.17 10.17 10.16 10.17 25.83v204h-52v-188H636v146.67h-52V-548h-54.67v188h-52Zm324 0v-240h52v188H960v52H801.33Z"/></svg>
                    </div>
                    <div className="familiar-item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="80%" fill="#FFFFFF"><path d="M416-360q-15.67 0-25.83-10.17Q380-380.33 380-396v-44h52v28h96v-48.67H416q-15 0-25.5-10.5t-10.5-25.5V-564q0-15.67 10.17-25.83Q400.33-600 416-600h128q15.67 0 25.83 10.17Q580-579.67 580-564v44h-52v-28h-96v48.67h112q15 0 25.5 10.5t10.5 25.5V-396q0 15.67-10.17 25.83Q559.67-360 544-360H416Zm260 0q-15.67 0-25.83-10.17Q640-380.33 640-396v-44h52v28h96v-48.67H676q-15 0-25.5-10.5t-10.5-25.5V-564q0-15.67 10.17-25.83Q660.33-600 676-600h128q15.67 0 25.83 10.17Q840-579.67 840-564v44h-52v-28h-96v48.67h112q15 0 25.5 10.5t10.5 25.5V-396q0 15.67-10.17 25.83Q819.67-360 804-360H676Zm-520 0q-15.67 0-25.83-10.17Q120-380.33 120-396v-168q0-15.67 10.17-25.83Q140.33-600 156-600h128q15.67 0 25.83 10.17Q320-579.67 320-564v44h-52v-28h-96v136h96v-28h52v44q0 15.67-10.17 25.83Q299.67-360 284-360H156Z"/></svg>
                    </div>
                    <div className="familiar-item">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66ZM237.33-278h486l-148-197.33-128 167.33-92-124.67-118 154.67Zm-50.66 91.33v-586.66 586.66Z"/></svg>
                    </div>
                    <div className="familiar-item">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66ZM237.33-278h486l-148-197.33-128 167.33-92-124.67-118 154.67Zm-50.66 91.33v-586.66 586.66Z"/></svg>
                    </div>
                    <div className="familiar-item">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66ZM237.33-278h486l-148-197.33-128 167.33-92-124.67-118 154.67Zm-50.66 91.33v-586.66 586.66Z"/></svg>
                    </div>
                </div>
            </div>

            <hr className="aboutme-hr"/>
            <div className="aboutme-expand-wrapper">
                    <AboutMeExpandButton/>
                </div>
            <hr className="aboutme-hr"/>
            
            <div className="certifiactions">
                <h2>CERTIFIACTIONS</h2>
                <hr className="cert-hr"/>
                <div className="cert-container">
                    <div className="cert">
                        <h2>How to make a Website with NameCheap</h2>
                        <div className="cert-pic"></div>
                    </div>
                    <div className="cert">
                        <h2>LearnHTML</h2>
                        <div className="cert-pic"></div>
                    </div>
                    <div className="cert">
                        <h2>Learn JavaScript: Functions and Scope Course</h2>
                        <div className="cert-pic"></div>
                    </div>
                    <div className="cert">
                        <h2>Learn JavaScript: Fundamentals Course</h2>
                        <div className="cert-pic"></div>
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