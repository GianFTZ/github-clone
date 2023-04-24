"use client"
import Card from "@/components/main/card";
import Inputs from "@/components/main/inputs";
import NavBar from "@/components/navbar";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      duration: 0.8
    }
  }
};

export default function Home() {
  const myRef = useRef()
  const [startProductivity, setProductivity] = useState(false)
  const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }

  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const obeserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if(entry.isIntersecting == false) {
        setProductivity(true)
      }
      if(entry.isIntersecting == true) {
        setProductivity(false)
      }
    })

    // @ts-ignore
    obeserver.observe(myRef.current)
  }, [])
  

  return (
    <div className="relative overflow-x-hidden w-screen h-screen flex justify-center p-2">
      <img src="/hero-bg.jpg" alt="" className="absolute top-0 events-none z-auto" style={{
        maxWidth: (width * 2.3) + 1670,
        right: -1050,
        width: 4377
      }}/>
      <img src="/hero-drone.jpg" alt="" className="absolute top-24 right-9" height={200} width={300}/>
      <NavBar />
      <div className="relative pt-3 md:pt-8 lg:pt-12 flex flex-col container">
              {/* margin */}
        <div className="mt-20 pt-12"></div>
              {/* margin */}
        <div className="mt-20 pt-12"></div>
        <Card />
              {/* margin */}
        <div className="mt-10 pt-12"></div>
        <h1 ref={myRef} className="ml-4 text-white font-bold text-7xl"
        >Let's build from here</h1>
        <h1 
        className="ml-4 mt-4 text-white/50 text-3xl">Harnessed for productivity. Designed for collaboration. Celebrated for built-in security. Welcome to the platform developers love.</h1>
              {/* margin */}
        <div className="mt-6 pt-6"></div>
        <Inputs />
                      {/* margin */}
        <div className="mt-20 pt-12"></div>
        <div className="mt-20 pt-12"></div>
        <div className="mt-20 pt-12"></div>
        
        <motion.h1 ref={myRef} className="ml-4 text-white font-bold text-4xl"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.8 }}
        variants={cardVariants}
        >Accelerate high-quality software development. Our platform drives innovation with tools that boost developer velocity. </motion.h1>
      </div>
      
    </div>
  )
}
