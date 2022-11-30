import React, { useState , useEffect }from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Price_list() {
    let [open1,setOpen1]=useState(true);
    let [open,setOpen]=useState(false);
    let [open3,setOpen3]=useState(false);
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    // const linkroot1 = document.getElementById('menulink1');
    // const linkname1 = 'BREAKFAST';
    // linkname1(linkname1);
    function Menulink1(name) {
    <p>hhh {name.name}</p>
    }
  return (
<div>
    <div 
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
    class="grid-cols-1 h-full flex justify-center items-center my-10">
      <div class="lg:w-3/6 w-5/6">
        <div class="items-center justify-center">
                  <div class="text-center justify-center items-center">
                      <h3 class="font-thin custom-font-playfair lg:m-6 text-center text-2xl lg:text-4xl">Menu List with Price</h3>          
                  </div>
          <div class="h-full flex justify-center items-center pt-2">
            <div class="">
                <div class="text-center">
                <div class="grid grid-cols-3 font-thin">
                        <div onClick={()=>{setOpen1(true); setOpen(false); setOpen3(false);}} class="text-slate-500 px-2 cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-orange-500">
                        <Menulink1 name="BREAKFAST" />
                        <p className='text-[16px] px-2'>BREAKFAST</p>
                        </div>
                        <div onClick={()=>{setOpen(true); setOpen1(false); setOpen3(false);}} class="text-slate-500 px-2 cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-orange-500">
                        
                        <p className='text-[16px]'>BRUNCH</p>
                        </div>
                        <div onClick={()=>{setOpen3(true); setOpen(false); setOpen1(false);}} class="text-slate-500 px-2 cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-orange-500">
                       
                        <p className='text-[16px] px-2'>DINNER</p>
                        </div>
                        </div>
                </div>
            </div>
          </div>
        <div 
         className={`transition-all duration-500 ease-in ${open1 ? '':'hidden'} `}>
          <div class="justify-center items-center mt-16">
                  <div class="grid grid-cols-1 lg:grid-cols-2 mt-5">
                      <div class="text-left text-xl">
                          <a href="" className='custom-font-playfair'>Warm Spinach Dip & Chips</a>
                      </div>
                      <div class="lg:text-right ">
                          <h3 class="font-[10px] text-[20px] text-orange-300">$20.59</h3>
                      </div>
                  </div>
                  <div class="lg:text-left lg:pr-9 lg:mb-5">
                  <p class="font-thin text-[16px] pb-5 text-slate-400">Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa</p>  
                  </div>                    
              </div>
              <hr></hr>
              <div class="justify-center items-center mt-16">
                  <div class="grid grid-cols-1 lg:grid-cols-2 mt-5">
                      <div class="text-left text-xl">
                          <a href="">Key Wast Machos</a>
                      </div>
                      <div class="lg:text-right ">
                          <h3 class="font-[10px] text-[20px] text-orange-300">$31</h3>
                      </div>
                  </div>
                  <div class="lg:text-left lg:pr-9 lg:mb-5">
                  <p class="font-thin text-[16px] pb-5 text-slate-400">Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa</p>  
                  </div>                   
              </div>
              <hr></hr>
              <div class="justify-center items-center mt-16">
                  <div class="grid grid-cols-1 lg:grid-cols-2 mt-5">
                      <div class="text-left text-xl">
                          <a href="">Crispy Onions Rings</a>
                      </div>
                      <div class="lg:text-right ">
                          <h3 class="font-[10px] text-[20px] text-orange-300">$19.49</h3>
                      </div>
                  </div>
                  <div class="lg:text-left lg:pr-9 lg:mb-5">
                  <p class="font-thin text-[16px] pb-5 text-slate-400">Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa</p>  
                  </div>                    
              </div>
              <hr></hr>
              <div class="justify-center items-center my-16">
                  <div class="grid grid-cols-1 lg:grid-cols-2 mt-5">
                      <div class="text-left text-xl">
                          <a href="">Warm Spinach Dip & Chips</a>
                      </div>
                      <div class="lg:text-right ">
                          <h3 class="font-[10px] text-[20px] text-orange-300">$14.49</h3>
                      </div>
                  </div>
                  <div class="lg:text-left lg:pr-9 lg:mb-5">
                  <p class="font-thin text-[16px] pb-5 text-slate-400">Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa</p>  
                  </div>                   
              </div>
        </div>
          <div className={`transition-all duration-500 ease-in ${open ? '':'hidden'} `}>
              <div class={`justify-center items-center mt-16 `}>
                  <div class="grid grid-cols-1 lg:grid-cols-2 mt-5">
                      <div class="text-left text-xl">
                          <a href="">Jumbo Lump Crab Stack</a>
                      </div>
                      <div class="lg:text-right ">
                          <h3 class="font-[10px] text-[20px] text-orange-300">$12.59</h3>
                      </div>
                  </div>
                  <div class="lg:text-left lg:pr-9 lg:mb-5">
                  <p class="font-thin text-[16px] pb-5 text-slate-400">Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa</p>  
                  </div>                    
              </div>
              <hr></hr>
              <div class="justify-center items-center mt-16">
                  <div class="grid grid-cols-1 lg:grid-cols-2 mt-5">
                      <div class="text-left text-xl">
                          <a href="">Jamaican Chicken Wings</a>
                      </div>
                      <div class="lg:text-right ">
                          <h3 class="font-[10px] text-[20px] text-orange-300">$15.49</h3>
                      </div>
                  </div>
                  <div class="lg:text-left lg:pr-9 lg:mb-5">
                  <p class="font-thin text-[16px] pb-5 text-slate-400">Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa</p>  
                  </div>                   
              </div>
              <hr></hr>
              <div class="justify-center items-center mt-16">
                  <div class="grid grid-cols-1 lg:grid-cols-2 mt-5">
                      <div class="text-left text-xl">
                          <a href="">Bahamian Seafood Chowder</a>
                      </div>
                      <div class="lg:text-right ">
                          <h3 class="font-[10px] text-[20px] text-orange-300">$18.49</h3>
                      </div>
                  </div>
                  <div class="lg:text-left lg:pr-9 lg:mb-5">
                  <p class="font-thin text-[16px] pb-5 text-slate-400">Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa</p>  
                  </div>                    
              </div>
              <hr></hr>
              <div class="justify-center items-center my-16">
                  <div class="grid grid-cols-1 lg:grid-cols-2 mt-5">
                      <div class="text-left text-xl">
                          <a href="">Warm Spinach Dip & Chips</a>
                      </div>
                      <div class="lg:text-right ">
                          <h3 class="font-[10px] text-[20px] text-orange-300">$10.49</h3>
                      </div>
                  </div>
                  <div class="lg:text-left lg:pr-9 lg:mb-5">
                  <p class="font-thin text-[16px] pb-5 text-slate-400">Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa</p>  
                  </div>                   
              </div>
            </div>
            <div className={` ${open3 ? '':'hidden'} `}>
          <div class="justify-center items-center mt-16">
                  <div class="grid grid-cols-1 lg:grid-cols-2 mt-5">
                      <div class="text-left text-xl">
                          <a href="">Steak Oscar</a>
                      </div>
                      <div class="lg:text-right ">
                          <h3 class="font-[10px] text-[20px] text-orange-300">$100.59</h3>
                      </div>
                  </div>
                  <div class="lg:text-left lg:pr-9 lg:mb-5">
                  <p class="font-thin text-[16px] pb-5 text-slate-400">Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa</p>  
                  </div>                    
              </div>
              <hr></hr>
              <div class="justify-center items-center mt-16">
                  <div class="grid grid-cols-1 lg:grid-cols-2 mt-5">
                      <div class="text-left text-xl">
                          <a href="">Skirt Steak Churrasco</a>
                      </div>
                      <div class="lg:text-right ">
                          <h3 class="font-[10px] text-[20px] text-orange-300">$45.49</h3>
                      </div>
                  </div>
                  <div class="lg:text-left lg:pr-9 lg:mb-5">
                  <p class="font-thin text-[16px] pb-5 text-slate-400">Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa</p>  
                  </div>                   
              </div>
              <hr></hr>
              <div class="justify-center items-center mt-16">
                  <div class="grid grid-cols-1 lg:grid-cols-2 mt-5">
                      <div class="text-left text-xl">
                          <a href="">Warm Spinach Dip & Chips</a>
                      </div>
                      <div class="lg:text-right ">
                          <h3 class="font-[10px] text-[20px] text-orange-300">$89.49</h3>
                      </div>
                  </div>
                  <div class="lg:text-left lg:pr-9 lg:mb-5">
                  <p class="font-thin text-[16px] pb-5 text-slate-400">Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa</p>  
                  </div>                    
              </div>
              <hr></hr>
              <div class="justify-center items-center my-16">
                  <div class="grid grid-cols-1 lg:grid-cols-2 mt-5">
                      <div class="text-left text-xl">
                          <a href="">Warm Spinach Dip & Chips</a>
                      </div>
                      <div class="lg:text-right ">
                          <h3 class="font-[10px] text-[20px] text-orange-300">$15.49</h3>
                      </div>
                  </div>
                  <div class="lg:text-left lg:pr-9 lg:mb-5">
                  <p class="font-thin text-[16px] pb-5 text-slate-400">Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa</p>  
                  </div>                   
              </div>
        </div>

          </div>
        </div>
    </div>
</div>
  )
}
