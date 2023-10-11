import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../authprovider/AuthProvider';

const UserOrderedItem = () => {
    const [orderedProduct, setOrderedProduct] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        if (user && user.email) { // Check if user and user.email are not null/undefined
            fetch(`https://gadget-shop-server.vercel.app/confirmProduct?cus_email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setOrderedProduct(data);
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [user]);

    return (
        <div className='grid lg:grid-cols-3'>
            {
                orderedProduct.map(item => <div key={item._id} className="card container mx-auto lg:mt-20 w-80 bg-base-100 shadow-xl">
                    <figure><img src={item?.initialProduct?.product_url} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item?.initialProduct?.product_name}</h2>
                        <p className='font-semibold'>{item?.initialProduct?.category}</p>
                        <p> <span className='font-semibold'>Ram-Rom</span> : {item?.initialProduct?.ram_rom}</p>
                        <p> <span className='font-semibold'>Ram-Rom</span> : {item?.info?.cus_city}</p>
                        <p> <span className='font-semibold'>Ram-Rom</span> : {item?.info?.cus_state}</p>
                        <p><span className='font-semibold'>Price</span> : ${item?.initialProduct?.price}</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default UserOrderedItem;

// https://gadget-shop-server.vercel.app/confirmProduct?cus_email=coding@gmail.com
