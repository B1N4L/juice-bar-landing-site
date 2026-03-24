import gsap from 'gsap'
import { useState } from 'react'
import {ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main className="">
      <Navbar/>
      <Hero/>
    {/* temporary div for leaf animation testing with scroll*/}
        <div className="h-dvh bg-black"></div>
    </main>
  )
}

export default App
