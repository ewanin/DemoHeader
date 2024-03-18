import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const Page1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <> 
        <nav className={`fixed w-full z-10 transition ${visible ? 'top-0' : '-top-full'} bg-gray-800 duration-300 ease-in-out`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-white font-bold">Logo</span>
                    </div> 
                    <div className="hidden md:block">
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Option 1</a>
                            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Option 2</a>
                            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Option 3</a>
                            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Option 4</a>
                            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Option 5</a>
                            <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Option 6</a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div ref={ref} className="md:hidden bg-gray-800">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Option 1</a>
                            <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Option 2</a>
                            <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Option 3</a>
                            <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Option 4</a>
                            <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Option 5</a>
                            <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Option 6</a>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
        <div className="w-full h-[500px] bg-yellow-300"></div>
        <div className="w-full h-[500px] bg-yellow-300"></div>
        <div className="w-full h-[500px] bg-yellow-300"></div>

        </>
    );
};

export default Page1;
