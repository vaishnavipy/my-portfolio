import React, { useContext, useEffect } from "react"
import { useState } from "react/cjs/react.development";
import { siteContext } from "../siteContext";
import animatedChat from "../images/animated_chat.png";
import beachResort from "../images/beach_resort.png";
import covidTracker from "../images/covid_tracker.png";
import eCommerceReact from "../images/ecommerce.png";
import ticketBooking from "../images/ticket_booking.png";
import Stripe from "../images/Stripe.png";
import screenSizeMap from "../images/screen_size_map.png"



function Projects(){

    const [elmTop,setElmTop] = useState(600);

    const {handleSetActiveLink} = useContext(siteContext);

    function onScroll(e){

        setElmTop( document.getElementById("projects").getBoundingClientRect().top )
      
        const project_containers = document.querySelectorAll(".project-container");

        if(e.target.scrollingElement.scrollTop > 300  ){
            project_containers.forEach((elm,i) => {

                if(i < 3){

                    if(elm.style.transform !== "translate3d(0px, 0px, 0px)"){
                        //console.log("1")
                        setTimeout(()=>{
                            elm.style.visibility ="visible";
                            elm.style.transform = "translate3d(0px,0px,0px)"

                        },200*i)
                    }
                }
            })
        }
        if(e.target.scrollingElement.scrollTop > 450){

            project_containers.forEach((elm,i) => {

                if(i >= 3  ){
                    if(elm.style.transform  != "translate3d(0px, 0px, 0px)"){
                        //console.log("2","ji",elm.style.transform)
                        setTimeout(()=>{
                            elm.style.visibility ="visible";
                            elm.style.transform = "translate3d(0px,0px,0px)"
                        },200*i)
                    }
                }
            })
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",onScroll);
        
    },[])

    useEffect(()=>{
        console.log(elmTop)
        if(elmTop<200){
            handleSetActiveLink("projects");
        }else if(elmTop >400){
            handleSetActiveLink("banner")
        }
    },[elmTop])

    const PROJECTS_ARR =[
       
        {img : beachResort,
        title : "Beach Resort Landing",
        url:"https://vaishnavipy.github.io/Responsive-beach-resort-react/"
        },
        {
        img : Stripe,
        title : "Stripe Landing",
        url:"https://vaishnavipy.github.io/stripe_submenus/"
        },
        {
            img :covidTracker,
            title : "Covid-19 World Tracker",
            url:"https://vaishnavipy.github.io/covid-19-tracker-react/"
            },
            {img : ticketBooking,
            title : "Ticket Booking App",
            url:"https://vaishnavipy.github.io/ticketBooking-React/"
            },
            {
            img : animatedChat,
            title : "Animated Chat App",
            url:"https://vaishnavipy.github.io/chatbox-react/"
            },
            {
                img : eCommerceReact,
                title : "Screen Size Map",
                url:"https://vaishnavipy.github.io/ScreenSizeMap/"
                },
                {
                    img : screenSizeMap,
                    title : "Ecommerce React",
                    url:"https://vaishnavipy.github.io/e-commerce-store/index.html"
                    },
                   
    ]

 


    const projects = PROJECTS_ARR.map((project,i) => {

        return(
            <div className="project-container" key={i}>
                <div className="overlay"></div>
                <div className="project-img-div">
                    <a href={project.url} target="_blank">View Demo</a>
                    <img src={project.img} />
                </div>
                <div className="project-title">
                    <h4>{project.title}</h4>
                </div>
            </div>
        )
    })


    

    return(
    <div className="projects" id="projects">

        <div>
            <h2>Making Ideas Come To Life</h2>
            <p>Check out my Work. More projects under progress...</p>
        </div>

        <div className="projects-grid container">
          {projects}
        </div>
       
    </div>)
}

export default Projects;