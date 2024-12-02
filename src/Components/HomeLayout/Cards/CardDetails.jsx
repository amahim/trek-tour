import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import  { Helmet } from "react-helmet-async"

const CardDetails = () => {
    const {
        img, title, desc, cost, booking, location, duration, level, items, features, size, instructions
    } = useLoaderData();

    const [showModal, setShowModal] = useState(false);

    const handleTalkWithExpert = () => {
        const now = new Date();
        const hours = now.getHours();
        const mnts = now.getMinutes();
        const currentTime = hours * 60 + mnts;

        const startTime = 10 * 60;
        const endTime = 20 * 60;

        if (currentTime >= startTime && currentTime <= endTime) {
            window.open("https://meet.google.com/fjv-dwpt-tqi", "_blank");
        } else {
            setShowModal(true);
        }
    };

    return (
        
        <div className="">
            <Helmet>
                 <title>EcoAdventure | {title}</title>
            </Helmet>
            {/* Main Details Section */}
            <div className="px-6 py-8 bg-[#ECECEC] rounded-lg">
                <div className="md:flex-row flex-col gap-4 flex items-center">
                    {/* Image */}
                    <div>
                        <img src={img} alt={title} className="rounded-lg" />
                    </div>

                    {/* Details */}
                    <div className="">
                        <h3 className="md:text-2xl text-xl font-bold">{title}</h3>
                        <p className="font-medium mt-2">{desc}</p>
                        <p className="mt-2 text-lg">
                            <span className="font-bold">Cost:</span> {cost}
                        </p>
                        <p className="mt-2 text-lg">
                            <span className="font-bold">Location:</span> {location}
                        </p>
                        <p className="mt-2 text-lg">
                            <span className="font-bold">Duration:</span> {duration}
                        </p>
                        <p className="mt-2 text-lg">
                            <span className="font-bold">Difficulty Level:</span> {level}
                        </p>
                        <p className="mt-2 text-lg">
                            <span className="font-bold">Group Size:</span> {size}
                        </p>

                        {/* Features */}
                        <h3 className="mt-2 font-bold text-xl">Features:</h3>
                        <ul className="list-disc list-inside mt-2">
                            {features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>

                        {/* Items */}
                        <h3 className="mt-2 font-bold text-xl">Included Items:</h3>
                        <ul className="list-disc list-inside mt-2">
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        {/* Instructions */}
                        <h3 className="mt-6 font-bold text-xl">Instructions:</h3>
                        <ul className="list-disc list-inside mt-2">
                            {instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ul>
                        <p className={`mt-2 py-1 px-2 text-center w-[200px] rounded-lg ${booking ? 'bg-[#00f80c38]' : 'bg-[#fa000054]'}`}>
                            {booking ? "Booking Available" : "Booking Closed"}
                        </p>
                    </div>
                </div>

                {/* Button */}
                <div className="flex gap-4 items-center mt-6 md:justify-center">
                    <button 
                        onClick={handleTalkWithExpert} 
                        className="btn text-white bg-blue-400 rounded-lg"
                    >
                        Talk with Expert
                    </button>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 space-y-4 w-[90%] md:w-[400px]">
                        <h2 className="text-lg font-bold">Consultation Time</h2>
                        <p>
                            Our consultation hours are from <strong>10:00 AM to 8:00 PM</strong>. 
                            Please visit us during these hours for assistance.
                        </p>
                        <button 
                            onClick={() => setShowModal(false)} 
                            className="btn bg-red-500 text-white w-full rounded-lg"
                        >Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardDetails;
