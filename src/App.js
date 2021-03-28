
import { useContext, useEffect } from 'react';
import './App.css';
import Banner from "./component/banner"
import Navbar from "./component/navbar"
import SiteContent from "./component/siteContent"
import { siteContext } from './siteContext';

function App() {

  


  return (
    <div className= "app-container"  >

      <Navbar />
      <Banner />
      <SiteContent />
    </div>
  );
}

export default App;
