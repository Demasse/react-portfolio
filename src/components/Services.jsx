import React from "react";
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
import Image from '../assets/services.png';
import { div } from "framer-motion/client";


//services
const services = [

    {
        name: 'UI/UX Design',
        Description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor in  ',
        link: 'learn more'
    },
    {
        name: 'Product branding',
        Description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor in  ',
        link: 'learn more'
    },
    {
        name: 'Digital Marketing',
        Description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor in  ',
        link: 'learn more'
    },

]


const Services = () => {
    return (
        <section className=" section" id="services"  >

            <div className="container mx-auto">
                <div className=" ">

                    {/* text and image */}

                    <div className=" flex justify-around   items-center  lg:gap-x-2 lg:gap-y-0  h-screen  ">
                        <motion.div 
                        
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount:0.3}}
                        className="   ">

                            <h2 className=" h2 text-violet-700 mb-6 ">  What can i do </h2>
                            <h3 className="h3 max-w-[455px] mb-16 ">
                                I am a freelance front-end developer with over 5 years of experience in creating stunning and user-friendly websites and applications.
                            </h3>

                            <button className="btn btn-sm " >See My Work </button>


                            <div className=" flex-1 justify-around lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 ">
                                <img className=" h-96  " src={Image} alt="" />
                            </div>
                        </motion.div>






                        {/* service */}
                        <motion.div  
                         variants={fadeIn('right', 0.3)}
                         initial="hidden"
                         whileInView={"show"}
                         viewport={{once: false, amount:0.3}}

                        >
                            
                            {/* SERVICE LIST  */}
                            <div className=" flex-1 ">


                                {services.map((services, index) => {
                                    const { name, Description, link } = services;
                                    return (
                                        <div className="  border-b border-white/20 h-[146px] mb-[36px] flex " key={index}>
                                            <div className=" max-w-[476px]  ">
                                                <h4 className=" text-[20px] tracking-wider font-semibold mb-6   ">{name} </h4>
                                                <p className=" leading-tight   ">{Description}</p>
                                            </div>

                                            <div className=" fl flex-col flex-1 items-end  ">
                                                <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center  " >
                                                    <BsArrowUpRight />
                                                </a>
                                                <a href="#" className="btn-link  text-sm " >{link}</a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>


                        </motion.div>

                    </div>

                </div>
            </div>


        </section>
    )
}

export default Services;