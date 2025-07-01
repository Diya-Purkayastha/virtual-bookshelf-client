import React from 'react';
import { Slide } from 'react-awesome-reveal';
import PromotionalBanner from '../components/PromotionalBanner';
import Newsletter from '../components/Newsletter';

const ContactUs = () => {
    return (
        <div>
            <Slide delay={300} direction='up' triggerOnce>
        <section className='w-11/12 mx-auto mt-30'>
            <div className="bg-neutral py-20 px-4 ">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

                {/* Left: Info Section */}
                <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                    <h2 className="text-4xl font-bold text-primary">Contact Us</h2>
                    <h3 className="text-xl font-semibold text-base-content">
                        We'd love to hear from you!
                    </h3>
                    <p className="text-base-content leading-relaxed">
                        Have a question, suggestion, or just want to say hello? Fill out the form, and our team
                        will get back to you as soon as possible. We’re here to make your cooking experience better.
                    </p>
                    <div className="mt-6 space-y-2 text-sm text-base-content">
                        <p><strong>Email:</strong> support@VRbooK.com</p>
                        <p><strong>Phone:</strong> +880 1234 567 890</p>
                        <p><strong>Location:</strong> Dhaka, Bangladesh</p>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Write your message here..."
                                className="textarea textarea-bordered w-full"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-secondary w-full">
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
            
        </div>
        </section>
        </Slide>
        <Slide delay={300} direction='up' triggerOnce>
        <PromotionalBanner></PromotionalBanner>
        <Newsletter></Newsletter>
        </Slide>
        </div>
    );
};

export default ContactUs;