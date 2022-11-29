import React, { useEffect }from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Food_type() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10">
                <div class="h-full w-full flex">
                    <div 
        data-aos="fade"
        data-aos-offset="200"
        data-aos-delay="50"
        class="bg-white bg-cover im4 flex justify-center items-center w-1/2 h-full " >
                    </div>
                    <div class="p-8 w-1/2 flex justify-center items-center bg-black">
                        <div>
                            <h3 class="font-medium custom-font-playfair text-white mb-5 text-start text-2xl">Grilled Egg With Garlic</h3>
                            <p class="text-white/50 text-start text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                            <p class="font-thin text-start text-3xl mb-4 text-orange-400">$5.00</p>
                        </div>
                    </div>
                </div>
                <div class="h-full w-full flex">
                    <div 
                    data-aos="fade"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    class="h-full im3 bg-cover flex justify-center items-center w-1/2 order-last md:order-first sm:order-first" >
                    </div>
                    <div class="p-8 w-1/2 flex justify-center items-center bg-black">
                        <div>
                            <h3 class="font-medium custom-font-playfair text-white mb-5 text-start text-2xl">Organic Tomato Salad</h3>
                            <p class="text-white/50 text-start text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                            <p class="font-thin text-start text-3xl mb-4 text-orange-400">$12.00</p>
                        </div>
                    </div>
                </div>
                <div class="h-full w-full flex">
                    <div 
                    data-aos="fade"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    class="h-full im2 bg-cover flex justify-center items-center w-1/2" >
                    </div>
                    <div class="p-8 w-1/2 flex justify-center items-center bg-black">
                        <div>
                            <h3 class="font-medium custom-font-playfair text-white mb-5 text-start text-2xl">Flatbread</h3>
                            <p class="text-white/50 text-start text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                            <p class="font-thin text-start text-3xl mb-4 text-orange-400">$13.00</p>
                        </div>
                    </div>
                </div>
                <div class="h-full  w-full flex">
                <div class="p-8 w-1/2 flex justify-center items-center bg-black">
                        <div>
                            <h3 class="font-medium custom-font-playfair text-white mb-5 text-start text-2xl">Rack Of Lamb</h3>
                            <p class="text-white/50 text-start text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                            <p class="font-thin text-start text-3xl mb-4 text-orange-400">$9.00</p>
                        </div>
                    </div>
                    <div 
                    data-aos="fade"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    class="h-full im1 bg-cover flex justify-center items-center w-1/2 " >
                     </div>
                    
                </div>
                <div class="h-full  w-full flex">
                <div class="p-8 w-1/2 flex justify-center items-center bg-black">
                        <div>
                            <h3 class="font-medium custom-font-playfair text-white mb-5 text-start text-2xl">Eggplant Parmigiana</h3>
                            <p class="text-white/50 text-start text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                            <p class="font-thin text-start text-3xl mb-4 text-orange-400">$7.00</p>
                        </div>
                    </div>
                    <div 
                    data-aos="fade"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    class="h-full im5 bg-cover flex justify-center items-center w-1/2 order-first md:order-last lg:order-last" >
                    </div>
                    
                </div>
                <div class="h-full w-full flex">
                <div class="p-8 w-1/2 flex justify-center items-center bg-black">
                        <div>
                            <h3 class="font-medium custom-font-playfair text-white mb-5 text-start text-2xl">Spicy Meatballs</h3>
                            <p class="text-white/50 text-start text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                            <p class="font-thin text-start text-3xl mb-4 text-orange-400">$8.00</p>
                        </div>
                    </div>
                    <div 
                    data-aos="fade"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    class="h-full im6 bg-cover flex justify-center items-center w-1/2" >
                    </div>
                    
                </div>
            </div>
    </div>
  )
}
