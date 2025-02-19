import React from "react";
import Image from '../assets/avatar.svg';
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { } from 'framer-motion';
import { fadeIn } from '../variants';

//  import {} from 'react-type-animation ';

const Banner = () => {
    return (
        <section className=" section" id="home" >
            <div className="container mx-auto">
                <div className="  ">
                    <div className="  ">
                        <h1>
                            Ben <span> Aiden</span>
                        </h1>
                        <div className=" "> 
                            <span> I AM A </span>

                            <TypeAnimation 
                            
                            sequence={[ 'Developer', 2000]}
                            
                            />
                              </div>
                          </div>

                    <div className="  ">
                        <img src={Image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;