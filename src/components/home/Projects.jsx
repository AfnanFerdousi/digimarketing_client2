import React from 'react';
import ReactPlayer from 'react-player/lazy';
import Link from "next/link";
const Projects = () => {
    return (
        <div
         data-aos="fade-up"
         data-aos-duration="2000"
         className='bg-[#fe7a1a] lg:md:mt-[30%] mt-[15vh] rounded-md px-6 pb-6 pt-16'>
            <div className="max-w-[1320px] w-full mx-auto lg:md:px-4 px-4 relative rounded-md">
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=q-Hx0xL-llk'
                    height="60vh"
                    width="68vw"
                    playing={true}
                    className="absolute bottom-[18vh] rounded-md"
                    style={{ borderRadius: "30px" }}
                />
                <div className="flex flex-col items-center justify-center py-8">
                <h3 className="text-[#fff] font-bold text-3xl text-center pb-2">Our Representative Work</h3>
                <Link href="/projects" className='bg-[#fff] font-inter font-medium lg:md:text-lg text-[14px] text-[#fe7a1a] py-3 px-4 rounded-md mx-auto hover:border-[#ddd] border-[2px] border-[#f5f5f5] transition-all duration-300'>See other projects</Link>
                </div>
              
            </div>

        </div>
    );
};

export default Projects;