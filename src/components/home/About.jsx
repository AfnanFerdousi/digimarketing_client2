import React from 'react';
import MovingText from '../shared/MovingText';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const About = () => {
    return (
        <div className='max-w-[1320px] w-full mx-auto lg:md:px-4 px-4 lg:md:mt-10 mt-[15vh]'>
            <div className='flex justify-between items-center'>
                <div
                    data-aos="fade-right"
                >
                    <h3 className='text-[#FE6B01] font-bold font-montserrat lg:md:text-4xl text-3xl'>About Us</h3>
                    <h4 className='pt-[1%] lg:md:text-3xl text-xl font-semibold text-[#514949]'>We are More than Just an Agency</h4>
                </div>
            </div>
            <div className="absolute z-[100] bottom-[-25%] right-[8%]">
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/0cfcc107-c361-4180-acf4-6cbaf79ff6c0/G5P03a2oqw.json"
                    className="lg:md:w-[15vw] lg:md:h-[200px] h-[150px] w-[200px]"
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className='bg-[#fff] mt-8 lg:md:p-8 p-6 rounded-md border-[#FE6B01] border-dashed border-[2px]'>
                <p className='lg:md:text-[16px] text-[14px] font-medium text-[#333]'>Welcome to <span className='text-[#FE6B01]'>DigiMarketing Mix</span>,where we are dedicated to revolutionizing your digital presence and empowering your business for success in the modern age. With a team of seasoned professionals, we specialize in crafting bespoke digital marketing strategies and delivering top-notch technology solutions tailored to your unique needs. Our comprehensive range of services includes everything from strategic SEO and targeted social media campaigns to robust web development, mobile app creation, and IT consulting. At DigiMarketing Mix, we pride ourselves on our commitment to transparency, communication, and tangible results. By forging strong partnerships with our clients, we ensure that every project is executed with precision and tailored to achieve your business objectives effectively. Whether you&apos;re a startup looking to make your mark or an established enterprise seeking to stay ahead of the curve, trust DigiMarketing Mix to elevate your online presence and drive sustainable growth for your business.</p>
            </div>

        </div>
    );
};

export default About;