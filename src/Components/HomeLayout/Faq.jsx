import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className="text-center lg:w-2/5 md:w-[350px] mx-auto py-10">
                <h1 className="md:text-2xl text-xl font-bold ">FAQ</h1>
                <p className="">User's most searched common questions are answered here.Let's take a look </p>
            </div>
            <div className="collapse collapse-arrow bg-blue-100 my-2">
                    <input type="radio" name="adventure-accordion" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What is Mountain Treks?
                    </div>
                    <div className="collapse-content">
                        <p>
                        Mountain Treks are guided journeys through mountain trails, offering breathtaking views, challenging paths, and an immersive experience in nature.
                        </p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow bg-blue-100 my-2">
                    <input type="radio" name="adventure-accordion" />
                    <div className="collapse-title text-xl font-medium">
                        What is Ocean Dives?
                    </div>
                    <div className="collapse-content">
                        <p>
                        Ocean Dives allow adventurers to explore underwater ecosystems, discover marine life, and experience the serenity of the ocean.
                        </p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow bg-blue-100 my-2">
                    <input type="radio" name="adventure-accordion" />
                    <div className="collapse-title text-xl font-medium">
                        What are Wildlife Safaris?
                    </div>
                    <div className="collapse-content">
                        <p>
                        Wildlife Safaris are adventures in natural reserves where you can observe animals in their natural habitat while respecting conservation efforts.
                        </p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow bg-blue-100 my-2">
                    <input type="radio" name="adventure-accordion" />
                    <div className="collapse-title text-xl font-medium">
                        What are Camping Retreats?
                    </div>
                    <div className="collapse-content">
                        <p>
                        Camping Retreats are escapes into the wilderness, providing a chance to relax, reconnect with nature, and enjoy outdoor activities like campfires and stargazing.
                        </p>
                    </div>
                    </div>
                    <div className="collapse collapse-arrow bg-blue-100 my-2">
                    <input type="radio" name="adventure-accordion" />
                    <div className="collapse-title text-xl font-medium">
                        What is Desert Exploration?
                    </div>
                    <div className="collapse-content">
                        <p>
                        Desert Exploration involves discovering the unique landscapes of deserts, including sand dunes, oases, and rare flora and fauna, while learning about desert survival.
                        </p>
                    </div>
                    </div>

        </div>
    );
};

export default Faq;