import About from "../components/About";
import Contact from "../components/Contact";
import FeaturedProject from "../components/FeaturedProject"
import Footer from "../components/Footer";
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Sidebar from "../components/Sidebar";


function Hompage() {
 return (
   <>
     <NavBar />
     <Sidebar />
     <Header />
     
     <div className="border-b my-4 mt-2"/>
     <FeaturedProject />
     <div className="border-b my-4"/>
     <About />
     <div className="border-b my-4"/>
     <Contact />
     <Footer />
   </>
 );
}

export default Hompage
