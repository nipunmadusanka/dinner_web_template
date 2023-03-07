import React, { useEffect }from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {
   solid
 } from '@fortawesome/fontawesome-svg-core/import.macro'
 import '@fortawesome/fontawesome-svg-core/styles.css'
export default function Section({icon:icon, title:title, desc:desc}) {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        class="flex-row w-64 px-3 justify-center items-center duration-500 relative transform transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0" }'>
                <div class="justify-center items-center flex">
                    <div class="h-24 w-24 flex rounded-full bg-[#fdb44b] justify-center items-center">
                        <div class="">
                        <FontAwesomeIcon icon={solid('coffee')} size="3x"/>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <h6 class="custom-font-playfair font-medium text-xl text-black mt-4 text-center">{title}</h6>
                    <p class="leading-[28px] tracking-wide text-slate-600 mt-4 font-thin">{desc}</p>
                </div>
        </div>
  )
}
