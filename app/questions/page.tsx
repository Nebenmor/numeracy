'use client';
import Image from 'next/image'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { images } from '@/lib/images'

const Questions = () => {
  return (
    <section>
      
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper"
    >
       
          <SwiperSlide className='swiper-slide'> Slide 1 </SwiperSlide>
          <SwiperSlide> Slide 2 </SwiperSlide>
          <SwiperSlide> Slide 3 </SwiperSlide>
          <SwiperSlide> Slide 4 </SwiperSlide>
          <SwiperSlide> Slide 5 </SwiperSlide>
          <SwiperSlide> Slide 6 </SwiperSlide>
          <SwiperSlide> Slide 7 </SwiperSlide>
      </Swiper>
      
    </section>
  )
}

export default Questions



// 'use client';
// import Image from 'next/image'
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper/modules';
// import { images } from '@/lib/images'

// const Questions = () => {
//   return (
//     <section className="h-full">
//       <Swiper
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="w-full h-full"
//     >
//         <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center"> Slide 1 </SwiperSlide>
//         <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center"> Slide 2 </SwiperSlide>
//         <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center"> Slide 3 </SwiperSlide>
//         <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center"> Slide 4 </SwiperSlide>
//         <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center"> Slide 5 </SwiperSlide>
//         <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center"> Slide 6 </SwiperSlide>
//         <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center"> Slide 7 </SwiperSlide>
//       </Swiper>
//     </section>
//   )
// }

// export default Questions