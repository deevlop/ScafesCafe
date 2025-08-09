// src/pages/Landing.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";


export default function Landing({ setPage }) {
  const videoRef = useRef();
  const [videoReady, setVideoReady] = useState(false);

  // const locationPRef = useRef(null);
  // const [optionsGridHeight, setOptionsGridHeight] = useState(0); // need to find the bottom of the location paragraph to start the options grid



  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Always restart from beginning when entering
      video.currentTime = 0;
      video.pause();

      const handleCanPlay = () => {
        setVideoReady(true);
        video.play().catch(() => {});
      };

      video.addEventListener("canplaythrough", handleCanPlay);

      return () => {
        video.removeEventListener("canplaythrough", handleCanPlay);
      };
    }
  }, []);

  // useEffect(() => {
  //   const updateHeight = () => {
  //     if (locationPRef.current) {
  //       const locationBottom = locationPRef.current.getBoundingClientRect().bottom;
  //       const viewportHeight = window.innerHeight;
  //       setOptionsGridHeight(viewportHeight - locationBottom);
  //     }
  //   };

  //   // Watch for viewport resizes
  //   window.addEventListener("resize", updateHeight);

  //   // Watch for the above element's size changes
  //   const resizeObserver = new ResizeObserver(updateHeight);
  //   if (locationPRef.current) resizeObserver.observe(locationPRef.current);

  //   // Initial calculation
  //   updateHeight();

  //   console.log("Options grid height set to:", optionsGridHeight);
  //   console.log("Location paragraph ref:", locationPRef.current);
  //   return () => {
  //     window.removeEventListener("resize", updateHeight);
  //     resizeObserver.disconnect();
  //   };
  // }, [locationPRef.current, optionsGridHeight]);


  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        preload="auto"
        muted
        playsInline
        loop
      >
        <source src="/landing-bg-sample.mp4" type="video/mp4" />
      </video>

      {/* Overlay dark layer for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      {videoReady && (
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Navbar */}
          {/* <motion.nav
            className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-sm"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="font-bold text-lg">Scafe's Cafe</div>
            <div className="space-x-4 hidden sm:flex">
            </div>
          </motion.nav> */}
          

          <div className="flex flex-col items-center justify-center w-full h-1/2">
            {/* Headline */}
            <motion.h1
              className="text-3xl sm:text-5xl font-bold mb-2"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Scafe's Cafe.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg sm:text-2xl mb-2"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Coffee, Ice Cream, and Waffles.
            </motion.p>

          </div>



          <div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className={`w-full flex flex-col md:grid  md:grid-cols-2 md:gap-2 h-1/2 justify-center items-center py-4 px-2`}
          >

            {/* Map */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                 className="w-full h-full hover:underline flex flex-col items-center justify-center opacity-50 hover:opacity-100"
              >
                <iframe
                  className="rounded-md m-2"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-123.123456789012!3d49.282729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867123456789ab%3A0x1234567890abcdef!2s122%20Cumberland%20Ave%20S%2C%20S7N%201L8!5e0!3m2!1sen!2sca!4v1611234567890!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  ></iframe>

            </motion.div> 

              {/* See Menu Button */}
              <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                  className="hover:underline cursor-pointer flex flex-col items-center justify-center h-full w-full bg-dark rounded-md opacity-50 hover:opacity-100"
                  onClick={() => {
                          setPage('menu')
                      }}

              >
                <div className="bg-black flex flex-col items-center justify-center m-2 w-full h-full rounded-md">
                  <h2 className="text-2xl font-bold mb-2">See Our Menu</h2>
                  <div className="h-1 bg-white w-[12px] mb-2" />
                  {/* <insert video of item being made, rounded corners, loops through continiously */}
                  <p className="text-sm text-gray-400">Click to explore our delicious offerings</p>
                </div>

              </motion.div>

          </div>

        </motion.div>

      )}
    </div>
  );
}
