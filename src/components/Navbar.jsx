import { useState, forwardRef } from "react";

const Navbar = forwardRef(({ isOpen, setIsOpen }, ref) => {
    return (
        <nav ref={ref} className="bg-gray-800 fixed top-0 left-0 right-0 shadow-md z-50 py-4">
            
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-semibold">Kevin Li</div>
                {/* Desktop menu */}
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-white transition-colors">Home</a>
                    <a href="#" className="hover:text-white transition-colors">Projects</a>
                    <a href="#" className="hover:text-white transition-colors">CV</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>

                {/* Hamburger menu (Mobile) */}
                <div className="md:hidden">
                    <button className="text-gray-300 hover:text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>) :
                        (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>)}
                    </svg>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {isOpen && (<div className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-2 shadow-md">
                <a href="#" className="block text-gray-300 hover:text-white">Home</a>
                <a href="#" className="block text-gray-300 hover:text-white">Projects</a>
                <a href="#" className="block text-gray-300 hover:text-white">CV</a>
                <a href="#" className="block text-gray-300 hover:text-white">Contact</a>
            </div>)}
            
        </nav>
    )
});

export { Navbar }