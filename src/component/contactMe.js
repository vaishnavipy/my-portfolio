import React,{useContext, useEffect, useState} from "react"
import { siteContext } from "../siteContext";
import thumbnail from "../images/thumbnail.jpg"


function ContactMe(){

    const [elmTop,setElmTop] = useState(1200);

    const {handleSetActiveLink} = useContext(siteContext);

    function onScroll(){

        setElmTop(document.getElementById("contact").getBoundingClientRect().top);

        if(document.getElementById("contact").getBoundingClientRect().top < 400){
            document.querySelector(".contact-me-content").style.visibility = "visible";
            document.querySelector(".contact-me-content").style.transform ="translate3d(0px,0px,0px)";
        }

    }


    useEffect(()=>{
        window.addEventListener("scroll",onScroll)
    },[])

    useEffect(()=>{
        console.log(elmTop)
        if(elmTop < 300 ){
            handleSetActiveLink("contact");
           
        }
    },[elmTop])


    return(
    <div className="contact-me" id="contact">

        <div className="contact-me-content">
            <h2>Let’s Work Together</h2>
            <p>If you have a website or web app idea in mind or you need some advice about product design, feel free to contact me. Currently my time books quickly, so the sooner you write, the better it is for both of us.</p>
            <div className="thumbnail-flex">
                <div className="thumbnail-div"><img src={thumbnail} /><div className="online"></div></div>
                <div style={{textAlign:"left"}}>
                    <h4>Reply time: within 1-2 working days</h4>
                    <h4>email @ ravichandran.vaishu@gmail.com</h4>
                </div>
            </div>
           
        </div>

       
        
    </div>)
}

export default ContactMe;