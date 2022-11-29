import React, { useState , useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {
  solid,
  regular,
  brands,
  icon
 } from '@fortawesome/fontawesome-svg-core/import.macro'
 import '@fortawesome/fontawesome-svg-core/styles.css'

export default function 
() {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"ABOUT US",link:"/"},
        {name:"OUR MENU",link:"/"},
        {name:"OUR BLOG",link:"/"},
        {name:"CONTACT",link:"/"},
      ];
      let [open,setOpen]=useState(false);

      useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
<div>
    <nav className="w-full z-10 bg-slate-100 shadow na fixed py-3">
        <div className="justify-between px-4 mx-auto items-center flex lg:px-8">
          <div class="flex">
            <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
              <div
              class="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ">
              <ul className="items-center justify-center flex space-x-4 space-y-0">
                <li className="text-black">
                    <a href='#'>
                      <h2 className=" text-black"><FontAwesomeIcon icon={solid('user')} size=""/></h2>
                    </a>
                </li>
                <li className="text-black">
                    <a href='#'>
                    <h2 className=" text-black"><FontAwesomeIcon icon={solid('rss')} size=""/></h2>
                    </a>
                </li>
                <li className="text-black">
                    <a href='#'>
                    <h2 className=" text-black"><FontAwesomeIcon icon={solid('camera')} size=""/></h2>
                    </a>
                </li>
              </ul>
            </div>
            
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-900 rounded-md outline-none focus:border-gray-900 focus:border">
                </button>
              </div>
            </div>
          </div>
          <div class="text-center px-4 py-2 box-border border-2 border-gray-900">
            <p class="font-thin text-black text-4xl">D</p>
            </div>
          <div>
            <div
              class="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ">
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-black">
                <div onClick={()=>setOpen(!open)} className=' cursor-pointer'>
                
                        <svg name={open ? 'close':'menu'} class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  
                </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className={`pb-12  absolute flex items-center justify-center bg-black left-0 w-full h-screen pl-9 transition-all duration-500 ease-in ${open ? 'top-[88px]':'top-[-850px]'}`}>
        <div className="grid grid-cols-1 text-center">
            {
          Links.map((link)=>(
            <li 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            key={link.name} className='text-xl my-3'>
              <a href={link.link} className='text-gray-200 hover:text-gray-400 duration-500 '>{link.name}</a>
            </li>
          ))
        }
        </div>
      </ul>
    </nav>
{/* <div className='shadow-md w-full fixed top-0 left-0'>
    <div className='flex items-center justify-between bg-white border-r-indigo-900 py-4 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
         <div class="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ">
              <ul className="items-center justify-center flex space-x-4 space-y-0">
                <li className="">
                    <a href='#'>
                      <h2 className=""><FontAwesomeIcon icon={solid('user')} size=""/></h2>
                    </a>
                </li>
                <li className="">
                    <a href='#'>
                    <h2 className=""><FontAwesomeIcon icon={solid('rss')} size=""/></h2>
                    </a>
                </li>
                <li className="">
                    <a href='#'>
                    <h2 className=""><FontAwesomeIcon icon={solid('camera')} size=""/></h2>
                    </a>
                </li>
              </ul>
            </div>
      </div>
      
      <div class="text-center px-4 py-2 box-border border-2 ">
            <p class="font-thin text-black text-4xl">D</p>
        </div>
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer'>
      <a href='#'>
            <svg name={open ? 'close':'menu'} class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </a>
      </div>

      <ul className={`pb-12 absolute bg-white  z-[-1] left-0 w-full pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className=' text-xl my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
      </ul>
    </div>
</div> */}
     
     
{/* <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="https://flowbite.com" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div id="mega-menu-full" class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                </li>
                <li>
                    <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                </li>
                <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                </li>
                <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
                </li>
                <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    <div id="mega-menu-full-dropdown" class="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
        <div class="grid py-5 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
            <ul aria-labelledby="mega-menu-full-dropdown-button">
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div class="font-semibold">Online Stores</div>
                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div class="font-semibold">Segmentation</div>
                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div class="font-semibold">Marketing CRM</div>
                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div class="font-semibold">Online Stores</div>
                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div class="font-semibold">Segmentation</div>
                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div class="font-semibold">Marketing CRM</div>
                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
            <ul class="hidden md:block">
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div class="font-semibold">Audience Management</div>
                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div class="font-semibold">Creative Tools</div>
                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div class="font-semibold">Marketing Automation</div>
                        <span class="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav> */}

    </div>
  )
}
