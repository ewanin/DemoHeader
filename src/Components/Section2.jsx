import React, { useEffect, useState, useRef } from 'react'
import gsap, { Power3, Bounce } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import ullo from '../../public/Images/ullo.png';

const Section2 = () => {

    const imgGSAP1 = useRef(null);
    const imgGSAP2 = useRef(null);
    const imgGSAP3 = useRef(null);


    useEffect(() => {

        const a = imgGSAP1.current;
        gsap.fromTo(a, { y: 200 }, {
            y: 0, duration: 1, ease: Power3.easeInOut, scrollTrigger: {
                trigger: a
            }
        });

        const b = imgGSAP2.current;
        gsap.fromTo(b, { y: 200 }, {
            y: 0, duration: 1, delay: .1, ease: Power3.easeInOut, scrollTrigger: {
                trigger: b
            }
        });

        const c = imgGSAP3.current;
        gsap.fromTo(c, { scale: 0 }, {
            scale: 1, duration: 1, delay: .2, ease: Power3.easeInOut, scrollTrigger: {
                trigger: c
            }
        });

    }, []);

    return (
        <div>
            <div className='px-[5%] justify-between py-[5%] items-center text-center'>
                <div className=" overflow-hidden w-fit mx-auto px-2 ">
                    <div
                        ref={imgGSAP1}
                        className=' font-extrabold md:text-[80px] text-[45px] tracking-tighter w-fit mx-auto md:leading-normal leading-[45px] mb-[2%]'>PRE-ENGINEERED</div>
                </div>
                <div className="overflow-hidden w-fit mx-auto">
                    <div ref={imgGSAP2} className=' xl:w-[40vw] lg:w-[60vw] w-[80vw] mx-auto md:text-[17px] text-[15px] mb-8 md:leading-normal leading-[17px]'>Real-world manufacturability is always the primary goal. Our background in engineering means the original design-intent is preserved throughout the development process.</div>
                </div>
                <div>
                    <img ref={imgGSAP3} src={ullo} alt="Not Available" className='mx-auto md:w-[280px] w-[220px] md:h-[220px] h-[180px] ' />
                </div>
            </div>
        </div>
    )
}

export default Section2