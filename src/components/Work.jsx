import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Imag1 from '../assets/portfolio-img1.png';
import Imag2 from '../assets/portfolio-img2.png';
import Imag3 from '../assets/portfolio-img3.png';
import { img } from "framer-motion/client";


const Work = () => {
    return (
        <section className=" section" id="work">
            <div className="container mx-auto">
                <div>
                    <div className=" flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0    ">
                        {/* text */}
                        <div>
                            <h2 className=" h2 leading-tight text-violet-600">My Latest <br /> work </h2>
                            <p className=" max-w-sm mb-16   " >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime neque harum et?</p>
                            <button className=" btn btn-sm "> View all project</button>
                        </div>
                        {/* image */}

                        <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl ">
                            {/* overlay */}

                            <div className="group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300  "></div>

                            {/* img */}
                            <img src={Imag1} alt="" />
                            {/* pre title */}
                            <div>UI/UX Desgn</div>
                            {/* pre title */}
                            <div>
                                <span>  Project title </span>
                              
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