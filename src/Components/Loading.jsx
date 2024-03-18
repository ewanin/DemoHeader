import React, { useEffect, useState, useRef } from 'react'
import gsap, { Power3, Bounce } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import image1 from '../../public/Images/one.png';
import image2 from '../../public/Images/two.jpg';
import image3 from '../../public/Images/three.jpg';
import image4 from '../../public/Images/four.jpg';
import image5 from '../../public/Images/five.jpg';
// import image6 from '../../public/Images/six.jpg';
// import image7 from '../../public/Images/seven.jpg';
// import image8 from '../../public/Images/eight.jpg';
// import image9 from '../../public/Images/nine.jpg';
// import image10 from '../../public/Images/ten.jpg';

import open from '../../public/Images/open.png';
import closed from '../../public/Images/closed.png';

import I from '../../public/Images/I.png'
import C from '../../public/Images/C.png'
import O from '../../public/Images/O.png'
import N from '../../public/Images/N.png'

const Loading = () => {

  const imgGSAP1 = useRef(null);
  const imgGSAP2 = useRef(null);
  const imgGSAP3 = useRef(null);
  const imgGSAP4 = useRef(null);
  const refs = [useRef(null), useRef(null), useRef(null)];
  const imgGSAP5 = useRef(null);
  const imgGSAP6 = useRef(null);
  const [imgGSAP7, imgGSAP8, imgGSAP9] = [useRef(null), useRef(null), useRef(null)];
  const imgGSAP10 = useRef(null);
  const [imgGSAP11, imgGSAP12, imgGSAP13, imgGSAP14, imgGSAP15] = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const imgGSAP16 = useRef(null);
  const imgGSAP17 = useRef(null);
  const imgGSAP18 = useRef(null);
  const imgGSAP19 = useRef(null);




  // Number state
  const [percentage, setPercentage] = useState(1);

  // Image state
  const imageUrls = [image1, image2, image3, image4, image5,];
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    // GSAP ANimation
    const a = imgGSAP1.current;
    gsap.fromTo(a, { y: 500 }, {
      y: 0, duration: 1, delay: .2, ease: Power3.easeInOut, scrollTrigger: {
        trigger: a
      }
    });

    const b = imgGSAP2.current;
    gsap.fromTo(b, {margin: '0px 45%' }, {
      margin:0, duration: 1, delay: 1.2, ease: Power3.easeInOut, scrollTrigger: {
        trigger: b
      }
    });

    const c = imgGSAP3.current;
    gsap.fromTo(c, { marginTop:'30%', width: 118, height: 118 }, {
      marginTop: '5%', duration: 1, width: 100, height: 100, delay: 1.2, ease: Power3.easeInOut, scrollTrigger: {
        trigger: c
      }
    });

    gsap.fromTo(imgGSAP4.current, { marginTop:'100vh', width: '1px', height: '10px' }, {
      marginTop:'10vh', width: '1px', height: '80vh', duration: 1.3, delay: .1, ease: Power3.easeInOut, scrollTrigger: {
        trigger: imgGSAP4.current,
      }, 
      // onComplete: () => {
      //   imgGSAP4.current.style.display = 'none';
      // },
    });

    refs.forEach((ref, index) => {
      const delay = 1.2 + index * 0.2;
      gsap.fromTo(
        ref.current,
        { y: 50 },
        {
          y: 0,
          duration: 1.3,
          delay,
          ease: Power3.easeInOut,
          scrollTrigger: {
            trigger: ref.current,
          },
        }
      );
    });

    const e = imgGSAP5.current;
    gsap.fromTo(e, { scale: 0, y: -50 }, {
      scale: 1, y: -50, duration: 1, delay: 1, ease: Power3.easeInOut, scrollTrigger: {
        trigger: e,
      }
    });

    const f = imgGSAP6.current;
    gsap.fromTo(f, { scale: 0, y: -50 }, {
      scale: 1, y: -50, duration: 1, delay: 1, ease: Power3.easeInOut, scrollTrigger: {
        trigger: f,
      }
    });

    [imgGSAP7, imgGSAP8, imgGSAP9].forEach((ref, index) => {
      const delay = 1.5 + index * 0.2;
      gsap.fromTo(
        ref.current,
        { scale: 0 },
        {
          scale: 1,
          duration: 1,
          delay,
          ease: Power3.easeInOut,
          scrollTrigger: {
            trigger: ref.current,
          },
        }
      );
    });

    const g = imgGSAP10.current;
    gsap.fromTo(
      g,
      { y: 400 },
      {
        y: 0,
        duration: 1,
        delay: 1.5,
        ease: Power3.easeInOut,
        onComplete: () => {
          gsap.to(g, { rotation: 10, delay: .1 });
        },
        scrollTrigger: {
          trigger: g,
        },
      }
    );

    [imgGSAP11, imgGSAP12, imgGSAP13, imgGSAP14, imgGSAP15].forEach((ref, index) => {
      const delay = 1.6 + index * 0.1;
      gsap.fromTo(
        ref.current,
        { y: 400 },
        {
          y: 0,
          duration: 1,
          delay,
          ease: Power3.easeInOut,
          scrollTrigger: {
            trigger: ref.current,
          },
        }
      );
    });

    const h = imgGSAP16.current;
    gsap.fromTo(h, { y: 400 }, {
      y: 0, duration: 1, delay: 1.6, ease: Power3.easeInOut,
    });

    const i = imgGSAP17.current;
    gsap.fromTo(i, { x:600 }, {
      x:0, delay: .2, duration:.8, ease: Power3.easeInOut, scrollTrigger: {
        trigger: i
      }
    });

    const j = imgGSAP19.current;
    gsap.fromTo(j, { x:-600 }, {
      x:0, delay: .2, duration:.8, ease: Power3.easeInOut, scrollTrigger: {
        trigger: j
      }
    });

    const k = imgGSAP18.current;
    gsap.fromTo(k, { scale:0 }, {
      scale:1, duration:.5, ease: Power3.easeInOut, scrollTrigger: {
        trigger: k
      }
    });





    // Number interval
    const numberInterval = setInterval(() => {
      setPercentage(prevPercentage => {
        if (prevPercentage === 100) {
          clearInterval(numberInterval);
          return '';
        }
        return prevPercentage + 1;
      });
    }, 15);

    // Image interval
    const imageInterval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex === imageUrls.length - 1) {
          clearInterval(imageInterval);
        }
        return (prevIndex + 1) % imageUrls.length;
      });
    }, 100);

    // Clear intervals on unmount
    return () => {
      clearInterval(numberInterval);
      clearInterval(imageInterval);
    };
  }, [imageUrls.length]);

  return (
    <div className='overflow-hidden bg-yellow-70'>
      <div className='flex items-center justify-between px-[5%]'>
        <div
          ref={imgGSAP2}
          className='font-bold text-[20px] w-fit py-3'>loket.design</div>
        <div className='flex xl:w-[20vw] lg:w-[30vw] md:w-[40vw] justify-between font-semibold overflow-hidden md:visible invisible'>
          {refs.map((ref, index) => (
            <div key={index}
              ref={ref}
            >
              {index === 0 ? 'PRODUCTS' : index === 1 ? 'PACKAGING' : 'ABOUT US'}
            </div>
          ))}
        </div>
      </div>

      <div
        ref={imgGSAP1}
        className="text-4xl text-[19px] font-bold absolute w-full text-center ">
        {percentage} 
      </div>

      <div className="flex justify-between items-center px-[5%]">
        <div
          ref={imgGSAP5}
          className='w-[20px] h-[20px] bg-primary rounded-full '></div>
        <img
          ref={imgGSAP3}
          src={imageUrls[currentIndex]} alt={`Image ${currentIndex + 1}`} className='w-[118px] h-[118px] mt-[15%] rounded-lg z-10' />
        <div
          ref={imgGSAP6}
          className='w-[20px] h-[20px] bg-primary rounded-full '></div>
      </div>

      <div className='md:flex block px-[3%] justify-around text-[17px] -mt-[12] items-start mb-[2%]'>
        <div
          ref={imgGSAP7}
          className='xl:w-[25%] lg:w-[30%] md:w-[35%] w-full my-3'>We're a New York-based design studio—with roots in the Netherlands—specializing in designing consumer products and brands.</div>
        <div
          ref={imgGSAP8}
          className='xl:w-[25%] lg:w-[30%] md:w-[35%] w-full my-3'>From initial idea to final production, we work with you to craft products that blend both form and function with exceptional elegance. We design. We develop.We get it done nicely.</div>
        <div
          ref={imgGSAP9}
          className='xl:w-[15%] lg:w-[20%] md:w-[25%] w-full my-3'>
          <div>68 Jay Street, Suite 1006 Brooklyn, NY 11201 +1.347.546.7865</div>
          <div className='underline underline-offset-2'>studio@loketdesign.com</div>
        </div>
      </div>

      <div className='flex justify-between px-[5%] overflow-hidden md:visible invisible'>
        <img ref={imgGSAP10} src={I} alt="Not Available" className='xl:h-[350px] lg:h-[270px] md:h-[200px] ' />
        <img ref={imgGSAP11} src={C} alt="Not Available" className='xl:h-[350px] lg:h-[270px] md:h-[200px] ' />
        <img ref={imgGSAP12} src={O} alt="Not Available" className='xl:h-[350px] lg:h-[270px] md:h-[200px] ' />
        <img ref={imgGSAP13} src={N} alt="Not Available" className='xl:h-[350px] lg:h-[270px] md:h-[200px] ' />
        <img ref={imgGSAP14} src={I} alt="Not Available" className='xl:h-[350px] lg:h-[270px] md:h-[200px] ' />
        <img ref={imgGSAP15} src={C} alt="Not Available" className='xl:h-[350px] lg:h-[270px] md:h-[200px] ' />
      </div>

      <div ref={imgGSAP16} className='flex justify-center items-center -mt-[20%] absolute md:visible invisible'>
        <img src={open} alt="Not Available" className='xl:w-[600px] lg:w-[500px] w-[400px] xl:ml-[30vw] md:ml-[25vw]' />
      </div>


      {/* <div className="flex justify-center">
        <div
          ref={imgGSAP4}
          className="text-[20px] bg-primary z-0"
        ></div>
      </div> */}

      <div className='flex px-[%] xl:text-[150px] lg:text-[100px] text-[80px] font-extrabold mt-[5%] justify-center md:visible invisible'>
        <div className=' overflow-hidden'><div ref={imgGSAP17}>FUNCTI</div></div>
        <div className=' overflow-hidden'><div ref={imgGSAP18}>O</div></div>
        <div className=' overflow-hidden'><div ref={imgGSAP19}>NALISM</div></div>
        
      </div>



    </div>
  );
};

export default Loading;