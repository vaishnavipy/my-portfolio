import React, { useContext, useEffect, useState } from "react"
import react from "../images/react.png";
import bootStrap from "../images/bootstrap.png";
import graphql from "../images/graphql.png";
import rest from "../images/rest.jpeg";
import github from "../images/github.png";
import { siteContext } from "../siteContext";

function FavoriteTech(){

    const [elmTop,setElmTop] = useState(1000);

    const {handleSetActiveLink} = useContext(siteContext)

    const FAVORITE_TECH = [
        {name: "React",
        img: react,
        desc: "I use React JS to build all of my web-applications. I like the single way data flow in React, and also how we can build and re-use components, which makes my life so much easier. "},

        {name: "BootStrap",
        img: bootStrap,
        desc: "I use React JS to build all of my web-applications. I like the single way data flow in React, and also how we can build and re-use components, which makes my life so much easier. "},
    
        {name: "GraphQL",
        img: graphql,
        desc: "I use React JS to build all of my web-applications. I like the single way data flow in React, and also how we can build and re-use components, which makes my life so much easier. "},
    
        {name: "Restful API",
        img: rest,
        desc: "I use React JS to build all of my web-applications. I like the single way data flow in React, and also how we can build and re-use components, which makes my life so much easier. "},
    
        {name: "GIT",
        img: github,
        desc: "I use React JS to build all of my web-applications. I like the single way data flow in React, and also how we can build and re-use components, which makes my life so much easier. "}];

       
       const classes =["slide-0","slide-1","slide-2","slide-3","slide-4"]
       
        const all_slides = FAVORITE_TECH.map((slide,i) => {
        
            return(
            <div key={i} className={`slide ${classes[i]}`}  >
                <div className="slide-img">
                    <img src={slide.img}/>
                </div>
                <h2>{slide.name}</h2>
                <p>{slide.desc}</p>
            </div>)
        })

    


      function moveSlide(){

        const slides = document.querySelectorAll(".slide");

        slides.forEach((slide,i) => {
        //console.log(slides)

          if(slide.classList.contains("slide-0")){
                //console.log(slide)
                slide.classList.remove("slide-0");
                slide.classList.add("slide-move");
              
            }else{
                let classListArr=[]
                slide.classList.forEach(item => classListArr.push(item) )
                const get_slide_index = classes.findIndex(elm => elm === classListArr[1])
               //console.log(classListArr)
                slide.classList.remove(`slide-${get_slide_index}`);
                slide.style.opacity = "1";
                slide.classList.add(`slide-${get_slide_index-1}`)
            }

            setTimeout(() => {
                if(slide.classList.contains("slide-move")){
                    slide.style.opacity = "0";
                    slide.classList.remove("slide-move")
                    slide.classList.add("slide-4")
    
                }
                
            }, 500);

           
        })


      }
      function onScroll(){

        setElmTop( document.getElementById("favorite-tech").getBoundingClientRect().top );
      }

      useEffect(()=>{
         let intervalID = setInterval(() => {
             moveSlide();
         }, 3000);

         window.addEventListener("scroll",onScroll);

         return ()=>{clearInterval(intervalID)}

      },[])

      useEffect(()=>{
        if(elmTop < 150){
            handleSetActiveLink("favorite-tech")
        }
      },[elmTop])
     
    
    return(
    <div className="favorite-tech" id="favorite-tech">
        <div>
            <h2>Favorite Tech</h2>
            <p>I like learning new things, but below are my few favorites which I use almost every single day.</p>
        </div>
        <div className="favorite-tech-grid container">
            {all_slides}
        </div>
       
       
    </div>)
}

export default FavoriteTech;