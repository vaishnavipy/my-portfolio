import React,{useEffect} from "react"
import Projects from "./projects"
import FavoriteTech from "./favoriteTech.js"
import ContactMe from "./contactMe.js";
import Footer from "./footer.js"
import { useContext } from "react/cjs/react.development";
import { siteContext } from "../siteContext";

function SiteContent(){

    const {showSidebar} = useContext(siteContext);

    return(
    <div className={showSidebar ? "app-overlay site-content" : "site-content"}>
        <Projects />
     
        <FavoriteTech />
        <ContactMe />
        <Footer />
    </div>)
}

export default SiteContent;