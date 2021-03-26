import React from "react"
import { useEffect } from "react/cjs/react.development";

function Banner(){

   

    return(
    <div className="banner"  id="banner">
        <div className="banner-grid container">
            <div className="banner-content">
                <h4>Hi there,I'am</h4>
                <h1 className="banner-name">
                    Vaish Ravichandran
                </h1>
                <h2 className="banner-role">
                    FrontEnd Developer
                </h2>
                <h4>at Stuck.AI</h4>
                <p>
                    I am a self taught Front-end developer, with an entrepreneurial spirit and a passion for coding and buidling beautiful websites/applications.
                    My liking for clean, simple but beautiful things will be reflected in my websites architecture. Learning new technolgies to make my websites more robust and 
                    and keeping up-to-date ( and some Pinot Noir  ;) ) excite me the most. 
                </p>

            </div>
            <div className="banner-img">
                
            </div>
        </div>
    </div>)
}

export default Banner;