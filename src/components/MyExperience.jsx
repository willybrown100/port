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
         <p className="text-stone-300 text-[0.96rem] capitalize">august 2024</p>
       </div>
       <p className="text-stone-300">
         I developed the RicosFreight website, a comprehensive and user-friendly
         platform designed for a client in the logistics and freight industry.
         The website was built using modern web technologies, providing an
         efficient and seamless way for users to explore the client’s services,
         request quotes, and track shipments
       </p>
       <div className="md:flex justify-between">
         <h4 className="capitalize">front-end intern</h4>
         <p className="text-stone-300 text-[0.96rem] capitalize">sep 2023 - nov2023</p>
       </div>
       <h5 className="text-colo capitalize"> tech studio academy</h5>
       <p className="text-stone-300">
         i have worked in tech studio academy as an intern.amet consectetur
         adipisicing elit. Eligendi, nisi? Commodi omnis sunt ex voluptatem,
         fugit expedita inventore autem
       </p>
     </div>
   </motion.article>
 );
}

export default MyExperience
