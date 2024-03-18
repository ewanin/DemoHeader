import React, { useEffect, useState, useRef } from 'react'
import gsap, { Power3, Bounce } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import image1 from '../../public/Images/two.jpg';


const Section1 = () => {

  const [imgGSAP1, imgGSAP2] = [useRef(null), useRef(null),];
  const imgGSAP3 = useRef(null);


  useEffect(() => {

    [imgGSAP1, imgGSAP2].forEach((ref, index) => {
        const delay = .2 + index * 0.3;
        gsap.fromTo(
          ref.current,
          { x:-700 },
          {
            x:0,
            duration: 1,
            delay,
            ease: Power3.easeInOut,
            scrollTrigger: {
              trigger: ref.current,
            },
          }
        );
      });

      const a = imgGSAP3.current;
    gsap.fromTo(a, { x: 410, y:190, width: 50, height: 50 }, {
      x: 0, y:0, duration: 1, width: 483, height: 326, delay: 0, ease: Power3.easeInOut, scrollTrigger: {
        trigger: a
      }
    });

    }, []);

    return (
        <div>
            <div className='flex flex-wrap px-[5%] justify-between py-[6%] items-center'>
                <div className='xl:w-[35vw] lg:w-[40vw] w-full overflow-hidden '>
                    <div ref={imgGSAP1} className='md:text-[34px] text-[28px] font-semibold md:leading-[36px] leading-[30px] mb-4'>Stuff should work. Period. Our industrial design addresses everyday behaviors and modern life.</div>
                    <div ref={imgGSAP2} className='md:text-[17px] text-[15px]'>By blending disciplines, we think deeply about distinctive solutions, so the end-user doesn’t have to think at all.</div>
                </div>
                <div className='xl:w-[35vw] lg:w-[40vw] w-full mt-[2%]'>
                    <img 
                    ref={imgGSAP3}
                     src={image1} alt="Not Available" className=' rounded-xl' />
                </div>
            </div>
        </div>
    )
}

export default Section1
