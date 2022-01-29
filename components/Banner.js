import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (<>
        <div className='relative'>
            <div 
            className='absolute w-full h-32 
            bg-gradient-to-t from-gray-200  to-transparent bottom-0 z-30' />
            <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={4000}
            >
              <div>
                  <img loading="lazy" src="/banner1.jpg" alt=''/>
              </div>
              <div>
                  <img loading="lazy" src="/banner2.jpg" alt=''/>
              </div>
              <div>
                  <img loading="lazy" src="/banner3.jpg" alt=''/>
              </div>
              <div>
                  <img loading="lazy" src="/banner4.jpg" alt=''/>
              </div>
              <div>
                  <img loading="lazy" src="/banner5.jpg" alt=''/>
              </div>
            </Carousel>
        </div>
        </>)};
      
      export default Banner;
