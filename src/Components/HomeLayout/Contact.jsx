import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="text-center lg:w-2/5 md:w-[350px] mx-auto py-10">
                <h1 className="md:text-2xl text-xl font-bold ">Contact To Join</h1>
                <p className="">Are you solo? Need a team to join? Submit the form below and we will manage a team for you</p>
            </div>
            <div>
                <div className="py-20 rounded-lg px-8 md:px-0 flex items-center justify-center bg-blue-100">
                    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
                        <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Input */}
                            <div className="form-group">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            </div>
                            {/* Phone Number Input */}
                            <div className="form-group">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Your Phone Number"
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            </div>
                            {/* Email Input */}
                            <div className="form-group">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            </div>
                            {/* Treks Selection */}
                            <div className="form-group">
                            <label htmlFor="trek" className="block text-sm font-medium text-gray-700">
                                Choose a Trek
                            </label>
                            <select
                                id="trek"
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="">Select a Trek</option>
                                <option value="Mountain Treks">Mountain Treks</option>
                                <option value="Ocean Dives">Ocean Dives</option>
                                <option value="Wildlife Safaris">Wildlife Safaris</option>
                                <option value="Forest Expeditions">Forest Expeditions</option>
                                <option value="Camping Retreats">Camping Retreats</option>
                                <option value="Desert Exploration">Desert Exploration</option>
                            </select>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div className="mt-6 flex justify-center">
                            <button
                            type="submit"
                            className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition"
                            >
                            Submit
                            </button>
                        </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;