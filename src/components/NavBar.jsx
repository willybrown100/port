
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useToggle } from "../toggleContext/ToggleContext";



function NavBar() {
   const { isOpen, handleToggle } = useToggle();
 return (
   <nav className="p-4 h-16 fixed bg-stone-900 top-0 left-0 right-0 z-20">
     <div className="w-[90vw] max-w-[1170px] m-auto md:flex justify-between items-center">
       <div className="flex justify-between gap-4">
         <NavLink to="/" className="text-2xl">
           williams
         </NavLink>
         <button onClick={handleToggle} className="text-xl z-30 sm:hidden">
           {isOpen ? (
             <span className="text-5xl text-colo">&times;</span>
           ) : (
             <FaBarsStaggered className="md:hidden" />
           )}
         </button>
       </div>
       <ul className="hidden md:flex md:space-x-4">
         <li>
           <Link
             className="text-lg capitalize cursor-pointer"
             to="work"
             spy={true}
             smooth={true}
             offset={50}
             duration={500}
           >
             work
           </Link>
         </li>
         <li>
           <NavLink to="/about" className="text-lg capitalize ">
             about
           </NavLink>
         </li>
         <li>
           <Link
             to="contact"
             spy={true}
             smooth={true}
             offset={50}
             duration={500}
             className="text-lg capitalize cursor-pointer"
           >
             contact
           </Link>
         </li>
       </ul>
     </div>
   </nav>
 );
}

export default NavBar
