import { useState, useEffect, forwardRef } from "react";

const navLinks = [
    { label: "Home", href: "#intro", id: "intro" },
    { label: "Publications", href: "#pubs", id: "pubs" },
    { label: "Others", href: "#others", id: "others" }
  ];

const Navbar = forwardRef(({ isOpen, setIsOpen }, ref) => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY + window.innerHeight / 3;
      
          for (let i = navLinks.length - 1; i >= 0; i--) {
            const section = document.getElementById(navLinks[i].id);
            if (section && section.offsetTop <= scrollY) {
              setActiveSection(navLinks[i].id);
              break;
            }
          }
        };
      
        window.addEventListener("scroll", handleScroll);
        handleScroll();
      
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <nav ref={ref} className="bg-gray-800 fixed top-0 left-0 right-0 shadow-md z-50 py-4">
            
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-semibold">Kevin Li</div>
                {/* Desktop menu */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`hover:text-white transition-colors ${
                                activeSection === link.id ? "text-blue-400 font-semibold" : "text-gray-300"
                              }`}
                        >
                        {link.label}
                        </a>
                    ))}
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
            {isOpen && (
                <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-2 shadow-md">
                    {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className={`block hover:text-white transition-colors ${
                            activeSection === link.id ? "text-blue-400 font-semibold" : "text-gray-300"
                          }`}
                        onClick={() => setIsOpen(false)} // closes menu on click
                    >
                        {link.label}
                    </a>
                    ))}
                </div>
            )}
            
        </nav>
    )
});

export { Navbar }