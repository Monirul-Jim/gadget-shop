/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ProductTabFunctionCard from '../../Product/Product/ProductTabFunctionCard';

const FeaturedProducts = () => {
    const [bestSeller, setBestSeller] = useState([])
    const [bestDeal, setDeal] = useState([])
    const [newArrival, setNewArrival] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product-collections')
            .then(res => res.json())
            .then(data => {
                const bestSellerCategory = data.filter(item => item.sub_category === 'best_sellers')
                setBestSeller(bestSellerCategory)
                const bestDealCategory = data.filter(item => item.sub_category === 'best_deal')
                setDeal(bestDealCategory)
                const newArrivalCategory = data.filter(item => item.sub_category === 'new_arrival')
                setNewArrival(newArrivalCategory)
            })
    }, [])
    return (
        <div className='mt-20'>
            <h1 className='text-4xl font-serif font-semibold text-center '>Featured Products</h1>
            <div className="h-full">

                <Tabs>
                    <TabList>
                        <Tab>Best Seller</Tab>
                        <Tab>Best Deal</Tab>
                        <Tab>New Arrival</Tab>

                    </TabList>
                    <TabPanel>
                        <div className=" grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
                            {
                                bestSeller.map(item => <ProductTabFunctionCard key={item._id} product={item}></ProductTabFunctionCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=" grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
                            {
                                bestDeal.map(item => <ProductTabFunctionCard key={item._id} product={item}></ProductTabFunctionCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=" grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
                            {
                                newArrival.map(item => <ProductTabFunctionCard key={item._id} product={item}></ProductTabFunctionCard>)
                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default FeaturedProducts;