import {motion} from "framer-motion"

function MyExperience() {

  const className = "max-w-6xl w-10/12 py-10 m-auto";
 return (
   <motion.article
     className={`${className} md:flex justify-between gap-2`}
     initial={{ x: 200 }}
     whileInView={{ x: 0, transition: { duration: 1, ease: "easeInOut" } }}
     viewport={{ once: true }}
   >
     <h2 className="mb-5">my Experience</h2>
     <div>
       <div className="md:flex justify-between">
         <h4>freelance developer</h4>
         <p className="text-stone-300 text-[0.96rem]">Nov 2023&mdash;present</p>
       </div>
       <p className="text-stone-300">
         Whether I&apos;m working on a website or other digital product, I bring
         my commitment to design excellence and user-centered thinking to every
         project I work on. I look forward to the opportunity to bring my skills
         and passion to your next project.
       </p>
       <div className="md:flex justify-between">
         <h4 className="capitalize">front-end intern</h4>
         <p className="text-stone-300 text-[0.96rem]">sep 2023 - nov2023</p>
       </div>
       <h5 className="text-colo">roos tech</h5>
       <p className="text-stone-300">
        i have worked in ross tech company as an intern.amet consectetur adipisicing elit. Eligendi,
         nisi? Commodi omnis sunt ex voluptatem, fugit expedita inventore autem
         
       </p>
     </div>
   </motion.article>
 );
}

export default MyExperience
