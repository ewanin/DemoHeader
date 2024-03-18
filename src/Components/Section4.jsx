import React, { useEffect, useState, useRef } from 'react'
import gsap, { Power3, Bounce } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import nez from '../../public/Images/nez.png'


const Section4 = () => {

    const imgGSAP1 = useRef(null);
    const imgGSAP2 = useRef(null);
    const imgGSAP3 = useRef(null);
    const imgGSAP4 = useRef(null);
    const imgGSAP5 = useRef(null);



    useEffect(() => {

        const a = imgGSAP1.current;
        gsap.fromTo(a, { y: 200 }, {
            y: 0, duration: 1, ease: Power3.easeInOut, scrollTrigger: {
                trigger: a
            }
        });

        const b = imgGSAP2.current;
        gsap.fromTo(b, { x: -400 }, {
            x: 0, duration: 1, delay:.1, ease: Power3.easeInOut, scrollTrigger: {
                trigger: b
            }
        });

        const c = imgGSAP3.current;
        gsap.fromTo(c, { x: -450 }, {
            x: 0, duration: 1, delay:.3, ease: Power3.easeInOut, scrollTrigger: {
                trigger: c
            }
        });

        const d = imgGSAP4.current;
        gsap.fromTo(d, { rotate: 0}, {
            rotate:-10, duration: 1, delay:.5, ease: Power3.easeInOut,
            onComplete: () => {
              gsap.to(d, { rotation: 0, delay: .3 });
            },
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
                        className='font-extrabold md:text-[80px] text-[45px] tracking-tighter w-fit mx-auto lg:leading-normal md:leading-[65px] leading-[45px] mb-[2%] text-center'>HOLISTIC BRANDING</div>
                </div>

                <div className='flex flex-wrap justify-between items-center'>
                    <div className='  py-[6%] lg:w-[35%] md:w-[40%] w-full'>
                        <div className=' overflow-hidden'>
                            <div ref={imgGSAP2} className='md:text-[34px] text-[28px] font-semibold md:leading-[36px] leading-[30px] mb-4'>From logo-creation to graphics, copy and packaging.</div>
                            <div ref={imgGSAP3} className='md:text-[17px] text-[15px]'>We go beyond product design to build an ownable identity and thumb-stopping brand–whether custom-made or sourced from stock.</div>
                        </div>
                    </div>

                    <div className='lg:w-[55%] md:w-[60%] w-full'>
                        <img ref={imgGSAP4} src={nez} alt="Not Available" className=' ' />
                      </div>
                  
                </div>

               

            </div>
        </div>
    )
}

export default Section4