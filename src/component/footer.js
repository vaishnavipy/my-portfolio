import React from "react"
import {AiFillHeart} from "react-icons/ai"

function Footer(){
    return(
        <div className="footer">
            <div className="container">
               <hr />
               <p>Made with <AiFillHeart style={{color:"red"}}/> by Vaish Ravichandran</p>
            </div>
        </div>
    )
}

export default Footer