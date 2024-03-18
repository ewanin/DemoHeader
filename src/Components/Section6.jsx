import React, { useEffect, useState, useRef } from 'react'
import gsap, { Power3, Bounce } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import img1 from '../../public/Images/ten.jpg'


const Section6 = () => {

    const imgGSAP1 = useRef(null);
    const imgGSAP2 = useRef(null);
    const imgGSAP3 = useRef(null);
    const imgGSAP4 = useRef(null);



    useEffect(() => {

        const a = imgGSAP1.current;
        gsap.fromTo(a, { y: 200 }, {
            y: 0, duration: 1, ease: Power3.easeInOut, scrollTrigger: {
                trigger: a
            }
        });

        const b = imgGSAP2.current;
        gsap.fromTo(b, { x: -700 }, {
            x: 0, duration: 1, delay: .1, ease: Power3.easeInOut, scrollTrigger: {
                trigger: b
            }
        });

        const c = imgGSAP3.current;
        gsap.fromTo(c, { x: -700 }, {
            x: 0, duration: 1, delay: .3, ease: Power3.easeInOut, scrollTrigger: {
                trigger: c
            }
        });

        const d = imgGSAP4.current;
        gsap.fromTo(d, { x:400 }, {
            x:0, duration: 1, delay: .5, ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: d
            }
        });

    }, []);

    return (
        <div>
            <div className='px-[5%] justify-between py-[5%] items-center'>
                <div className=" overflow-hidden w-fit mx-auto px-2 ">
                    <div
                        ref={imgGSAP1}
                        className=' font-extrabold md:text-[80px] text-[45px] tracking-tighter w-fit mx-auto lg:leading-[75px] md:leading-[65px] leading-[45px] mb-[2%] text-center'>AND ALWAYS DESIGNED TO GET NOTICED
                    </div>
                </div>

                <div className='flex flex-wrap justify-between items-center'>
                    <div className=' py-[6%] lg:w-[35%] md:w-[40%] w-full'>
                        <div className=' overflow-hidden'>
                            <div ref={imgGSAP2} className='md:text-[34px] text-[28px] font-semibold md:leading-[36px] leading-[30px] mb-4'>Our products are not only designed to get made but also receive (the right) attention.</div>
                            <div ref={imgGSAP3} className='md:text-[17px] text-[15px]'>We work with companies of all sizes and locations to create proprietary and—when we're lucky—award-winning solutions. Here are just a few:</div>
                        </div>
                    </div>

                    <div className='mr-[10%] overflow-hidden'>
                        <img ref={imgGSAP4} src={img1} alt="Not Available" className='w-[220px] h-[220px] rounded-lg' />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Section6