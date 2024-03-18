import React, { useEffect, useRef } from 'react';
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Section71 from './Section71'
import Section72 from './Section72';
import Section73 from './Section73';
import Section74 from './Section74';
import Section75 from './Section75';
import Section76 from './Section76';

const Section7 = () => {

    const imgGSAP1 = useRef(null);

    useEffect(() => {
        const a = imgGSAP1.current;
        gsap.fromTo(a, { y: -200 }, {
            y: 0,
            duration: 1,
            ease: Power3.easeInOut,
            scrollTrigger: { trigger: a }
        });

    }, []);

    return (
        <div>
            <div className='px-[5%] justify-between py-[5%] items-center'>
                <div className="overflow-hidden w-fit mx-auto px-2">
                    <div
                        ref={imgGSAP1}
                        className='font-extrabold md:text-[80px] text-[45px] tracking-tighter w-fit mx-auto lg:leading-normal md:leading-[65px] leading-[45px] mb-[2%] text-center'>AWARDS & PATENTS</div>
                </div>

                <Section71 />
                 <Section72 />
                <Section73 />
                <Section74 />
                <Section75 />
                <Section76 />

            </div>
        </div>
    )
}

export default Section7