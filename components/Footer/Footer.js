import React, { useEffect }from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Footer() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <div className=''>
        <div class="curve1 grid grid-cols-1 lg:grid-cols-4 gap-4 my-10 p-6 lg:p-11 lg:mx-20">
            <div 
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            class="flex">
                <div class="text-left px-2">
                    <h3 class="my-8 text-left text-xl">Diner Restaurant</h3>
                    <p class="text-gray-400 font-thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam</p>
                </div>
            </div>
            <div data-aos="fade-right"
            data-aos-offset="240"
            data-aos-delay="70"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            class="flex">
                <div class="text-left px-2">
                    <h3 class=" text-left text-xl my-8">Lunch Service</h3>
                    <p class="text-gray-400 font-thin">Booking from 12:00pm - 1:30pm</p>
                    <h3 class=" text-left text-xl my-8">Dinner Service</h3>
                    <p class="text-gray-400 font-thin">Everyday: <br/>
                        Booking from 6:00pm - 9:00pm</p>
                </div>
            </div>
            <div 
            data-aos="fade-right"
            data-aos-offset="280"
            data-aos-delay="90"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out"
            class="flex">
                <div class="text-left px-2">
                    <h3 class=" text-left text-xl my-8">Quick Links</h3>
                    <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
                        <li><a href="#" class=" text-amber-400">Help & Support</a></li>  
                        <li><a href="#" class=" text-amber-400">Privacy Policy</a></li>  
                        <li><a href="#" class=" text-amber-400">Get in Touch</a></li>  
                        <li><a href="#" class=" text-amber-400">Testimonials</a></li>  
                    </ul>
                </div>
            </div>
            <div 
            data-aos="fade-right"
            data-aos-offset="320"
            data-aos-delay="110"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out"
            class="lg:flex">
                <div class="text-left px-2">
                    <h3 class="text-left text-xl my-8">Subscribe</h3>
                    <p class="text-gray-400 font-thin lg:pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <form class="my-2">
                        <div class="flex items-center justify-center font-thin">
                        <input type="text" class="p-2 bg-gray-100 w-full" placeholder="Email"></input>
                        <button class="bg-amber-500 hover:bg-amber-200 hover:duration-300 p-2 px-5 text-white">SEND</button>
                        </div>
                    </form>
                    <h3 class="text-left text-xl py-6">Contact Us</h3>
                    <a href="info@yourdomain.com" class="text-amber-300 font-thin">info@yourdomain.com</a> <br></br>
                    <div class="py-8 ">
                    <a tel="1-444-123-9829" class="text-2xl">1-444-123-9829</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
