
import {  FaGithub, FaLinkedinIn, FaSquareXTwitter } from "react-icons/fa6";
import {motion}from "framer-motion"

function Contact() {
    const className = "max-w-6xl w-10/12 py-8 m-auto";
 return (
   <motion.section
     id="contact"
     initial={{ y: 200 }}
     whileInView={{ y: 0, transition: { duration: 1, ease: "easeInOut" } }}
     viewport={{ once: true }}
   >
     <article className={`${className} space-y-8`}>
       <article className="md:flex justify-between">
         <div>
           <h2 className="mb-4  font-font">let's connect</h2>
           <div className="flex gap-2 mb-4">
             <span>say hello at </span>
             <a href="/" className="">
               williamsgoddey11@gmail.com
               <div className="w-[9.4rem] h-[1px] bg-yellow-100"></div>
             </a>
           </div>
           <div className="flex gap-2">
             <span>for more info here is my </span>
             <a href="/">
               resume
               <div className="w-[2rem] h-[1px] bg-yellow-100"></div>
             </a>
           </div>
           <ul className="flex space-x-8 items-center mt-8">
             <li>
               <FaGithub className="text-colo text-2xl" />
             </li>
             <li>
               <FaLinkedinIn className="text-colo text-2xl" />
             </li>
             <li>
               <FaSquareXTwitter className="text-colo text-2xl" />
             </li>
             <li>
               <FaGithub className="text-colo text-2xl" />
             </li>
           </ul>
         </div>
         <form className="mt-8 md:mt-0 md:w-[600px]">
           <div className="mb-5 flex flex-col ">
             <label className="text-xl capitalize">name</label>
             <input
               type="text"
               placeholder="john doe"
               className="bg-stone-600 input w-full"
             />
           </div>
           <div className="mb-5 flex flex-col">
             <label className="text-xl capitalize">email</label>
             <input
               type="email"
               placeholder="email"
               className="bg-stone-600 input w-full"
             />
           </div>
           <div className="mb-5 flex flex-col ">
             <label className="text-xl capitalize">subject</label>
             <input
               type="text"
               placeholder="subject"
               className="bg-stone-600 input w-full"
             />
           </div>
           <div className="mb-5 flex flex-col  ">
             <label className="text-xl capitalize ">message</label>
             <textarea
               placeholder="type here"
               className="h-[6rem] bg-stone-600 input w-full"
             />
           </div>
           <button className="text-xl text-stone-900 p-2 px-4 font-semibold bg-colo rounded-full">
             submit
           </button>
         </form>
       </article>
     </article>
   </motion.section>
 );
}

export default Contact
