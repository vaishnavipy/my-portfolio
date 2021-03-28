import React,{useState} from "react";


const siteContext = React.createContext();


function SiteContextProvider({children}){

    const [activeLink,setActiveLink] = useState("banner");

    const [showSidebar,setShowSidebar] = useState(false);

    function handleScrollTo(id){

        if(id === "banner"){
            window.scroll({
                top:0,
                behavior:"smooth"
            })
        }else{
        document.getElementById(id).scrollIntoView({behavior:"smooth"});
        }
        setActiveLink(id);
      }

      function handleSetActiveLink(id){
          setActiveLink(id)
      }

      function handleShowSideBar(){
        setShowSidebar(prevState => !prevState)
    }

    return(
    <siteContext.Provider value={{activeLink,handleScrollTo,handleSetActiveLink,showSidebar,handleShowSideBar}} >
        {children}
    </siteContext.Provider>)
}

export {siteContext,SiteContextProvider};