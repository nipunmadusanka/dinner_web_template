import React, { useEffect }from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function View_menu() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
    <div 
    data-aos="fade"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 h-full my-10">
      <div class="flex-row">
        <div class="w-full h-60">
          <div class="im4 h-full bg-cover flex justify-center items-center overflow-hidden bg-black">
              </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 bg-black">
          <div class="w-full h-full">
            <div class="flex justify-center items-center">
              <div className='lg:p-14 p-10'>
                <h6
                  class="custom-font-playfair font-medium text-white mt-4 text-start text-3xl">
                  Feature Menu
                </h6>
                <p class="tracking-wide lg:leading-[2rem] font-thin text-white/60 mt-4 text-start text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eveniet eos quasi, necessitatibus dicta. Temporibus odit sed
                  quisquam commodi, in aut, repellendus porro saepe minus, enim
                  obcaecati fugiat optio eaque odio?
                </p>
                <div class="mt-5">
                    <button class="text-orange-400 uppercase border-2 border-orange-300 px-5 py-2 hover:bg-orange-300 hover:text-white transition-all duration-200 delay-75">View All Menu</button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full h-60 lg:h-full">
            <div class="img_2 h-full bg-cover"></div>
          </div>
      </div>
    </div>
      <div class="flex-row">
      <div class="grid grid-cols-1 lg:grid-cols-2 bg-black">
          <div class="w-full h-full">
          <div class="flex justify-center items-center">
              <div className='lg:p-14 p-10'>
                <h6
                  class="custom-font-playfair font-medium text-white mt-4 text-start text-3xl">
                  Master Chef
                </h6>
                <p class="tracking-wide lg:leading-[2rem] font-thin text-white/60 mt-4 text-start text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eveniet eos quasi, necessitatibus dicta. Temporibus odit sed
                  quisquam commodi, in aut, repellendus porro saepe minus, enim
                  obcaecati fugiat optio eaque odio?
                </p>
                <div class="mt-5">
                    <button class="text-orange-400 uppercase border-2 border-orange-300 px-5 py-2 hover:bg-orange-300 hover:text-white transition-all duration-200 delay-75">MEET OUR CHEF</button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full h-60 lg:h-full">
            <div class="chef_1 h-full bg-cover"></div>
          </div>
      </div>
        <div class="w-full h-60">
          <div
            class="chef_2 h-full bg-cover flex justify-center items-center overflow-hidden bg-black">
              </div>
        </div>
      </div>
    </div>
    </div>
  )
}
