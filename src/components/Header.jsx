import React from "react";
//images
import Logo from '../assets/logo.svg';


const Header = () => {
    return (
        <header className=" py-8 "   >
            <div className=" container mx-auto  ">
                <div className=" flex justify-around items-center   ">
                    {/* logo */}

                    <a href="#">
                        <img src={Logo} alt="" />
        {/* <h1 className=" w-full text-3xl font-bold text-[#00df9a]  "> Dann〽️</h1> */}

                    </a>

                    {/* button */}

                    <button className="btn btn-sm " > work with me</button>

                </div>

            </div>
        </header>
    );

};
export default Header 