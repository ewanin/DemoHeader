import React, { useEffect, useState, useRef } from 'react'
import gsap, { Power3, Bounce } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import meyers from '../../public/Images/meyers.png'

const Section5 = () => {
    const imgGSAP1 = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {

        const a = imgGSAP1.current;
        gsap.fromTo(a, { y: 200 }, {
            y: 0, duration: 1, ease: Power3.easeInOut, scrollTrigger: {
                trigger: a
            }
        });

        const imgElement = imgRef.current;

        const tl = gsap.timeline({ repeat: -1 });

        tl.fromTo(imgElement, { x: '-100%' }, { x: '100%', duration: 5, ease: 'linear' })

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div>
            <div className='px-[5] justify-between py-[5%] items-center'>
                <div className=" overflow-hidden w-fit mx-auto px-2 ">
                    <div
                        ref={imgGSAP1}
                        className='font-extrabold md:text-[80px] text-[45px] tracking-tighter w-fit mx-auto xl:leading-normal lg:leading-[65px] md:leading-[60px] leading-[40px] mb-[2%] text-center'>READY FOR MASS PRODUCTION
                    </div>
                </div>
                <div ref={imgRef} className='mt-[5%] flex'>
                    <img src={meyers} alt="Not Available" className='w-full md:h-full h-[150px]' />
                    <img src={meyers} alt="Not Available" className='w-full md:h-full h-[150px]' />
                </div>
            </div>
        </div>
    );
};

export default Section5;
