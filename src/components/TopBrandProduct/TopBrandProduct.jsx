import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ProductTabFunctionCard from '../../Product/Product/ProductTabFunctionCard';

const TopBrandProduct = () => {
    const [bestSeller, setBestSeller] = useState([])
    const [bestDeal, setDeal] = useState([])
    const [newArrival, setNewArrival] = useState([])
    const [newLaunching, setNewLaunching] = useState([])
    const [adapter, setAdapter] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product-collections')
            .then(res => res.json())
            .then(data => {
                const bestSellerCategory = data.filter(item => item.sub_category === 'samsung')
                setBestSeller(bestSellerCategory)
                const bestDealCategory = data.filter(item => item.sub_category === 'iphone')
                setDeal(bestDealCategory)
                const newArrivalCategory = data.filter(item => item.sub_category === 'xiaomi')
                setNewArrival(newArrivalCategory)
                const launching = data.filter(item => item.sub_category === 'jbl_speakers')
                setNewLaunching(launching)
                const adapters = data.filter(item => item.sub_category === 'anker_adapter')
                setAdapter(adapters)
            })
    }, [])
    return (
        <div>
            <h1 className='text-center text-2xl mt-4 mb-8'>Top Brand Product</h1>

            <div className="h-full">

                <Tabs>
                    <TabList className="grid grid-cols-3 md:grid-cols-7 lg:grid-cols-10 lg:flex justify-center">
                        <Tab>Samsung</Tab>
                        <Tab>Apple</Tab>
                        <Tab>Best Seller</Tab>
                        <Tab>JBL</Tab>
                        <Tab>Anker</Tab>

                    </TabList>



                    <TabPanel>
                        <div className=" grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 ">
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
                                adapter.map(item => <ProductTabFunctionCard key={item._id} product={item}></ProductTabFunctionCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TopBrandProduct;