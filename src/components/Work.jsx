import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Imag1 from '../assets/portfolio-img1.png';
import Imag2 from '../assets/portfolio-img2.png';
import Imag3 from '../assets/portfolio-img3.png';
// import { motion } from "framer-motion/client";


const Work = () => {
    return (
        <section className=" section" id="work">
            <div className="container mx-auto">
                <div>
                    <div className="  flex flex-col gap-y-12 -mb-24    ">
                        {/* text */}
                        <div>
                            <h2 className=" h2 leading-tight text-violet-600">My Latest <br /> work </h2>
                            <p className=" max-w-sm mb-16   " >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime neque harum et?</p>
                            <button className=" btn btn-sm "> View all project</button>
                        </div>
                        {/* image */}

                        <div className="  relative overflow-hidden border-2 border-white/50 rounded-xl ">
                            {/* overlay */}

                            <div className="hover:bg-black w-full absolute z-40 transition-all duration-300  "></div>

                            {/* img */}
                            <img className=" group-hover:scale-125 transition-all duration-500  "  src={Imag1} alt="" />
                            {/* pre title */}
                            <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50   " >UI/UX Desgn</div>
                            {/* pre title */}
                            <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50  ">
                                <span className=" text-3xl text-white" >  Project title </span>
                              
                                </div>


                        </div>

                    </div>
                    <div>2</div>
                </div>

            </div>
        </section>
    )
}

export default Work;