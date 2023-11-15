import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import History from "./Components/History";
import Vapes from './Components/Vapes';
import Vapess from './Components/Vapes1.jsx';
import Vapesss from './Components/Vapes2';
import Blog from "./Components/Blog";
import Newsletter from "./Components/Newsletter"
import Contact from "./Components/Contact";
import Footer from "./Components/Footer.jsx";
import Aboutus from "./Components/Aboutus";








function App() {
  return (
    <div className="App"> 
  
      <Navbar/>
      <Header/>
      <Feature/>
      <History/>
      <Vapess />
      <Vapesss/>
      <Blog />
      <Newsletter />
      <Contact/>
      <Footer />
     

     
    </div>
  );
}

export default App;
