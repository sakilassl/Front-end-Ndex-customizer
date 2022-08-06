import React from "react";
import img from "../Components/Images/logo.jpg"

const AboutUs = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">


<p>NDex a web and mobile application to the apparel industry for buying and selling purposes that the client can be customized its’ styles and features after buying the software without the intervention of a software developer.</p>

 

 </p>
                </div>
                <div className="w-full lg:w-8/12 ">
                <img src={img} />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
