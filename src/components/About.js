import React from 'react';

// Import image
import Image from '../assets/img/about.webp';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Jubaer Hossain
              </h2>
              <p className='mb-4 text-accent'>
                Passionate Full-Stack Alchemist Crafting Digital Dreams
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Welcome to my vibrant corner of the digital universe! I'm Jubaer Hossain, a freelance Full-Stack Web Developer with a zeal for turning innovative ideas into stunning online realities. From dynamic business websites that captivate audiences to robust e-commerce platforms that drive sales, I specialize in harnessing the power of Laravel to create seamless, high-performance web solutions. With an unwavering focus on not just flawless functionality but also jaw-dropping aesthetics, I ensure your website stands out from the digital crowd. Let's collaborate and transform your vision into a dazzling, high-performance masterpiece!
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Let's Create Something Amazing!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
