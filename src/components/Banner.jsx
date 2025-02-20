import React from "react";
import Image from '../assets/avatar.svg';
import { FaYoutube, FaDribbble, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

//  import {} from 'react-type-animation ';

const Banner = () => {
    return (
        <section className=" min-h-[85vh] lg:min-h-[78vh] flex items-center   " id="home" >
            <div className=" flex justify-around container mx-auto 

         
            
            ">
                <div className=" flex flex-col gap-y-8 lg:flex-row   lg:items-center  lg:gap-x-24  ">
                    <div className=" flex-1  text-center lg:text-left ">
                        <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport = {{once:false, amount:0.7}} 
                        
                        className=" text-[55px] font-bold leading-[0.8] lg;tetx-[110px]  ">
                            Dann <span className=" text-[#1ff57c]"> Dimas</span>
                        </motion.h1>
                        <motion.div
                        
                        
                        variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport = {{once:false, amount:0.7}} 

                        className=" mb-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1]  ">
                            <span className=" mt-4 text-white " > I AM A </span>

                            <TypeAnimation

                                sequence={[
                                    'Developer', 2000,
                                    'Designer', 2000,
                                    'Student', 2000,


                                ]}
                                speed={50}
                                className=" text-fuchsia-700"
                                wrapper="span"
                                repeat={Infinity}

                            />

                        </motion.div>
                        <p className=" mb-8 max-w-lg mx-auto lg:mx-0
                             "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus ex nam voluptatum repellendus,   </p>
                        <div className="  flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0   ">
                            {/* <button> Contact Me </button> */}
                    <button className="btn btn-lg " >Contact Me </button>

                            <a href="#" className=" text-gradient btn-link " > My Portfolio  </a>
                        </div>

                        {/* social */}
                        <div className=" flex text-[20px] gap-x-6 
                              max-w-max mx-auto lg:mx-0   ">

                            <a href="#">
                                <FaYoutube />
                            </a>
                            <a href="#">
                                <FaGithub />
                            </a>
                            <a href="#">
                                <FaDribbble />
                            </a>

                        </div>



                    </div>

                    <div className=" hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]  ">
                        <img src={Image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;