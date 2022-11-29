import React, { useEffect }from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {
   solid
 } from '@fortawesome/fontawesome-svg-core/import.macro'
 import '@fortawesome/fontawesome-svg-core/styles.css'
export default function One_comp() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <div>
<div class="flex justify-center items-center sm:h-screen bg-white h-full my-10">
    <div class="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-1 gap-y-8">
        <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        class="flex-row w-64 px-3 justify-center items-center duration-500 relative transform transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0" }'>
                <div class="justify-center items-center flex">
                    <div class="h-24 w-24 flex rounded-full bg-orange-400 justify-center items-center">
                        <div class="">
                        <FontAwesomeIcon icon={solid('coffee')} size="3x"/>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <h6 class="custom-font-playfair font-medium text-xl text-black mt-4 text-center">Quality Cuisine</h6>
                    <p class=" text-slate-400 mt-4 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                </div>
        </div>
        <div 
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="70"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        class="flex-row w-64 px-3 justify-center items-center duration-500 relative transform transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0" }'>
            <div class="justify-center items-center flex">
                <div class="h-24 w-24 flex rounded-full bg-orange-400 justify-center items-center">
                    <div class="">
                    <FontAwesomeIcon icon={solid('gift')} size="3x"/>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <h3 class="custom-font-playfair font-medium text-black mt-4 text-xl text-center">Fresh Food</h3>
                <p class=" text-slate-400 mt-4 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
            </div>
        </div>
        <div data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="90"
        data-aos-duration="1400"
        data-aos-easing="ease-in-out"
        class="flex-row w-64 px-3 justify-center items-center duration-500 relative transform transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0" }'>
            <div class="justify-center items-center flex">
                <div class="h-24 w-24 flex rounded-full bg-orange-400 justify-center items-center">
                    <div class="">
                    <FontAwesomeIcon icon={solid('mug-hot')} size="3x"/>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <h3 class="custom-font-playfair font-medium text-black mt-4 text-xl text-center">Friendly Staff</h3>
                <p class=" text-slate-400 mt-4 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                </div>
        </div>
        <div data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="110"
        data-aos-duration="1600"
        data-aos-easing="ease-in-out"
        class="flex-row w-64 px-3 justify-center items-center duration-500 relative transform transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0" }'>
            <div class="justify-center items-center flex">
                <div class="h-24 w-24 flex rounded-full bg-orange-400 justify-center items-center">
                    <div class="">
                    <FontAwesomeIcon icon={solid('star')} size="3x"/>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <h3 class="custom-font-playfair font-medium text-black mt-4 text-xl text-center">Easy Reservation</h3>
                <p class="font-thin text-slate-400 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                </div>
        </div>
    </div>
</div>
<div data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="60"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        class="h-full flex justify-center items-center my-10 pb-10">
            <div class="w-3/6">
                <div class="text-center">
                        <h3 class="font-thin custom-font-playfair my-6 text-4xl">Our Specialties</h3>
                        <p className='text-slate-500 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                </div>
            </div>
          </div>
</div>
  )
}
