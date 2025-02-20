import React from "react";
// countup
import CountUp from "react-countup";
// intersection observer
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
import Image from '../assets/about.png';




const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })
  return (

    <section id="about" className=" section" ref={ref} >
      <div className=" container mx-auto flex justify-around  ">
        <div className=" flex flex-col gap-y-10 lg:flex-row lg:items-center  lg:gap-x-20 lg:gap-y-0  h-screen  ">

          {/* img */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount:0.3}}

          className="  flex bg-about bg-contain bg-no-repeat h-[540px] mix-blend-lighten bg-top "> 


                 <img className="  " src={Image} alt="" />


             
            </motion.div>

          {/* text */}

          <motion.div 
          
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount:0.3}}
          
          className=" flex-1  "> 
            <h2 className=" h2 text-white">About me</h2>
            <h3 className=" h3 mb-4 ">I'm a Freelance front-end dev with over 2 yrs of experience.</h3>
              
              <p className=" mb-6 " >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora dolore est esse labore.

              </p>

              {/* slotzs */}
              <div className=" flex gap-x-6 lg:gap-x-10 mb-12 "> 
                <div className="  ">
                  <div className=" text-[40px]  text-gradient mb-2 " >

                  { inView? 
                    <CountUp 
                    start={0}
                    end={15}
                    duration={10}
                    />:null }

                    K+
                    
                    <div className="text-sm tracking-[2px]  " > Projects  <br /> ompleted </div>

                  </div>
                </div>

                <div className="  ">
                  <div className=" text-[40px]  text-gradient mb-2 " >

                  { inView? 
                    <CountUp 
                    start={0}
                    end={13}
                    duration={10}
                    />:null }
                    K+

                    <div className="text-sm tracking-[2px]  " > Satistify <br /> Client </div>

                  </div>
                </div>
                <div className="  ">
                  <div className=" text-[40px]  text-gradient mb-2 " >

                  { inView? 
                    <CountUp 
                    start={0}
                    end={13}
                    duration={10}
                    />:null }

                    <div className="text-sm tracking-[2px]  " > years of <br /> Experience </div>

                  </div>
                </div>
              </div>

              <div className=" flex gap-x-8 items-center    ">
                   <button className="btn btn-lg " >Contact Me </button>
              <a href="#" className=" text-gradient btn-link " > My Portfolio  </a>

                </div> 
           
             </motion.div>
             
        </div>
       
      </div>
    </section>
  );
};

export default About; 
