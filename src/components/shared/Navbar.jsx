import Image from 'next/image';
import React from 'react';
import logo from '../../../public/fullLogo.png'

const Navbar = () => {
    return (
        <div className='bg-[#fff] shadow-xl shadow-[#eeeeee]'>
        <nav className='flex items-center max-w-[1320px] w-full mx-auto font-montserrat '>
            <div >
                <Image
                    alt="logo"
                    src={logo}
                    width={150}
                    height={100}
                    className="lg:md:w-[85%] w-[60%] lg:md:h-full h-[80%]"
                />
            </div>

            <div className='lg:md:block hidden w-full'>
                <ul className='flex items-center justify-end gap-x-4 text-lg font-medium text-[#333]'>
                    <li className='hover:text-[#FE6B01] delay-200 transition-colors'>Home</li>
                    <li className='hover:text-[#FE6B01] delay-200 transition-colors'>Services</li>
                    <li className='hover:text-[#FE6B01] delay-200 transition-colors'>Projects</li>
                    <li className='hover:text-[#FE6B01] delay-200 transition-colors'>Testimonials</li>
                    <li className='hover:text-[#FE6B01] delay-200 transition-colors'>Contact</li>
                </ul>                
            </div>
            </nav>
        </div>
    );
};

export default Navbar;