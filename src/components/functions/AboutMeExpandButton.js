import React, { useState } from "react";
import "../styles/WorkButton.css"
import "../styles/aboutme.css"

function AboutMeExpandButton() {
  const [onNähtav, setOnNähtav] = useState(false);

  return (
    <div>
        <div className="WorkAndEducation">
            <h1>WORK EXPERIENCE</h1>
            <h1>EDUCATION</h1>
        </div>
        <h1 className="expand-button">
          <button
            onClick={() => setOnNähtav(!onNähtav)}
        className="expand-button"
          >
            {onNähtav ? 
            <svg xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="5rem" fill="#FFF"><path d="m239-383 241-242 241 242H239Z"/></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="5rem" fill="#FFF"><path d="M480-360 280-559.33h400L480-360Z"/></svg>}
          </button>
        </h1>
      {onNähtav && (
        <div className="aboutme-history">
                <div className="col-md-6 work-experience">
                    <div className="cv-card">
                        <div className="cv-pic"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M146.67-120q-27 0-46.84-19.83Q80-159.67 80-186.67v-466.66q0-27 19.83-46.84Q119.67-720 146.67-720H320v-93.33q0-27 19.83-46.84Q359.67-880 386.67-880h186.66q27 0 46.84 19.83Q640-840.33 640-813.33V-720h173.33q27 0 46.84 19.83Q880-680.33 880-653.33v466.66q0 27-19.83 46.84Q840.33-120 813.33-120H146.67Zm0-66.67h666.66v-466.66H146.67v466.66Zm240-533.33h186.66v-93.33H386.67V-720Zm-240 533.33v-466.66 466.66Z"/></svg></div>
                        <div className="cv-text">
                            <h2>GPV ESTONIA AS</h2>
                            <p>01/2025</p>
                        </div>
                    </div>
                    <div className="cv-card">
                        <div className="cv-pic">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M146.67-120q-27 0-46.84-19.83Q80-159.67 80-186.67v-466.66q0-27 19.83-46.84Q119.67-720 146.67-720H320v-93.33q0-27 19.83-46.84Q359.67-880 386.67-880h186.66q27 0 46.84 19.83Q640-840.33 640-813.33V-720h173.33q27 0 46.84 19.83Q880-680.33 880-653.33v466.66q0 27-19.83 46.84Q840.33-120 813.33-120H146.67Zm0-66.67h666.66v-466.66H146.67v466.66Zm240-533.33h186.66v-93.33H386.67V-720Zm-240 533.33v-466.66 466.66Z"/></svg></div>
                        <div className="cv-text">
                            <h2>GPV ESTONIA AS</h2>
                            <p>06/2023 - 06/2023</p>
                        </div>
                    </div>
                    <div className="cv-card">
                        <div className="cv-pic"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M146.67-120q-27 0-46.84-19.83Q80-159.67 80-186.67v-466.66q0-27 19.83-46.84Q119.67-720 146.67-720H320v-93.33q0-27 19.83-46.84Q359.67-880 386.67-880h186.66q27 0 46.84 19.83Q640-840.33 640-813.33V-720h173.33q27 0 46.84 19.83Q880-680.33 880-653.33v466.66q0 27-19.83 46.84Q840.33-120 813.33-120H146.67Zm0-66.67h666.66v-466.66H146.67v466.66Zm240-533.33h186.66v-93.33H386.67V-720Zm-240 533.33v-466.66 466.66Z"/></svg></div>
                        <div className="cv-text">
                            <h2>GPV ESTONIA AS</h2>
                            <p>06/2022 - 08/2022</p>
                        </div>
                    </div>
                    <div className="cv-card">
                        <div className="cv-pic"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M146.67-120q-27 0-46.84-19.83Q80-159.67 80-186.67v-466.66q0-27 19.83-46.84Q119.67-720 146.67-720H320v-93.33q0-27 19.83-46.84Q359.67-880 386.67-880h186.66q27 0 46.84 19.83Q640-840.33 640-813.33V-720h173.33q27 0 46.84 19.83Q880-680.33 880-653.33v466.66q0 27-19.83 46.84Q840.33-120 813.33-120H146.67Zm0-66.67h666.66v-466.66H146.67v466.66Zm240-533.33h186.66v-93.33H386.67V-720Zm-240 533.33v-466.66 466.66Z"/></svg></div>
                        <div className="cv-text">
                            <h2>GPV ESTONIA AS</h2>
                            <p>06/2021 - 08/2021</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 education">
                    <div className="cv-card">
                        <div className="cv-text">
                            <h2>TARTU RAKENDUSLIK KOLLEDŽ</h2>
                            <p>2024</p>
                        </div>
                        <div className="cv-pic"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M479.33-120 192.67-276.67v-240L40-600l439.33-240L920-600v318h-66.67v-280L766-516.67v240L479.33-120Zm0-316 301.34-164-301.34-162-300 162 300 164Zm0 240.33 220-120.66v-162.34L479.33-360l-220-120v163.67l220 120.66ZM480-436Zm-.67 79.33Zm0 0Z"/></svg></div>
                    </div>
                    <div className="cv-card">
                        <div className="cv-text">
                            <h2>VALGA GÜMNAASIUM</h2>
                            <p>2020 - 2023</p>
                        </div>
                        <div className="cv-pic"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M479.33-120 192.67-276.67v-240L40-600l439.33-240L920-600v318h-66.67v-280L766-516.67v240L479.33-120Zm0-316 301.34-164-301.34-162-300 162 300 164Zm0 240.33 220-120.66v-162.34L479.33-360l-220-120v163.67l220 120.66ZM480-436Zm-.67 79.33Zm0 0Z"/></svg></div>
                    </div>
                    <div className="cv-card">
                        <div className="cv-text">
                            <h2>TSIRGULIINA KOOL</h2>
                            <p>2011 - 2020</p>
                        </div>
                        <div className="cv-pic"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M479.33-120 192.67-276.67v-240L40-600l439.33-240L920-600v318h-66.67v-280L766-516.67v240L479.33-120Zm0-316 301.34-164-301.34-162-300 162 300 164Zm0 240.33 220-120.66v-162.34L479.33-360l-220-120v163.67l220 120.66ZM480-436Zm-.67 79.33Zm0 0Z"/></svg></div>
                    </div>
                </div>
            </div>
      )}
    </div>
  );
}

export default AboutMeExpandButton;
