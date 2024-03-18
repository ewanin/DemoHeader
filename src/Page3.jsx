import React, { useEffect, useState, useRef } from 'react'
import gsap, { TweenMax, Power3, Bounce } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)  

const Page3 = (props) => {

    let str = "Hello, my name is John Doe";
    let result = str.charAt(7, 2);
    // console.log(result);

    const imgGSAP2 = useRef(null);

    useEffect(() => {

        const b = imgGSAP2.current;
        gsap.fromTo(b, { x: 100 }, {
            x: 0, duration: 1,  delay:.5, ease: Power3.easeOut, scrollTrigger: {
                trigger: b
            }
        })
    }, []);

  return (
    <div>
      <div className='w-fit bg-red-40 m-auto overflow-hidden relative'>
        <div ref={imgGSAP2} className=''>Hello</div>
      </div>

      <div>
            {result}
        </div>
      
    </div>
  )
}

export default Page3
