import React from 'react';

const AboutUs = () => {
    return (
       <section className="py-20 px-6 md:px-20 bg-base-100">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Custom Image Grid */}
    <div className="grid grid-cols-2 grid-rows-2">
      <img
        src="https://i.ibb.co/SDrQ3mjh/s1.jpg"
        alt="Small 1"
        className="w-full h-64 object-cover  shadow-md"
      />
      <img
        src="https://i.ibb.co/twkLJwxD/s2.jpg"
        alt="Large 2"
        className="w-full h-64 object-cover  shadow-lg"
      />
        <img
          src="https://i.ibb.co/svbCQP3f/bg.jpg"
          alt="Large 4"
          className="w-full h-64 object-cover  shadow-lg"
        />
      <img
        src="https://i.ibb.co/sJ9J6bzF/s3.jpg"
        alt="Small 3"
        className="w-full h-64 object-cover  shadow-md"
      />
    </div>

    {/* Text Content */}
    <div className="space-y-5 text-center md:text-left">
      <h2 className="text-3xl font-extrabold text-primary">📚 About Virtual Bookshelf</h2>
      <h3 className="text-xl font-semibold text-secondary">
        Designed for Readers Who Think Beyond the Page
      </h3>
      <p className="text-base-content">
        We believe books shape perspectives, and your digital shelf should reflect your reading identity.
        Virtual Bookshelf helps you track, organize, and revisit stories that move you—without the clutter.
        Enjoy a personal, secure, and elegant reading companion that grows with your passion.
      </p>
      <button className="btn btn-primary">Explore Features</button>
    </div>

  </div>
</section>


    );
};

export default AboutUs;