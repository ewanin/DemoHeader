import React, { useEffect, useRef } from 'react';
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Section76 = () => {
    const imgGSAP2 = useRef(null);
    const imgGSAP3 = useRef(null);

    useEffect(() => {

        const playAnimation = (background, text, color) => {
            gsap.to(background, { x: 0, duration: .5, ease: Power3.easeInOut, backgroundColor: '#E43C13' });
            gsap.to(text, { color, duration: .5, ease: Power3.easeInOut });
        };

        const reverseAnimation = (background, text, color) => {
            gsap.to(background, { x: -1000, duration: .5, ease: Power3.easeInOut });
            gsap.to(text, { color, duration: .5, ease: Power3.easeInOut });
        };

        const container = imgGSAP2.current.parentElement;
        const container1 = imgGSAP3.current;

        const text = imgGSAP3.current.children[0];
        const text1 = imgGSAP3.current.children[1];

        container.addEventListener('mouseenter', () => playAnimation(imgGSAP2.current, text, '#ffffff'));
        container.addEventListener('mouseleave', () => reverseAnimation(imgGSAP2.current, text, '#E43C13'));

        container1.addEventListener('mouseenter', () => playAnimation(imgGSAP2.current, text1, '#ffffff'));
        container1.addEventListener('mouseleave', () => reverseAnimation(imgGSAP2.current, text1, '#E43C13'));

        return () => {
            container.removeEventListener('mouseenter', playAnimation);
            container.removeEventListener('mouseleave', reverseAnimation);
            container1.removeEventListener('mouseenter', playAnimation);
            container1.removeEventListener('mouseleave', reverseAnimation);
        };

    }, []);

    return (
        <div>
            <div className='px-[5%] justify-between items-center'>
                <div>
                    <div id='one' className='overflow-hidden xl:w-[60vw] w-[80vw] mx-auto'>
                        <div
                            ref={imgGSAP2}
                            className='h-[10vh] -mb-[10vh] z-0' />
                        <div
                            ref={imgGSAP3}
                            className='flex mx-auto xl:w-[60vw] w-[80vw] justify-between items-center md:py-2  border-b-2 border-primary cursor-pointer relative'>
                            <div className='md:text-[34px] text-[20px] font-semibold md:leading-[36px] leading-[30px] mb-4'>Ullo Open</div>
                            <div className='md:text-[17px] text-[14px] text-right'>Design & Utility Patents</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section76;