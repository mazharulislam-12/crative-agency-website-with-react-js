import React from 'react';
import hero from '../assets/hero_bg.jpeg';
import { FaLongArrowAltRight } from "react-icons/fa"

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${hero})` }}>
                <div className='flex '>
                    <div className='text-white flex-1'>
                        <h2 className='text-5xl mb-5 font-bold'>Crative In Our </h2>
                        <h2 className='text-5xl mb-12 font-bold'>Bold Line</h2>
                        <span className='text-xl font-semibold flex items-center gap-4'>Get a Quote <FaLongArrowAltRight /> </span>
                    </div>
                    <div className='flex-1 '>
                        <h2 className='text-white mt-40'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus soluta repudiandae laudantium aperiam </h2> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
