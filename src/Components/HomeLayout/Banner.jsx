
import React, { useState } from "react";
import Mountain from "../../assets/mountain.jpg";
import Camping from "../../assets/camping.jpg";
import Desert from "../../assets/dessert.jpg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const destinations = [
    {
        id: 1,
        name: "Mountain Treks",
        image: Mountain,
        description: "Experience breathtaking mountain trails and lit up yourself"
    },
    {
        id: 2,
        name: "Camping Retreats",
        image: Camping,
        description: "Relax under the stars and enjoy eco-friendly camping in nature"
    },
    {
        id: 3,
        name: "Desert Exploration",
        image: Desert,
        description: "Discover the vast beauty and serenity of desert landscapes"
    }
];


const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % destinations.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
    };

    return (
        <div className="relative ">
            <div className="  text-white md:h-[450px] lg:min-h-screen flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center object-cover rounded-lg"
                style={{
                    backgroundImage: `url(${destinations[currentSlide].image})`,
                    filter: "brightness(50%)",
                }}
            ></div>


            {/* Content Overlay */}
            <div className="relative z-10 mx-auto py-5">
                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 justify-center ">
                    {/* Text Section */}
                    <div className="flex lg:w-2/5 flex-col justify-center items-center mt-20">
                        <div className="px-4 space-y-2 ">

                            <h1 className="text-2xl lg:text-4xl md:text-3xl font-bold
                            animate__animated animate__backInRight">
                                {destinations[currentSlide].name}
                            </h1>

                            <p className=" text-gray-300 text-lg lg:w-auto md:w-72
                            animate__animated animate__backInLeft" >
                                {destinations[currentSlide].description}
                            </p>

                            <a href="#letsgo" className="btn  bg-blue-400 text-white border-none rounded-lg ">
                                Let's Go
                            </a>

                        </div>
                    </div>

                    {/* Carousel Section */}
                    <div className=" flex flex-1 space-x-2 overflow-x-hidden lg:overflow-x-auto overflow-y-hidden scrollbar-hide">
                        {destinations.map((destination, index) => (
                            <div
                                key={destination.id}
                                className={`lg:w-64 w-24  md:w-32 flex-shrink-0 rounded-lg shadow-md cursor-pointer transform transition-transform ${currentSlide === index
                                    ? "border-4 border-blue-600"
                                    : "hover:scale-105"
                                    }`}
                                onClick={() => setCurrentSlide(index)} 
                            >
                                <div className="relative">
                                    <img
                                        src={destination.image}
                                        alt={destination.name}
                                        className="rounded-lg object-cover  "
                                    />
                                    <div className=" font-medium md:font-bold absolute bottom-5 w-full md:text-xl lg:text-2xl">
                                        <p className="text-center">{destination.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Btns */}
                <div className="hidden lg:block">
                <div className=" flex absolute inset-x-0 -bottom-20  justify-center space-x-4">
                    <button
                        onClick={prevSlide}
                        className="p-2 bg-white hover:bg-blue-300 rounded-full"
                    >
                        <FiChevronLeft className="text-4xl text-blue-700"></FiChevronLeft>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-2 bg-white hover:bg-blue-300 rounded-full"
                    >
                        <FiChevronRight className="text-4xl text-blue-700"></FiChevronRight>
                    </button>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;