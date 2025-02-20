import React from "react";
import { BsArrowUpRight} from 'react-icons/bs';
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
import Image from '../assets/services.png';


//services
const services = [

    {
        name: 'UI/UX Design',
        Description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor in debitis exercitationem voluptatum quod amet doloremque.  ',
        link: 'learn more'
      },
    {
        name: 'Product branding',
        Description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor in debitis exercitationem voluptatum quod amet doloremque.  ',
        link: 'learn more'
      },
    {
        name: 'Digital Marketing',
        Description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor in debitis exercitationem voluptatum quod amet doloremque.  ',
        link: 'learn more'
      },

]
    

const Services = () => {
return (
  <section className=" section" id="services"  >

    <div className="container mx-auto">
        <div>

            {/* text and image */}

           <div  className=" flex justify-around items-center  lg:gap-x-20 lg:gap-y-0  h-screen  ">

            <div className=" flex-1 justify-around lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 ">
                
            <img className="  " src={Image} alt="" />
            </div>

            <div className=" flex-1  ">

                <h2 className=" h2 text-violet-700 mb-6 ">  What can i do </h2>
                 <h3 className="h3 max-w-[455px] mb-16 ">
                    I am a freelance front-end developer with over 5 years of experience in creating stunning and user-friendly websites and applications.
                 </h3>

                 <button className="btn btn-sm " >See My Work </button>

                  </div>
                 
                 </div>


              {/* text */}
            <div>
                {/* SERVICE LIST  */}

                { serv}

            </div>
   
        </div>
    </div>
 

    </section>
 ) 
}

export default Services;