import React,{useEffect} from "react"
import Projects from "./projects"
import FavoriteTech from "./favoriteTech.js"

function SiteContent(){



    return(
    <div className="site-content">
        <Projects />
     
        <FavoriteTech />
       
    </div>)
}

export default SiteContent;