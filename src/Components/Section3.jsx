import React, { useEffect, useState, useRef } from 'react'
import gsap, { Power3, Bounce } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import one from '../../public/Images/01.png'
import two from '../../public/Images/02.png'
import three from '../../public/Images/03.png'
import four from '../../public/Images/04.png'
import five from '../../public/Images/05.png'
import six from '../../public/Images/06.png'
import seven from '../../public/Images/07.png'
import eight from '../../public/Images/08.png'
import nine from '../../public/Images/09.png'
import ten from '../../public/Images/10.png'
import eleven from '../../public/Images/11.png'
import twelve from '../../public/Images/12.png'

import img1 from '../../public/Images/four.jpg'
import img2 from '../../public/Images/three.jpg'


const Section3 = () => {

    const imgGSAP1 = useRef(null);
    const imgGSAP2 = useRef(null);
    const imgGSAP3 = useRef(null);
    const imgGSAP4 = useRef(null);
    const imgGSAP5 = useRef(null);

    // Image state
    const imageUrls = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve];
    const [currentIndex, setCurrentIndex] = useState(0);


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
        gsap.fromTo(d, { y: 220 }, {
            y: 0, duration: 1, delay:.2, ease: Power3.easeInOut, scrollTrigger: {
                trigger: d
            }
        });

        const e = imgGSAP5.current;
        gsap.fromTo(e, { scale:0 }, {
            scale:1, duration: 1, delay:.1, ease: Power3.easeInOut, scrollTrigger: {
                trigger: e
            }
        });

        // Image interval
        const imageInterval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % imageUrls.length);
        }, 100);

        return () => clearInterval(imageInterval);

    }, [imageUrls.length]);

    return (
        <div>
            <div className='px-[5%] justify-between py-[5%] items-center'>
                <div className=" overflow-hidden w-fit mx-auto px-2 ">
                    <div
                        ref={imgGSAP1}
                        className='font-extrabold md:text-[80px] text-[45px] tracking-tighter w-fit mx-auto lg:leading-normal md:leading-[65px] leading-[45px] mb-[2%] text-center'>DYNAMICS INCLUDED</div>
                </div>

                <div className='flex flex-wrap justify-between items-center'>
                    <div className=' py-[6%] lg:w-[25%] md:w-[40%] w-full'>
                        <div className=' overflow-hidden'>
                            <div ref={imgGSAP2} className='md:text-[34px] text-[28px] font-semibold md:leading-[36px] leading-[30px] mb-4'>Moving parts can add complexity, and also functionality.</div>
                            <div ref={imgGSAP3} className='md:text-[17px] text-[15px]'>Our design approach always weighs both. The end result? A life-enhancing product that's easy to use and love.</div>
                        </div>
                    </div>

                    <div>
                    <img src={imageUrls[currentIndex]} alt={`Image ${currentIndex + 1}`} className='w-[400px]' />
                </div>
                    <div className=' md:mx-0 mx-auto overflow-hidden'>
                        <img ref={imgGSAP4} src={img1} alt="Not Available" className='w-[240px] h-[200px] rounded-lg mb-[4%]' />
                    </div>
                    <div>
                    <img ref={imgGSAP5} src={img2} alt="Not Available" className='w-[400px] h-[300px] rounded-xl' />
                </div>
                </div>

                {/* <div>
                    <img ref={imgGSAP5} src={img2} alt="Not Available" className='w-[400px] h-[300px] rounded-xl' />
                </div> */}

            </div>
        </div>
    )
}

export default Section3