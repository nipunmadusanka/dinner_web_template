import React, { useEffect }from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
export default function Swipper() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <div>
       
    <div
    data-aos="fade-up"
    data-aos-offset="100"
    data-aos-delay="50"
    class="w-full my-10">
      <div class="">
        <div class="flex items-center justify-center w-full h-full">
          <div class="w-3/6 py-10 sm:py-24">
          <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={100}
      slidesPerView={1}
      centeredSlides= {true}
      autoplay= {{
        delay: 4500,
        disableOnInteraction: false
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <p class="font-thin text-gray-700 mt-4 text-xl text-center">
                  “Ad quod aspernatur ipsa. Numquam expedita delectus qui ad
                  explicabo voluptas eos vel reiciendis magnam rerum quaerat
                  quisquam accusantium quae saepe ipsam ullam ut ea molestiae porro.
                  Recusandae veniam maxime.”</p>
            <div class="items-center justify-center flex mt-8">
              <div class="flex items-center justify-center rounded-full bg-cover overflow-hidden h-24 w-24 img1">
              </div>
            </div>
              <div class="justify-center text-center">
              <p class="custom-font-playfair font-medium text-black mt-4 text-2xl">
              Isabella
              </p>
              <p class="text-gray-400 mt-2 text-center text-lg b-3">CEO, Founder</p>
              </div>
            <div class="flex items-center justify-center text-center">
              
            </div>
            <div class="flex items-center justify-center text-center">
              <p class="text-gray-400 mt-2 text-center text-lg b-3">.</p>
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <p class="font-thin text-gray-700 mt-4 text-xl text-center">
                  “Ad quod aspernatur ipsa. Numquam expedita delectus qui ad
                  explicabo voluptas eos vel reiciendis magnam rerum quaerat
                  quisquam accusantium quae saepe ipsam ullam ut ea molestiae porro.
                  Recusandae veniam maxime.”</p>
            <div class="items-center justify-center flex mt-8">
              <div class="flex items-center justify-center rounded-full bg-cover overflow-hidden h-24 w-24 img3">
              </div>
            </div>
              <div class="flex items-center justify-center text-center">
              <p
                class="custom-font-playfair font-medium text-black mt-4 text-2xl"
              >
                Olivia
              </p>
              </div>
            <div class="flex items-center justify-center text-center">
              <p class="text-gray-400 mt-2 text-center text-lg">CEO, Founder</p>
            </div>
            <div class="flex items-center justify-center text-center">
              <p class="text-gray-400 mt-2 text-center text-lg b-3">.</p>
            </div>
      </SwiperSlide>
      <SwiperSlide><p class="font-thin text-gray-700 mt-4 text-xl text-center">
                  “Ad quod aspernatur ipsa. Numquam expedita delectus qui ad
                  explicabo voluptas eos vel reiciendis magnam rerum quaerat
                  quisquam accusantium quae saepe ipsam ullam ut ea molestiae porro.
                  Recusandae veniam maxime.”</p>
            <div class="items-center justify-center flex mt-8">
              <div class="flex items-center justify-center rounded-full bg-cover overflow-hidden h-24 w-24 img2">
              </div>
            </div>
              <div class="flex items-center justify-center text-center">
              <p
                class="custom-font-playfair font-medium text-black mt-4 text-2xl"
              >
                Geert green
              </p>
              </div>
            <div class="flex items-center justify-center text-center">
              <p class="text-gray-400 mt-2 text-center text-lg">CEO, Founder</p>
            </div>
            <div class="flex items-center justify-center text-center">
              <p class="text-gray-400 mt-2 text-center text-lg b-3">.</p>
            </div>
            </SwiperSlide>
      <SwiperSlide>
      <p class="font-thin text-gray-700 mt-4 text-xl text-center">
                  “Ad quod aspernatur ipsa. Numquam expedita delectus qui ad
                  explicabo voluptas eos vel reiciendis magnam rerum quaerat
                  quisquam accusantium quae saepe ipsam ullam ut ea molestiae porro.
                  Recusandae veniam maxime.”</p>
            <div class="items-center justify-center flex mt-8">
              <div class="flex items-center justify-center rounded-full bg-cover overflow-hidden h-24 w-24 img4">
              </div>
            </div>
              <div class="flex items-center justify-center text-center">
              <p
                class="custom-font-playfair font-medium text-black mt-4 text-2xl"
              >
                James William
              </p>
              </div>
            <div class="flex items-center justify-center text-center">
              <p class="text-gray-400 mt-2 text-center text-lg">CEO, Founder</p>
            </div>
            <div class="flex items-center justify-center text-center">
              <p class="text-gray-400 mt-2 text-center text-lg b-3">.</p>
            </div>
      </SwiperSlide>
    </Swiper>
          
          </div>
        </div>
        
      </div>
    </div>
    </div>
  )
}
