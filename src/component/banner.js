import React from "react"
import { useContext, useEffect } from "react/cjs/react.development";
import me from "../images/me.jpeg"
import {SiLinkedin} from "react-icons/si"
import { siteContext } from "../siteContext";

function Banner(){

    const {showSidebar} = useContext(siteContext);

    useEffect(()=>{

        document.querySelector(".banner-content").style.transform = "translateX(0px)";      
        document.querySelector(".banner-img img").style.transform = "translateX(0px)";
    },[])

   

    return(
    <div className={showSidebar ? "app-overlay banner" : "banner"}  id="banner">
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
                <h2><a href="https://www.linkedin.com/in/vaishnaviravichandran/" target="_blank"><SiLinkedin className="icon"/></a></h2>
            </div>
            <div className="banner-img">
                <img src={me} />
            </div>
        </div>
    </div>)
}

export default Banner;