import React, { useEffect }from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import FSection from './FSection';
import FSection2 from './FSection2';
export default function Food_type() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10">
            <FSection img='im4' title='Grilled Egg With Garlic' price='$5.00' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe'/>
            <FSection img='im3 order-last md:order-first sm:order-first' title='Organic Tomato Salad' price='$12.00' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe'/>
            <FSection img='im2' title='Flatbread' price='$13.00' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe'/>
            <FSection2 img='im1' title='Rack Of Lamb' price='$9.00' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe'/>
            <FSection2 img='im5 order-first md:order-last lg:order-last' title='Eggplant Parmigiana' price='$7.00' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe'/>
            <FSection2 img='im6' title='Spicy Meatballs' price='$8.00' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe'/>
             
            </div>
    </div>
  )
}
