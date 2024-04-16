import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa6";

import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useToggle } from "../toggleContext/ToggleContext";

function Sidebar() {
 const { isOpen,  handleToggle } = useToggle();
 return (
   <aside
     className={`fixed bottom-0 top-0 px-2 py-4 z-10 side right-0 left-0  bg-stone-900  transition-all duration-300 ${isOpen ? "showSide" : ""
     }`}
   >
     <div className="py-8 grid grid-rows-[auto,1fr,auto] gap-8 h-screen">
       <div className="items-center text-right"></div>
       <div className="flex flex-col">
         <Link
           to="contact"
           className="p-4 capitalize flex gap-2 items-center tracking-[2px] hover:bg-colo hover:text-stone-900 transition-all duration-300 text-xl cursor-pointer"
           spy={true}
           smooth={true}
           offset={50}
           duration={500}
           onClick={handleToggle}
         >
           Contact
         </Link>
         <NavLink
           to="/about"
           className=" p-4 capitalize flex gap-2 items-center hover:bg-colo hover:text-stone-900 transition-all duration-300 tracking-[2px] text-xl"
           onClick={handleToggle}
         >
           About
         </NavLink>
         <Link
           to="work"
           className=" p-4 capitalize flex gap-2 items-center hover:bg-colo hover:text-stone-900 transition-all duration-300 tracking-[2px] text-xl cursor-pointer"
           spy={true}
           smooth={true}
           offset={50}
           duration={500}
           onClick={handleToggle}
         >
           work
         </Link>
       </div>
       <div className="flex gap-3 justify-center ">
         <Link
           to="home"
           className="text-colo text-2xl transition-all hover:text-yellow-300 duration-300 cursor-pointer"
         >
           <FaFacebookF />
         </Link>
         <Link
           to="contact"
           className="text-colo text-2xl transition-all hover:text-yellow-300 duration-30"
         >
           <FaTwitter />
         </Link>
         <Link
           to="about"
           className="text-colo text-2xl transition-all hover:text-amber-500 duration-30"
         >
           <FaInstagram />
         </Link>
         <Link
           to="/"
           className="text-colo text-2xl transition-all hover:text-amber-500 duration-30"
         >
           <FaWhatsapp />
         </Link>
       </div>
     </div>
   </aside>
 );
}

export default Sidebar
