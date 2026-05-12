
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function HeroSlider() {
  return (
    <div className='max-w-7xl mx-auto mt-10'>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="relative w-full h-[500px] md:h-[200px]">
            <Image
              src="https://images.unsplash.com/photo-1721225643304-7572c3c8fda2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bW1lciUyMGhlcm8lMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
               alt="coding"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px] md:h-[200px]">
            <Image
              src="https://images.unsplash.com/photo-1629734805028-73ada19afb3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VtbWVyJTIwaGVybyUyMGltYWdlfGVufDB8fDB8fHww"
              alt="coding"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>

         <SwiperSlide>
          <div className="relative w-full h-[500px] md:h-[200px]">
            <Image
              src="https://images.unsplash.com/photo-1587837768600-f0db9d8923da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bW1lciUyMGhlcm8lMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="coding"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
}
