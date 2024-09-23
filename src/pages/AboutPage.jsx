import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom";

import MyExperience from "../components/MyExperience";
import Contact from "../components/Contact";
import AnimatedText from "../components/AnimatedText";
import {motion} from "framer-motion"
import Sidebar from "../components/Sidebar";
import MySkill from "../components/MySkill";

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
               <a
                 href="\images\Koja Williams (1).pdf"
                 download="Koja Williams (1).pdf"
                 className="bg-colo rounded-full py-1 pl-2 pr-[2px] inline-block items-center "
               >
                 <div className="flex items-center gap-2">
                   <span className="text-stone-900">download my resume</span>
                   <div className="bg-stone-900 rounded-full h-8">
                     <button className=" w-8 h-8  grid place-items-center ">
                       <FaDownload className="text-stone-100 " />
                     </button>
                   </div>
                 </div>
               </a>
               <Link
                 to="https://www.linkedin.com/in/williams-goddey-a17749135/"
                 className="bg-stone-600 rounded-full text-colo w-8 h-8  grid place-items-center "
               >
                 <FaLinkedinIn />
               </Link>
               <Link
                 to="https://github.com/willybrown100/"
                 className="bg-stone-600 rounded-full text-colo  w-8 h-8  grid place-items-center "
               >
                 <FaGithub />
               </Link>
             </div>
           </div>
         </article>
         <motion.div
           className="my-8 hidden md:block "
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
             className=" rounded-[1rem] h-[11rem] sm:h-[29rem] object-cover"
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
             <p className="text-stone-300 capitalize">
               i am Proficient in HTML, CSS, JavaScript, and modern frameworks
               like React, Next.js, and Vue.js. Strong ability to create
               responsive, user-friendly, and visually appealing interfaces.
               Experience with state management libraries such as Redux and
               Zustand.
             </p>
             <MySkill />
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
    // <a
    //   href="/path/to/your/resume.pdf" // Update with the correct path
    //   download="Your_Resume.pdf" // Specify the name for the downloaded file
    //   style={{ textDecoration: 'none', color: 'inherit' }} // Optional styling
    // >
    //   <FaDownload /> {/* Replace with your download icon */}
    //   <span> Download Resume</span>
    // </a>