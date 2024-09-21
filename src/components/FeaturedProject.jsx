import { motion } from "framer-motion";
import { FaArrowTrendUp, FaGithub } from "react-icons/fa6";
import { HiMiniPaperClip } from "react-icons/hi2";
import { Link } from "react-router-dom";
function FeaturedProject() {
   const className = "max-w-6xl w-10/12   py-4 pt-0 m-auto";
 return (
   <section id="work" className="">
     <article className={`${className}`}>
       <div className="grid place-items-center">
         <h2 className="mt-4 capitalize">here are some of my works</h2>
         <p className="text-stone-300 text-center capitalize">
           here are some of the projects i have worked on.Whether I&apos;m
           working on a website or other digital product, I bring my commitment
           to design excellence and user-centered thinking to every project I
           work on. I look forward to the opportunity to bring my skills and
           passion to your next project.
         </p>
       </div>
       <motion.div
         className=" md:grid md:grid-cols-2 gap-x-4 lg:grid-cols-3  "
         initial={{ y: 200 }}
         whileInView={{ y: 0, transition: { duration: 1, ease: "easeInOut" } }}
         viewport={{ once: true }}
       >
         <motion.div
           className="space-y-4 bg-stone-500  rounded-lg grid grid-rows-[300px,1fr,auto] mb-4 grid-cols-1 "
           initial={{ y: 200 }}
           whileInView={{
             y: 0,
             transition: { duration: 1, ease: "easeInOut" },
           }}
           viewport={{ once: true }}
         >
           <img
             src="\images\travelCompany.png"
             alt="img"
             className="rounded-tr-lg rounded-tl-lg h-full"
           />

           <div className="p-4">
             <h4 className="tracking-wide">roscofreight website.</h4>
             <p className="text-stone-300">
               roscofreight is a fully responsive logistics company website
               designed to simplify shipping and delivery services for
               businesses and individuals. The platform offers real-time
               tracking, seamless service bookings, and detailed information on
               logistics solutions. My focus was on creating a user-friendly
               experience with clear navigation, mobile responsiveness, and a
               professional design that showcases the company’s commitment to
               efficiency and reliability. with clear navigation, mobile
               responsiveness, and a professional design that showcases the
               company’s commitment to efficiency and reliability.
             </p>
             <div className="flex gap-x-2">
               <p className="capitalize font-medium">tech stack:</p>
               <p className="capitalize tracking-wide font-medium">
                 nextjs,php,javascript,tailwind
               </p>
             </div>
           </div>

           <div className="p-4">
             <Link
               to="https://roscofreight.com/"
               className="flex gap-x-2 items-center"
             >
               <HiMiniPaperClip />
               <span className="mb-0 capitalize">live preview</span>
             </Link>
           </div>
         </motion.div>
         <motion.div
           className="space-y-4 bg-stone-500  rounded-lg grid mb-4 grid-rows-[300px,1fr,auto] grid-cols-1"
           initial={{ y: 200 }}
           whileInView={{
             y: 0,
             transition: { duration: 1, ease: "easeInOut" },
           }}
           viewport={{ once: true }}
         >
           <img
             src="\images\fastfoodnew.png"
             alt="img"
             className="rounded-tr-lg  rounded-tl-lg h-full"
           />

           <div className="p-4">
             <h4>Fast Food web application</h4>
             <p className="text-stone-300">
               Fast Food is a responsive web application that streamlines the
               food ordering process for users by offering a clean and intuitive
               interface. Users can browse through various restaurant menus,
               customize their meals, add items to a real-time updating cart,
               and complete their order with a smooth checkout system. The app
               also provides order tracking, ensuring customers stay informed
               about their delivery status. I focused on creating a fast and
               seamless user experience across both mobile and desktop
               platforms, optimizing performance and ensuring easy navigation.
             </p>
             <div className="flex gap-x-2 ">
               <p className="capitalize font-medium">tech stack:</p>
               <p className="capitalize tracking-wide font-medium">
                 React,nodejs,javascript,
                 <br />
                 tailwind
               </p>
             </div>
           </div>
           <div className="flex items-center gap-x-2 justify-between p-4">
             <Link
               to="https://fast-food-apps.netlify.app/"
               className="flex gap-x-2 items-center"
             >
               <HiMiniPaperClip />
               <span className="mb-0 capitalize">live preview</span>
             </Link>
             <Link className="flex gap-x-2 items-center">
               <FaGithub />
               <span className="capitalize">view code</span>
             </Link>
           </div>

           {/* </div> */}
         </motion.div>
         <motion.div
           className="space-y-4 bg-stone-500 mb-4 rounded-lg grid grid-rows-[300px,1fr,auto] grid-cols-1"
           initial={{ y: 200 }}
           whileInView={{
             y: 0,
             transition: { duration: 1, ease: "easeInOut" },
           }}
           viewport={{ once: true }}
         >
           <img
             src="\images\goodpay.png"
             alt="img"
             className="rounded-tr-lg rounded-tl-lg h-full "
           />

           <div className="p-4">
             <h4>
               GoodPay Exchange website Simplifying Cryptocurrency to Cash
             </h4>
             <p className="text-stone-300">
               GoodPay Exchange is a web platform designed to streamline
               cryptocurrency transactions, allowing users to easily convert
               crypto to cash and vice versa. The app features real-time
               exchange rates, secure wallet integrations, and a seamless
               transaction process, ensuring fast and reliable conversions. I
               focused on creating an intuitive interface that guides users
               through the exchange process with ease, prioritizing security,
               user-friendliness, and performance. GoodPay Exchange offers a
               reliable solution for both crypto enthusiasts and casual users
               looking to manage their digital assets efficiently.
             </p>
             <div className="flex gap-x-2 items-center">
               <p className="capitalize font-medium">tech stack:</p>
               <p className="capitalize tracking-wide font-medium">
                 html, css,javascript,laravel
               </p>
             </div>
           </div>

           <div className="flex items-center gap-x-2 justify-between p-4">
             <Link
               to="https://goodpayexchange.com/"
               className="flex gap-x-2 items-center"
             >
               <HiMiniPaperClip />
               <span className="mb-0 capitalize">live preview</span>
             </Link>
             <Link className="flex gap-x-2 items-center">
               <FaGithub />
               <span className="capitalize">view code</span>
             </Link>
           </div>
         </motion.div>
         <motion.div
           className="space-y-4 bg-stone-500 mb-4 rounded-lg grid grid-rows-[300px,1fr,auto]  grid-cols-1 "
           initial={{ y: 200 }}
           whileInView={{
             y: 0,
             transition: { duration: 1, ease: "easeInOut" },
           }}
           viewport={{ once: true }}
         >
           <img
             src="\images\mamaz.png"
             alt="img"
             className="rounded-tr-lg rounded-tl-lg h-full"
           />

           <div className="p-4">
             <h4>mama z restaurant</h4>
             <p className="text-stone-300">
               I developed the Mama Z website, a modern and responsive platform
               designed specifically for a restaurant business. Built using
               React, the website offers an intuitive and engaging user
               experience, allowing customers to easily explore the menu, learn
               about the restaurant's specialties, and make reservations or
               inquiries.
             </p>
             <div className="flex gap-x-2 items-center">
               <p className="capitalize font-medium">tech stack:</p>
               <p className="capitalize tracking-wide font-medium">
                 html, css,javascript
               </p>
             </div>
           </div>

           <div className="flex items-center gap-x-2 justify-between p-4">
             <Link
               to="mamaz-app.netlify.app/"
               className="flex gap-x-2 items-center"
             >
               <HiMiniPaperClip />
               <span className="mb-0 capitalize">live preview</span>
             </Link>
             <Link className="flex gap-x-2 items-center">
               <FaGithub />
               <span className="capitalize">view code</span>
             </Link>
           </div>
         </motion.div>
         <motion.div
           className="space-y-4 bg-stone-500 mb-4 rounded-lg grid grid-rows-[300px,1fr,auto]  grid-cols-1 "
           initial={{ y: 200 }}
           whileInView={{
             y: 0,
             transition: { duration: 1, ease: "easeInOut" },
           }}
           viewport={{ once: true }}
         >
           <img
             src="\images\weather.png"
             alt="img"
             className="rounded-tr-lg rounded-tl-lg h-full"
           />

           <div className="p-4">
             <h4>weather web application</h4>
             <p className="text-stone-300">
               I developed a weather web application that provides users with
               real-time weather updates and forecasts for locations worldwide.
               The application was built using React for the front end,
               delivering a responsive and user-friendly interface that works
               seamlessly across different devices. For the backend, I utilized
               Supabase, which offers a scalable and efficient
               backend-as-a-service solution. Supabase was used to manage user
               authentication, store user preferences (such as favorite
               locations), and handle weather data efficiently, ensuring a
               smooth and secure experience.
             </p>
             <div className="flex gap-x-2 items-center">
               <p className="capitalize font-medium">tech stack:</p>
               <p className="capitalize tracking-wide font-medium">
                 react and supabase
               </p>
             </div>
           </div>

           <div className="flex items-center gap-x-2 justify-between p-4">
             <Link
               to="https://weather-qqzm.vercel.app/"
               className="flex gap-x-2 items-center"
             >
               <HiMiniPaperClip />
               <span className="mb-0 capitalize">live preview</span>
             </Link>
             <Link
               to="https://github.com/willybrown100/weather"
               className="flex gap-x-2 items-center"
             >
               <FaGithub />
               <span className="capitalize">view code</span>
             </Link>
           </div>
         </motion.div>
       </motion.div>
     </article>
   </section>
 );
}

export default FeaturedProject
