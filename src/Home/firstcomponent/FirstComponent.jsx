// import React, { Component } from 'react';
import iphone from '../../assets/1-iPhone-14-Series-6716.jpg'
import mac from '../../assets/2-Macbook-Air-M2-5534.jpg'
import pixel from '../../assets/4-Google-Pixel-7a-7981.jpg'
import gp from '../../assets/Campaign-Web-Banner-OP-7109.png'
import fold5 from '../../assets/Fold5-1916.jpg'
import watch from '../../assets/HUAWEI-WATCH-4-Pro-4702.jpg'
import airpod from '../../assets/Anker-Soundcore-Liberty-4-6816.jpg'
import { useEffect, useState } from 'react'

const FirstComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextSlide = currentSlide === 5 ? 1 : currentSlide + 1;
            setCurrentSlide(nextSlide);
        }, 4000);

        return () => clearInterval(interval); 
    }, [currentSlide]);
    const handleAnchorClick = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-6'>
                <div className="carousel w-full md:mx-7 ">
                    <div id="slide1"  className={`carousel-item relative w-full ${currentSlide !== 1 ? 'hidden' : ''}`}>
                        <img src={gp} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" onClick={() => handleAnchorClick(4)} className="btn btn-circle">❮</a>
                            <a href="#slide2" onClick={() => handleAnchorClick(2)} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2"  className={`carousel-item relative w-full ${currentSlide !== 2 ? 'hidden' : ''}`}>
                        <img src={iphone} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" onClick={() => handleAnchorClick(1)} className="btn btn-circle">❮</a>
                            <a href="#slide3" onClick={() => handleAnchorClick(3)} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3"  className={`carousel-item relative w-full ${currentSlide !== 3 ? 'hidden' : ''}`}>
                        <img src={mac} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" onClick={() => handleAnchorClick(2)} className="btn btn-circle">❮</a>
                            <a href="#slide4" onClick={() => handleAnchorClick(4)} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4"  className={`carousel-item relative w-full ${currentSlide !== 4 ? 'hidden' : ''}`}>
                        <img src={pixel} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" onClick={() => handleAnchorClick(3)} className="btn btn-circle">❮</a>
                            <a href="#slide5" onClick={() => handleAnchorClick(5)} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5"  className={`carousel-item relative w-full ${currentSlide !== 5 ? 'hidden' : ''}`}>
                        <img src={fold5} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" onClick={() => handleAnchorClick(4)} className="btn btn-circle">❮</a>
                            <a href="#slide1" onClick={() => handleAnchorClick(1)} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>


                <div className=' lg:space-y-11  sm:space-y-6 mx-auto w-3/5'>
                    {/* <div> */}
                        <img src={watch} alt="" />
                    {/* </div> */}
                    <div>
                        <img src={airpod} alt="" />
                    </div>
                </div>
            </div>
    );
};

export default FirstComponent;