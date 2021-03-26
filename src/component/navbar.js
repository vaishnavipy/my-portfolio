import React, { useState,useEffect, useContext } from "react"
import logo from "../react.png"
import { siteContext } from "../siteContext";

function Navbar(){

    const [showBG,setShowBG] = useState(false);

    const {activeLink,handleScrollTo} = useContext(siteContext);

    function onScroll(event){
        if( event.target.scrollingElement.scrollTop >= 100 ){
            setShowBG(true)
        }else{
            setShowBG(false)
        }
      }
    
      useEffect(()=>{
    
        window.addEventListener("scroll",onScroll,true)
      },[])


      
    return(
    <div className={showBG ? "navbar navbar-bg" : "navbar"}>
        <div className="navbar-flex container">
            <div className="logo">
                <img src={logo} />
            </div>

            <div className="navmenu-flex">
                <span className={showBG ? "navmenu navmenu-color" : "navmenu"} onClick={()=>{handleScrollTo("banner")}}>
                    <div className={activeLink === "banner" ? "active-link hover-link" : "hover-link"}></div>
                    ME
                </span>
                <span className={showBG ? "navmenu navmenu-color" : "navmenu"} onClick={()=>{handleScrollTo("projects")}}>
                    <div className={activeLink === "projects" ? "active-link hover-link" : "hover-link"}></div>
                    PROJECTS
                </span>   
                <span href="#" className={showBG ? "navmenu navmenu-color" : "navmenu"} onClick={()=>{handleScrollTo("favorite-tech")}}>
                    <div className={activeLink === "favorite-tech" ? "active-link hover-link" : "hover-link"}></div>
                    WHY ME?
                </span> 
                <span href="#" className={showBG ? "navmenu navmenu-color" : "navmenu"}>
                    <div className="hover-link"></div>
                    LET'S TALK
                </span>
            </div>
        </div>
    </div>)
}

export default Navbar;