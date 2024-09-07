import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100  text-gray-900 ">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <img
                        src="https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="About Us"
                        className="mx-auto mb-4 rounded-lg shadow-lg"
                    />
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-lg mb-6">
                        Welcome to News Now! We're dedicated to bringing you the
                        latest and most relevant news from around the world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white  border border-gray-200  rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Our Mission
                        </h2>
                        <p>
                            At News Now, our mission is to provide you with
                            timely and accurate news from a variety of sources.
                            We aim to make it easy for you to stay informed
                            about what's happening in the world.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            How It Works
                        </h2>
                        <p>
                            Our application leverages the News API to fetch and
                            display news articles based on your search queries.
                            Simply enter a topic or keyword, and we'll pull in
                            the most relevant articles for you to read.
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p>
                        If you have any questions, feedback, or suggestions,
                        feel free to reach out to us at{" "}
                        <a
                            href="mailto:support@newsapp.com"
                            className="text-blue-600 hover:underline"
                        >
                            support@newsapp.com
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
