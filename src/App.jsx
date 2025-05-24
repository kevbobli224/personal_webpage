import { useEffect, useRef, useState } from "react";
import './App.css'
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Intro } from "./components/MainContent/Intro.jsx";
import { Pubs } from "./components/MainContent/Publication.jsx";
import { Oth } from "./components/MainContent/Others.jsx";
function App() {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  console.log(navRef)

  return (
    <div className="min-h-screen bg-gray-800 text-gray-100">
      <Navbar ref={navRef}/>

      <main className="" style={{ paddingTop: `${navHeight}px` }}>
        <div className='flex flex-col md:flex-row w-full min-h-screen bg-gray-800'>
          <About/>

          <section className="w-full md:w-5/6 bg-gray-900 p-4 px-24">
            <Intro></Intro>
            <Pubs></Pubs>
            <Oth></Oth>
            <p>yesa</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App
