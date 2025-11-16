import React from 'react';
import banner2 from '../../assets/banner-images/banner-4.png'
import banner3 from '../../assets/banner-images/banner-5.png'

const Banner = () => {
    return (
        <div className='lg:w-3/4 sm:w-full mx-auto mt-5'>
            <div className="carousel">
                
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={banner2}
                        className="w-full h-3/4" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={banner3}
                        className="w-full h-3/4" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;