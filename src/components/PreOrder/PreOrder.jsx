import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../authprovider/AuthProvider';
import useGetProduct from '../../hooks/useGetProduct';
import PreOrderCard from './PreOrderCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const PreOrder = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product-collections')
            .then(res => res.json())
            .then(data => {
                const bestSellerCategory = data.filter(item => item.best === 'pre-order')
                setCategories(bestSellerCategory)

            })
    }, [])
    return (
        <div className="mt-12 mb-16 container mx-auto">
      <h1 className="text-2xl text-center font-semibold">Ready for Order 🔥</h1>

      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
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