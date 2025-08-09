// src/pages/Landing.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Landing() {
  const videoRef = useRef();
  const [videoReady, setVideoReady] = useState(false);

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

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        preload="auto"
        muted
        playsInline
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
          <motion.nav
            className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-sm"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="font-bold text-lg">Scafe's Cafe</div>
            <div className="space-x-4 hidden sm:flex">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/menu" className="hover:underline">
                Menu
              </Link>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </div>
          </motion.nav>

          {/* Headline */}
          <motion.h1
            className="text-3xl sm:text-5xl font-bold mb-2"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Welcome to Scafe's Cafe.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-2xl mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Coffee, Ice Cream, and Waffles.
          </motion.p>

          {/* Location */}
          <motion.p
            className="text-sm sm:text-base mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            Find us at [Your Location Here]
          </motion.p>

          {/* See Menu Button */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <Link
              to="/menu"
              className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
            >
              See Menu
            </Link>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
