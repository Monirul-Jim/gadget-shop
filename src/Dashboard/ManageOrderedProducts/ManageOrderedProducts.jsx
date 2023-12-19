import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';

const ManageOrderedProducts = () => {
  const [orderedProduct, setOrderedProduct] = useState([])
  useEffect(() => {
    fetch('https://gadget-shop-server.vercel.app/get-order-product')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setOrderedProduct(data)
      })
  }, [])
  return (
    <div>
      <div className='grid lg:grid-cols-3'>
        {
          orderedProduct.map(item => <div key={item._id} className="card container mx-auto lg:mt-20 w-80 bg-base-100 shadow-xl">
            <figure><img src={item?.initialProduct?.product_url} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{item?.initialProduct?.product_name}</h2>
              <p className='font-semibold'>{item?.initialProduct?.category}</p>
              <p> <span className='font-semibold'>Ram-Rom</span> : {item?.initialProduct?.ram_rom}</p>
              <p> <span className='font-semibold'>Division</span> : {item?.info?.cus_city}</p>
              <p> <span className='font-semibold'>District</span> : {item?.info?.cus_state}</p>
              <p><span className='font-semibold'>Price</span> : ${item?.initialProduct?.price}</p>
              <p><span className='font-semibold'>Cus_phone</span> : {item?.info?.cus_phone}</p>
              <p><span className='font-semibold'>Cus_Name</span> : {item?.info?.cus_name} {item?.info?.cus_last}</p>
              <p><span className='font-semibold'>Cus_Email</span> : {item?.info?.cus_email}</p>
              <p><span className='font-semibold'>Cus_Feedback</span> : {item?.info?.cus_feed}</p>
              <div className="card-actions justify-end">

              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default ManageOrderedProducts;