import React, { useState,useEffect, useContext } from "react"
import logo from "../react.png"
import { siteContext } from "../siteContext";
import {HiMenuAlt3} from "react-icons/hi"
import {AiFillCloseCircle} from "react-icons/ai"

function Navbar(){

    const [showBG,setShowBG] = useState(false);

    const {activeLink,handleScrollTo,showSidebar,handleShowSideBar} = useContext(siteContext);



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
                <span href="#" className={showBG ? "navmenu navmenu-color" : "navmenu"} onClick={()=>{handleScrollTo("contact")}}>
                    <div className={activeLink === "contact" ? "active-link hover-link" : "hover-link"}></div>
                    LET'S TALK
                </span>
            </div>
            <div className={showBG ? "sidebar-icon-color sidebar-icon" : "sidebar-icon"} onClick={handleShowSideBar}>
                <HiMenuAlt3 />
            </div>
        </div>
        

        {showSidebar ? <Sidebar show="show-sidebar sidebar"/> : <Sidebar show="sidebar"/>}

    </div>)
}

function Sidebar({show}){

    const {handleShowSideBar,handleScrollTo,activeLink} = useContext(siteContext);

    return(
        <div  className={show}>
            <p className="sidebar-close" onClick={handleShowSideBar}><AiFillCloseCircle /></p>
            <p className="navmenu navmenu-color"  onClick={()=>{handleScrollTo("banner")}}>
                    <div className={activeLink === "banner" ? "active-link hover-link" : "hover-link"}></div>
                    ME
                </p>
                <p className="navmenu navmenu-color"  onClick={()=>{handleScrollTo("projects")}}>
                    <div className={activeLink === "projects" ? "active-link hover-link" : "hover-link"}></div>
                    PROJECTS
                </p>   
                <p  className="navmenu navmenu-color" onClick={()=>{handleScrollTo("favorite-tech")}}>
                    <div className={activeLink === "favorite-tech" ? "active-link hover-link" : "hover-link"}></div>
                    WHY ME?
                </p> 
                <p  className="navmenu navmenu-color"  onClick={()=>{handleScrollTo("contact")}}>
                    <div className={activeLink === "contact" ? "active-link hover-link" : "hover-link"}></div>
                    LET'S TALK
                </p>
           
        </div>
    )



}

export default Navbar;