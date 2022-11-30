import React, { useEffect }from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Event_news() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
<div>
    <div class="my-10">
        <div class="h-full flex justify-center items-center py-20 bg-[#f8f9fa]">
            <div class="w-3/6">
                <div 
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                class="text-center">
                        <h3 class="font-thin custom-font-playfair my-6 text-4xl">Events & News</h3>
                        <p className='font-thin text-[16px] text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                </div>
            </div>
        </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 bg-[#f8f9fa] px-10 lg:px-32 py-10 lg:py-10">
                    <div class=""> 
                            <div 
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            class="grid grid-cols-1 lg:grid-cols-3">
                                <div class="lg:text-right">
                                    <div class="lg:w-52 lg:h-40 overflow-hidden" >
                                      <img src="img/news_1.jpg.webp" alt="" />
                                    </div>
                                </div>
                                <div class="lg:col-span-2 lg:text-left lg:pl-9 px-3 lg:px-0">
                                    <a href="" class="text-xl ">Birthday Party Held in Diner Restaurant</a>
                                    <br></br><span class="text-slate-600 font-thin"> APRIL 22, 2018</span>
                                    <p class="font-thin text-[16px] text-slate-600 pt-6 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus</p>
                                    <button class="font-thin border-solid border-2 rounded px-6 my-2 p-1 border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-white">Read More</button>
                                </div>
                            </div>
                            <div 
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            class="grid grid-cols-1 lg:grid-cols-3 pt-9">
                                <div class="lg:text-right">
                                    <div class="lg:w-52 lg:h-40 overflow-hidden" >
                                      <img src="img/news_2.jpg.webp" alt="" />
                                    </div>
                                </div>
                                <div class="lg:col-span-2 lg:text-left lg:pl-9 px-3 lg:px-0">
                                    <a href="" class="text-xl ">Drinks Overload</a>
                                    <br></br><span class="text-slate-600 font-thin"> APRIL 22, 2018</span>
                                    <p class="font-thin text-[16px] text-slate-600 pt-6 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus</p>
                                    <button class="font-thin border-solid border-2 rounded px-6 my-2 p-1 border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-white">Read More</button>
                                </div>
                            </div>
                            <div 
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            class="grid grid-cols-1 lg:grid-cols-3 pt-9">
                                <div class="lg:text-right">
                                    <div class="lg:w-52 lg:h-40 overflow-hidden" >
                                      <img src="img/im4.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="lg:col-span-2 lg:text-left lg:pl-9 px-3 lg:px-0">
                                    <a href="" class="text-xl ">New Recipe: Steak Steak Steak.</a>
                                    <br></br><span class="text-slate-600 font-thin"> APRIL 22, 2018</span>
                                    <p class="font-thin text-[16px] text-slate-600 pt-6 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus</p>
                                    <button class="font-thin border-solid border-2 rounded px-6 my-2 p-1 border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-white">Read More</button>
                                </div>
                            </div>
                    </div>
                    <div 
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        class="">
                            <div class="">
                                <div class="m-0 justify-center w-auto lg:h-96 overflow-hidden" >
                                <img src="img/news_1_large.jpg.webp" alt="" />
                                </div>
                            </div>
                            <div class="lg:text-left px-3 lg:px-0 lg:pt-3">
                                    <a href="" class="text-xl ">Food that are best for your overall health</a>
                                    <br></br><span class="text-slate-600 font-thin"> APRIL 22, 2018</span>
                                    <p class="font-thin text-[16px] text-slate-600 pt-6 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus</p>
                                    <button class="font-thin border-solid border-2 rounded px-6 my-2 p-1 border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-white">Read More</button>
                                </div>
                        </div>
            </div>
    </div>
</div>
  )
}
