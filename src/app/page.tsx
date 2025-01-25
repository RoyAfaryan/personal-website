"use client";

import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact"
import { useState } from "react";
import { Fade } from 'react-awesome-reveal'


export default function App() {
  const [section, setSection] = useState(0);

  return (
    <main className="flex min-h-screen flex-col bg-black md:mx-[18rem] p-5">
      
      
      <div>
        <Navbar setSection={setSection}/>
      </div>
      
      <Fade>
        {section === 0 && <Home/>}
        {section === 1 && <About/>}
        {section === 2 && <Contact/>}
      </Fade>
      
    </main>
  );
}
