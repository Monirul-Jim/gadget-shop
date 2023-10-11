import React, {useEffect, useState } from 'react';
import PreOrderCard from './PreOrderCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './PreOrder.css'
import 'swiper/css/pagination';


const PreOrder = () => {
  const [categories, setCategories] = useState([])
  const [swiperInstance, setSwiperInstance] = useState(null);
  const handlePrevClick = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  useEffect(() => {
    fetch('http://localhost:5000/product-collections')
      .then(res => res.json())
      .then(data => {
        const bestSellerCategory = data.filter(item => item.best === 'pre-order')
        const sortedProducts = bestSellerCategory.sort((a, b) => {
          if (a.date_added && b.date_added) {
              return new Date(b.date_added) - new Date(a.date_added);
          } else if (a.date_added) {
              return -1;
          } else if (b.date_added) {
              return 1; 
          }
          return 0;
      });
        setCategories(sortedProducts);

      })
  }, [])
  return (
   <>
    <div className="mt-12 mb-16 container mx-auto">
      <h1 className="text-2xl text-center font-semibold">Ready for Order 🔥</h1>

      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }} 
        onSwiper={(swiper) => setSwiperInstance(swiper)} 

        className="mySwiper my-12"
        
      >
        {categories.map((product) => (
          <SwiperSlide key={product._id}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              <PreOrderCard product={product}></PreOrderCard>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="text-center mt-4">
        <button onClick={handlePrevClick} className="px-4 py-2 bg-orange-400 text-white rounded-md mr-2">
          &lt; Prev
        </button>
        <button onClick={handleNextClick} className="px-4 py-2 bg-orange-400 text-white rounded-md">
          Next &gt;
        </button>
      </div>
   </>
    // <div className='mt-12 mb-8'>
    //     <h1 className='text-2xl text-center font-semibold'> Ready for Order 🔥</h1>
    //     <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
    //         {
    //             categories.map((product =><PreOrderCard key={product._id} product={product}></PreOrderCard>))
    //         }
    //     </div>

    // </div>
  );
};

export default PreOrder;