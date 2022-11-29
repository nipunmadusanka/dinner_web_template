import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {
   solid
 } from '@fortawesome/fontawesome-svg-core/import.macro'
 import '@fortawesome/fontawesome-svg-core/styles.css'
import Nav from '../components/Nav/Nav'
import One_comp from '../components/One_comp/One_comp'
import Swipper from '../components/Swipper/Swipper';
import Food_type from '../components/Food_type/Food_type';
import View_menu from '../components/View_menu/View_menu';
import Price_list from '../components/Price_list/Price_list';
import Event_news from '../components/Event_news/Event_news';
import Why_choose from '../components/Why_choose/Why_choose';
import Footer from '../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
  <div>
    <Head>
      <title>Dinner</title>
    </Head>
    <main>
  <div class="bg-no-repeat content_bg justify-center items-center bg-center h-screen bg-cover bg-fixed bg-black">
    <Nav/>
      <div class="flex py-10 h-full items-center justify-center">
        <div class="w-10/12 md:w-8/12 lg:w-8/12 text-white" >
                <p class="tracking-wide lg:leading-[4rem] custom-font-playfair text-4xl lg:text-5xl md:text-4xl text-start">
                    Loremm ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsa sint amet aliquam velit minima tenetur quisquam beatae molestiae possimus dicta.</p>
        </div>
      </div>
    </div>

        <One_comp/>
        <Food_type />
        <Swipper />
        <View_menu />
        <Price_list />
        <Event_news />  
        <Why_choose /> 
        <Footer />    

    </main>

        
        
  </div>
  )
}

