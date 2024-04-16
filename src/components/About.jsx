
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
function About() {
   const className = "max-w-6xl w-10/12 py-8 m-auto";
 return (
   <motion.section
     className={`${className} space-y-8`}
     initial={{ y: 200 }}
     whileInView={{ y: 0, transition: { duration: 1, ease: "easeInOut" } }}
     viewport={{ once: true }}
   >
     <div className="md:hidden">
       <h2>about me</h2>
       <p className="text-stone-300">
         i am a frontend developer based in lagos looking for exciting
         opportunities. has mechanical engineering background.likes to focus on
         accessibility when developing passionate and curious about solving
         problems,currently i'm exloring reactjs webflow and a bit of designing
         while i am not programming.i enjoy playing football,listening to
         music.learningf more to improve my skills
       </p>

       <Link to="about" className="text-colo">
         <span>more about me</span>
         <div className="bg-colo w-[4.3rem] h-[1px]"></div>
       </Link>
     </div>

     <div className="md:hidden">
       <img
         src="/image/willy.jpg"
         alt="developer"
         className="h-[22rem] object-cover rounded-[1rem] "
       />
     </div>
     <article className="hidden md:flex justify-between gap-4">
       <h2>about me</h2>
       <div>
         <h4 className="">
           i am a frontend developer based in lagos. has mechanical background.
         </h4>
         <p className="text-stone-300">
           i am a frontend developer based in lagos looking for exciting
           opportunities. has mechanical engineering background.likes to focus
           on accessibility when developing passionate and curious about solving
           problems,currently i'm exloring reactjs webflow and a bit of
           designing while i am not programming.i enjoy playing
           football,listening to music.learningf more to improve my skills
         </p>
         <Link to="about" className="text-colo">
           more about me <div className="w-[4.5rem] h-[1px] bg-colo"></div>
         </Link>
       </div>
     </article>
   </motion.section>
 );
}

export default About
