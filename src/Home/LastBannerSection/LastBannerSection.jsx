import React from 'react';
import banner1 from '../../assets/thirdbanner1.jpg'
import banner2 from '../../assets/thirdbanner2.jpg'
import banner3 from '../../assets/thirdbanner3.jpg'
import shop1 from '../../assets/shopbybrands1.png'
import shop2 from '../../assets/shopbybrandsSamsung1.png'
import shop3 from '../../assets/shopbybrandsOneplus1.png'
import shop4 from '../../assets/shopbybrandsXioami1.png'
import shop5 from '../../assets/shopbybrandsGoogle.png'


const LastBannerSection = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                <img src={banner1} alt="" />
                <img src={banner2} alt="" />
                <img src={banner3} alt="" />
            </div>
            <div className='mt-16 text-center text-2xl font-semibold'>
                <h1>Shop By Brands</h1>
               <div className='flex justify-center'>
               <div className='grid grid-cols-5 w-[450px] gap-8'>
                  <img src={shop1} alt="" />
                    <img src={shop2} alt="" />
                    <img src={shop3} alt="" />
                    <img src={shop4} alt="" />
                    <img src={shop5} alt="" />
                </div>
               </div>
            </div>
        </div>
    );
};

export default LastBannerSection;