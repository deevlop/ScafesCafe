import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Title from './Title';
import Paragraph from './Paragraph';

export default function MenuItem({ name, price, ingredients, description, videoSrc }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleVideoLoad = () => {
        setIsLoading(false);
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <motion.div 
            className="w-full h-[376px] mx-2 mt-2 p-2 rounded-md flex flex-col items-center justify-start min-h-[246px] relative overflow-hidden border-coffee-medium border-[0.15rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
            transition={{ duration: 0.5 }}
        >
            {isLoading && <div className="w-full h-[400px] inset-0 flex items-center justify-center bg-gray-800 text-white">Loading...</div>}
            <video 
                className="absolute inset-0 w-full h-full object-cover" 
                src={videoSrc} 
                muted 
                loop
                ref={videoRef}
                autoPlay={isPlaying}
                onLoadedData={handleVideoLoad}
            />
            <div className={`flex flex-col items-center justify-start z-10 w-full h-auto rounded-md text-center bg-black ${isPlaying ? 'bg-opacity-20' : 'bg-opacity-60'}`}>
                <div className="text-lg sm:text-xl md:text-2xl font-medium text-coffee-medium mt-2">{name}</div>
                <Paragraph text={`Price: $${Number(price).toFixed(2)}`} />
                <Paragraph text={description} />
                <button onClick={togglePlay} className={`py-2 bg-black bg-opacity-40 text-light hover:bg-opacity-60 mb-2 ${isPlaying ? 'opacity-50' : 'opacity-100'} mt-2`}>{isPlaying ? 'Pause' : 'Play'}</button>
            </div>
        </motion.div>
    );
}
