import React from "react";
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const Contact = () => {
return (
  <div className=" py-16 lg:section " id="contact"  >

<div className=" container mx-auto flex justify-around   ">
  <div className=" flex flex-col lg:flex-row">
    {/* text */}

    <motion.div 
    
    variants={fadeIn('right', 0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount:0.3}}

    className=" flex-1 flex justify-start items-center  ">
      <div className=" ">
        <h4 className=" text-xl uppercase text-violet-700 font-medium mb-2 tracking-wide "> Get in touch </h4>
        <h2 className=" text-[35px] lg:text-[70px] leading-none mb-12 ">Lets work together</h2>
      </div>
    </motion.div>

    {/* form */}

    <motion.form 
       variants={fadeIn('right', 0.3)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once: false, amount:0.3}}
       

    className=" flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 ">

      <input className="
       bg-transparent border-b py-3 outline-none placeholder:text-white transition-all focus:border-violet-700 "  type="text"  placeholder="your email" />

      <input className="
       bg-transparent border-b py-3 outline-none placeholder:text-white transition-all focus:border-violet-700 "  type="text"  placeholder="your name" />

   <textarea className="
       bg-transparent border-b py-12 outline-none placeholder:text-white transition-all focus:border-violet-700  resize-none mb-12  " placeholder="your message"  name="" id=""></textarea>

       <button className="btn btn-lg" > Send message</button>

    </motion.form>

  </div>

  </div>


    </div>
 ) 

}

export default Contact;