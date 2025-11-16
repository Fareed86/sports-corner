import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Contact = () => {
   const handleFormSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
   }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
                <div className="card w-full max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-center text-blue-400 mb-4">Contact Us</h2>

                        

                        <form onSubmit={handleFormSubmit} className="space-y-3">
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">Message</span>
                                </label>
                                <textarea
                                    name="message"
                                    placeholder="Your message"
                                    className="textarea textarea-bordered w-full"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button type="submit" className="btn flex mx-auto rounded-3xl bg-blue-500 text-white btn-primary w-1/2">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;
