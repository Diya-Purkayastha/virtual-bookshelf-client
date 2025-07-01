import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { toast } from 'react-toastify';

const Newsletter = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        toast.success('Thanks for your attention')
    }
  return (
    <Fade direction='up' delay={300} triggerOnce>
    <div className="py-12 mt-30 ">
        <div className="relative w-full bg-neutral rounded-xl overflow-hidden">
                {/* 🔆 Top-centered orange glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-40 bg-primary blur-3xl opacity-30 z-0" />

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Illustration */}
        <div className='px-4 md:px-2 lg:px-0'>
          <img
            src="https://i.ibb.co/ksFXyHBF/Newsletter-cuate-1.png"
            alt="Newsletter Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Right Content */}
        <div className='px-4 md:px-2 lg:px-0'>
          <h2 className="text-4xl text-primary lg:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-base text-base-content mb-6 ">
            Get weekly recipes, exclusive cooking tips, and seasonal specials straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full sm:flex-1"
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      </div>
    </div>
    </Fade>
  );
};

export default Newsletter;