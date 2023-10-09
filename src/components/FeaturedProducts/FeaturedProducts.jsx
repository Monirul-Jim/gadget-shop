/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ProductTabFunctionCard from '../../Product/Product/ProductTabFunctionCard';

const FeaturedProducts = () => {
    const [bestSeller, setBestSeller] = useState([])
    const [bestDeal, setDeal] = useState([])
    const [newArrival, setNewArrival] = useState([])
    const [newLaunching, setNewLaunching] = useState([])
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
                const launching = data.filter(item => item.best === 'new_launching')
                setNewLaunching(launching)
            })
    }, [])
    return (
        <div className='mt-28'>
            <h1 className='text-4xl font-serif font-semibold text-center mb-8 mt-4 '>Featured Products</h1>
            <div className="h-full">

                <Tabs>
                    <TabList className="grid grid-cols-3 md:grid-cols-7 lg:grid-cols-10 lg:flex justify-center">
                        <Tab>New Arrival</Tab>
                        <Tab>Popular Product</Tab>
                        <Tab>Best Seller</Tab>
                        <Tab>Best Deal</Tab>

                    </TabList>



                    <TabPanel>
                        <div className=" grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
                            {
                                newLaunching.map(item => <ProductTabFunctionCard key={item._id} product={item}></ProductTabFunctionCard>)
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
                </Tabs>
            </div>
        </div>
    );
};

export default FeaturedProducts;