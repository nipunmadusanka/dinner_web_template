import React, { useEffect }from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function FSection({title:title, desc:desc, price:price, img:img}) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div class="h-full w-full flex">
                    <div 
        data-aos="fade"
        data-aos-offset="200"
        data-aos-delay="50"
        class={`${img} h-full bg-cover flex justify-center items-center w-1/2`}>
                    </div>
                    <div class="p-8 w-1/2 flex justify-center items-center bg-black">
                        <div>
                            <h3 class="font-medium custom-font-playfair text-white mb-5 text-start text-2xl">{title}</h3>
                            <p class="text-white/50 text-start text-sm mb-4">{desc}</p>
                            <p class="font-thin text-start text-3xl mb-4 text-orange-400">{price}</p>
                        </div>
                    </div>
                </div>
  )
}
