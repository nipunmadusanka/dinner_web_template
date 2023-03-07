import React, { useEffect }from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {
   solid
 } from '@fortawesome/fontawesome-svg-core/import.macro'
 import '@fortawesome/fontawesome-svg-core/styles.css'
import Section from './Section';
export default function One_comp() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <div>
<div class="flex justify-center items-center sm:h-screen bg-white h-full my-10">
    <div class="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-1 gap-y-8">
        <Section icon="coffee" title="Quality Cuisine" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe"/>
        <Section icon="coffee" title="Fresh Food" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe"/>
        <Section icon="coffee" title="Friendly Staff" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe"/>
        <Section icon="coffee" title="Easy Reservation" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe"/>
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
                        <p className='leading-[28px] tracking-wide text-slate-600 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                </div>
            </div>
          </div>
</div>
  )
}
