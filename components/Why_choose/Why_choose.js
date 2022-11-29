import React, { useState , useEffect }from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Why_choose() {
    let [open,setOpen]=useState(true);
    let [open1,setOpen1]=useState(false);
    let [open2,setOpen2]=useState(false);
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <div>
        <div 
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        class="h-full flex justify-center items-center my-10">
            <div class="w-3/6">
                <div class="text-center">
                        <h3 class="font-thin custom-font-playfair my-6 text-4xl">Why Choose Us</h3>
                        <p className='font-thin text-[16px] text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                </div>
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:px-32 lg:py-10 my-10">
                  <div 
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  class="pb-9">
                            <div class="">
                                <div class="m-0 justify-center w-auto lg:h-96 overflow-hidden" >
                                <img src="img/img_2.jpg.webp" alt="" />
                                </div>
                            </div>
                    </div>
                    <div 
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    class="lg:px-16 px-3"> 
                            <div class="grid grid-cols-1">
                                <div class="lg:col-span-2 lg:text-left lg:pl-9">
                                    <div onClick={()=>setOpen1(false)}>
                                    <div onClick={()=>setOpen2(false)}>
                                    <p onClick={()=>setOpen(!open)}  class="text-2xl text-orange-300 cursor-pointer">Quality Cuisine</p>
                                    </div>
                                    </div>
                                    <hr className='my-4'></hr>
                                    <p class={`font-thin lg:leading-[2rem] ${open ? '':'hidden'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum, est eum eligendi vero aut ad necessitatibus nulla sit labore doloremque magnam! Ex molestiae, dolor tempora, ad fuga minima enim mollitia consequuntur, necessitatibus praesentium eligendi officia recusandae culpa tempore eaque quasi ullam magnam modi quidem in amet. Quod debitis error placeat, tempore quasi aliquid eaque vel facilis culpa voluptate.</p>
                                    <div class="pt-4 pb-2">
                                    <div onClick={()=>setOpen(false)}>
                                    <div onClick={()=>setOpen2(false)}>
                                    <p onClick={()=>setOpen1(!open1)}  class="text-2xl text-orange-300 cursor-pointer">Fresh Food</p>
                                    </div>
                                    </div>
                                    <hr className='my-4'></hr>
                                    <p class={`font-thin lg:leading-[2rem] ${open1 ? '':'hidden'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum, est eum eligendi vero aut ad necessitatibus nulla sit labore doloremque magnam! Ex molestiae, dolor tempora, ad fuga minima enim mollitia consequuntur, necessitatibus praesentium eligendi officia recusandae culpa tempore eaque quasi ullam magnam modi quidem in amet. Quod debitis error placeat, tempore quasi aliquid eaque vel facilis culpa voluptate.</p>
                                    </div>
                                    <div class="pt-4 pb-2">
                                    <div onClick={()=>setOpen1(false)}>
                                    <div onClick={()=>setOpen(false)}>
                                    <p onClick={()=>setOpen2(!open2)}  class="text-2xl text-orange-300 cursor-pointer">Friendly Staff</p>
                                    </div>
                                    </div>
                                    <hr className='my-4'></hr>
                                    <p class={`font-thin lg:leading-[2rem] ${open2 ? '':'hidden'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum, est eum eligendi vero aut ad necessitatibus nulla sit labore doloremque magnam! Ex molestiae, dolor tempora, ad fuga minima enim mollitia consequuntur, necessitatibus praesentium eligendi officia recusandae culpa tempore eaque quasi ullam magnam modi quidem in amet. Quod debitis error placeat, tempore quasi aliquid eaque vel facilis culpa voluptate.</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
    </div>
  )
}
