import { useEffect, useRef, useState } from "react";
import './App.css'
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Intro } from "./components/MainContent/Intro.jsx";
import { Pubs } from "./components/MainContent/Publication.jsx";
import { Oth } from "./components/MainContent/Others.jsx";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    const introSection = document.getElementById("intro");
    if (introSection) {
      introSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  console.log(navRef)

  return (
    <div className="min-h-screen bg-gray-800 text-gray-100">
      <Navbar ref={navRef} isOpen={isOpen} setIsOpen={setIsOpen}/>

      <main className="" style={{ paddingTop: `${navHeight}px` }}>
        <div className='flex flex-col md:flex-row w-full min-h-screen bg-gray-800'>
          <About/>

          <section className="w-full md:w-5/6 bg-gray-900 p-4 px-24">
            <Intro></Intro>
            <Pubs></Pubs>
            <Oth></Oth>
            <footer className="w-full bg-gray-900 text-gray-600 text-center py-4 mt-8">
              © 2025 Kevin Li
            </footer>
          </section>
        </div>
      </main>
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg transition"
        aria-label="Scroll to top"
        title="Go to Introduction"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </div>
    
  );
}

export default App
