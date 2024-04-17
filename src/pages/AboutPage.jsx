import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom";
import Skills from "../components/skills";
import MyExperience from "../components/MyExperience";
import Contact from "../components/Contact";
import AnimatedText from "../components/AnimatedText";
import {motion} from "framer-motion"
import Sidebar from "../components/Sidebar";

function AboutPage() {
  const className = "max-w-6xl w-10/12 py-10 m-auto";
 return (
   <>
     <NavBar />
     <Sidebar />
     <section className="mt-[5rem]">
       <div className={`${className}`}>
         <article className={` md:flex md:justify-between gap-4`}>
           <AnimatedText text="About me" />
           <div>
             <div>
               <h4 className="tracking-[2px] mb-2 text-xl">
                 i am a frontend developer based in lagos. <br /> has mechanical
                 background.
               </h4>
               <p className="text-stone-300">
                 i am a frontend developer based in lagos looking for exciting
                 opportunities. has mechanical engineering background.likes to
                 focus on accessibility when developing passionate and curious
                 about solving problems,currently i'm exloring reactjs webflow
                 and a bit of designing while i am not programming.i enjoy
                 playing football,listening to music.learningf more to improve
                 my skills
               </p>
             </div>
             <div className="flex items-center gap-2">
               <div className="bg-colo rounded-full py-1 pl-2 pr-[2px] inline-block items-center ">
                 <div className="flex items-center gap-2">
                   <span className="text-stone-900">download my resume</span>
                   <div className="bg-stone-900 rounded-full h-8">
                     <button className=" w-8 h-8  grid place-items-center ">
                       <FaDownload className="text-stone-100 " />
                     </button>
                   </div>
                 </div>
               </div>
               <Link className="bg-stone-600 rounded-full text-colo w-8 h-8  grid place-items-center ">
                 <FaLinkedinIn />
               </Link>
               <Link className="bg-stone-600 rounded-full text-colo  w-8 h-8  grid place-items-center ">
                 <FaGithub />
               </Link>
             </div>
           </div>
         </article>
         <motion.div
           className="my-8"
           initial={{ y: 200 }}
           whileInView={{
             y: 0,
             transition: { duration: 1, ease: "easeInOut" },
           }}
           viewport={{ once: true }}
         >
          
           <img
             src="/image/williams.jpg"
             alt="developer"
             className=" rounded-[1rem] sm:h-[29rem] object-cover"
           />
         </motion.div>
         <motion.div
           className="md:flex md:justify-between my-20"
           initial={{ y: 200 }}
           whileInView={{
             y: 0,
             transition: { duration: 1, ease: "easeInOut" },
           }}
           viewport={{ once: true }}
         >
           <h2 className="mb-4"> my capabilities</h2>
           <div>
             <p className="text-stone-300">
               i am always looking to add more skills. Lorem ipsum dolor sit
               amet consectetur, adipisicing elit. Ducimus delectus rem rerum
               voluptatem ad blanditiis consequuntur quisquam id culpa quasi?
             </p>
             <Skills />
           </div>
         </motion.div>
       </div>
       <div className="border-b my-4 md:hidden"></div>
       <MyExperience />
       <div className="border-b my-4  md:hidden"></div>
       <Contact />
     </section>
   </>
 );
}

export default AboutPage
