import {motion} from "framer-motion"
import { FaArrowPointer, FaGithub, FaLinkedinIn } from "react-icons/fa6";
function Header() {


  const className = "max-w-6xl w-10/12 py-4 m-auto";
 return (
   <motion.header
     className="mt-[4rem] overflow-hidden"
     initial={{ y: 200 }}
     whileInView={{ y: 0, transition: { duration: 1, ease: "easeInOut" } }}
     viewport={{ once: true }}
   >
     <article
       className={`${className} h-screen  md:flex md:justify-between md:gap-4 md:items-center`}
     >
       <div className="mb-4">
         <h1>
           Hi, I Am <br /> koja williams
         </h1>
         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
           molestias ipsam obcaecati cum fugit nihil enim optio quam. Quaerat,
           enim cupiditate. Quisquam neque necessitatibus ipsam nobis inventore!
           Possimus, quas quasi?
         </p>

         <div className="flex gap-2 items-center">
           <div className="bg-colo rounded-full pl-3 pr-[1px] py-1 inline-block items-center ">
             <div className="flex items-center gap-2 text-stone-900">
               contact me
               <div className="bg-stone-900 rounded-full h-8">
                 <button className=" w-8 h-8  grid place-items-center ">
                   <FaArrowPointer className="text-stone-100" />
                 </button>
               </div>
             </div>
           </div>
           <button className="bg-stone-600 rounded-full  w-8 h-8  grid place-items-center ">
             <FaLinkedinIn />
           </button>
           <button className="bg-stone-600 rounded-full  w-8 h-8  grid place-items-center ">
             <FaGithub />
           </button>
         </div>
       </div>
       <div>
         <img
           src="/image/developer-pic-2.jpg"
           alt="developer"
           className="h-full md:h-[29rem] object-cover rounded-[1rem]"
         />
       </div>
     </article>
   
   </motion.header>
 );
}

export default Header
