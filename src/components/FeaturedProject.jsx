import { motion } from "framer-motion";
import { FaArrowTrendUp, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
function FeaturedProject() {
   const className = "max-w-6xl w-10/12 py-4 pt-0 m-auto";
 return (
   <section id="work">
     <article className={`${className}`}>
       <h1 className="mt-0">Featured project</h1>
       <p className="text-stone-300">
         here are some of the projects i have worked on.Whether I&apos;m working
         on a website or other digital product, I bring my commitment to design
         excellence and user-centered thinking to every project I work on. I
         look forward to the opportunity to bring my skills and passion to your
         next project.
       </p>
       <motion.div
         className="space-y-8"
         initial={{ y: 200 }}
         whileInView={{ y: 0, transition: { duration: 1, ease: "easeInOut" } }}
         viewport={{ once: true }}
       >
         <div className="space-y-8 md:flex md:justify-between md:items-center gap-4">
           <div className="bg-stone-600 p-4 rounded-[1rem] ">
             <h4 className="bg-stone-900 inline-block rounded-full p-2 mb-2">
               challenge
             </h4>
             <img
               src="/images/fast-react-pizza SCREENSHOT.png"
               className="h-[24rem] object-cover"
               alt="img"
             />
           </div>

           <div>
             <h3 className="text-2xl">fast food web app</h3>
             <p className="text-stone-300">
               Lfast food is a unique and expansive food delivery service.
               Rather than open our own food service establishment, which has
               limited potential, we propose a venture that involves only
               delivering food made and provided by others. Certain restaurants
               and fast food locations do not offer the convenience of a
               delivery service.
             </p>

             <div className="flex">
               <span>technology stack</span>:
               <p className="text-stone-300">react,tailwindcss,react router</p>
             </div>
             <div className="">
               <span>challenges</span>:
               <p className="text-stone-300">
                 in this project i had to work with a third party api in order
                 to store user's cart and information when they order for food
                 which i didnt create myself
               </p>
             </div>
             <div>
               <span>solution</span>:
               <p className="text-stone-300">
                 i later got a backend developer to create for me the api so i
                 can interact with the database because i had no backend
                 knowledge
               </p>
             </div>
             <div className="divide-y   divide-stone-400">
               <h3 className=" text-xl mb-4">project info</h3>
               <div className="flex justify-between items-center py-2 ">
                 <h4 className=" ">year</h4>
                 <span className="m-0 text-stone-300">2023</span>
               </div>
               <div className="flex justify-between items-center py-2 ">
                 <h4 className=" ">role</h4>
                 <span className="mb-0 text-stone-300">frontend developer</span>
               </div>
             </div>
             <ul className="flex gap-4 mt-4">
               <li>
                 <a
                   href="/"
                   className="uppercase  text-colo flex items-center gap-2"
                 >
                   <Link to="https://fast-food-apps.netlify.app/">
                     live demo
                   </Link>
                   <FaArrowTrendUp />
                 </a>
                 <div className="w-26 h-[1px] bg-yellow-100"></div>
               </li>
               <li>
                 <a
                   href="/"
                   className="uppercase  text- text-colo flex items-center gap-2"
                 >
                   <Link to=""> see on github</Link>
                   <FaGithub />
                 </a>
                 <div className="w-26 h-[1px] bg-yellow-100"></div>
               </li>
             </ul>
           </div>
         </div>
         <motion.div
           className="space-y-8 md:flex md:justify-between md:items-center gap-4"
           initial={{ y: 200 }}
           whileInView={{
             y: 0,
             transition: { duration: 1, ease: "easeInOut" },
           }}
           viewport={{ once: true }}
         >
           <div className="bg-stone-600 p-4 rounded-[1rem]">
             <img
               src="/images/Worldist-keep-track-of-your-adventures.png"
               alt="fashion"
               className="h-[24rem] object-cover mt-4"
             />
           </div>

           <div>
             <h3 className="text-2xl">worldist app</h3>
             <p className="text-stone-300">
               A feature-rich A world map that tracks your footsteps into every
               city you can think of. Never forget your wonderful experiences,
               and show your friends how you have wandered the world.
             </p>

             <div className="flex">
               <span>technology stack</span>:
               <p className="text-stone-300">
                 react,html&css,javascript,react router
               </p>
             </div>
             <div className="">
               <span>challenges</span>:
               <p className="text-stone-300">
                 in this project i had to bring in a map from a third party
                 service which is leaflet library which is something i have
                 never done before
               </p>
             </div>
             <div>
               <span>solution</span>:
               <p className="text-stone-300">
                 i went through the leaflet libray documentation and follow
                 every step in order to bring in the map into my application and
                 this how i learnt about using documentation
               </p>
             </div>

             <div className="divide-y  divide-stone-400">
               <h3 className=" text-xl mb-2">project info</h3>
               <div className="flex justify-between items-center  py-2">
                 <h4 className="">year</h4>
                 <span className="m-0 text-stone-300">2023</span>
               </div>
               <div className="flex justify-between items-center  py-2">
                 <h4 className="">role</h4>
                 <span className="mb-0 text-stone-300">frontend developer</span>
               </div>
             </div>
             <ul className="flex gap-4 mt-4">
               <li>
                 <a
                   href="https://worldist-app.netlify.app"
                   className="uppercase  text- text-colo flex items-center gap-2"
                 >
                   <Link to="https://worldist-app.netlify.app">live demo</Link>
                   <FaArrowTrendUp />
                 </a>
                 <div className="w-26 h-[1px] bg-yellow-100"></div>
               </li>
             </ul>
           </div>
         </motion.div>
         <motion.div
           className="space-y-8 md:flex md:justify-between md:items-center gap-4"
           initial={{ y: 200 }}
           whileInView={{
             y: 0,
             transition: { duration: 1, ease: "easeInOut" },
           }}
           viewport={{ once: true }}
         >
           <div className="bg-stone-600 p-4 rounded-[1rem]">
             <h4 className="bg-stone-900 inline-block rounded-full p-2 mb-2">
               challenge
             </h4>
             <img
               src="/images/React-App.png"
               className="h-[24rem] object-cover"
               alt="img"
             />
           </div>

           <div>
             <h3 className="text-2xl ">long-dist app</h3>
             <p className="text-sm text-stone-300">
               allow users to Store all your travel list and important
               information digitally, usually in a cloud-based storage system.
               Type, write, and draw notes on the device of choice just as one
               would using pen and pape.
             </p>

             <div className="flex">
               <span>technology stack</span>:
               <p className="text-stone-300">react</p>
             </div>
             <div className="">
               <span>challenges</span>:
               <p className="text-stone-300">
                 in this project i made sure the user info is synchronized with the app whenever the user store new item
               </p>
             </div>
             <div>
               <span>solution</span>:
               <p className="text-stone-300">
                  i ensured the app is intuitive and easy to use
                 with features like search functionality and a clean interface
               </p>
             </div>
             <div className="divide-y space-y-4 divide-stone-400">
               <h4 className="text-xl mb-2">project info</h4>
               <div className="flex justify-between items-center  py-2">
                 <h4 className="">year</h4>
                 <span className="m-0 text-stone-300">2023</span>
               </div>
               <div className="flex justify-between items-center  py-2">
                 <h4 className="">role</h4>
                 <span className="mb-0 text-stone-300">frontend developer</span>
               </div>
             </div>
             <ul className="flex gap-4 mt-4">
               <li>
                 <a
                   href="/"
                   className="uppercase  text- text-colo flex items-center gap-2"
                 >
                   <Link to="https://long-dist.netlify.app/">live demo</Link>
                   <FaArrowTrendUp />
                 </a>
                 <div className="w-26 h-[1px] bg-yellow-100"></div>
               </li>
               <li>
                 <a
                   href="/"
                   className="uppercase font-semibold] text- text-colo flex items-center gap-2"
                 >
                   <Link to=""> see on github</Link>
                   <FaGithub />
                 </a>
                 <div className="w-26 h-[1px] bg-yellow-100"></div>
               </li>
             </ul>
           </div>
         </motion.div>
       </motion.div>
     </article>
   </section>
 );
}

export default FeaturedProject
