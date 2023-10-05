import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProduct from '../../Shared/UseProduct/useProduct';
import ProductTabFunction from './ProductTabFunction';
import './Product.css'

const Product = () => {
    const location = useLocation();
    const [mobileData, setMobileData] = useState([]);
    const [adapterData, setAdapterData] = useState([]);
    const [mackbook, setmackbookData] = useState([]);
    const [watchData, setWatch] = useState([])
    const [airpodsData, setAirpods] = useState([])
    const [headPhoneData, setHeadphoneData] = useState([])
    const [speakers, setSpeakers] = useState([])
    const [earphone, setEarphone] = useState([])
    let product = location.state
    const [categories] = useProduct()
    const category1 = categories.filter(item => item.sub_category === 'samsung')
    const category2 = categories.filter(item => item.sub_category === 'realme')
    const category3 = categories.filter(item => item.sub_category === 'asus')
    const category4 = categories.filter(item => item.sub_category === 'xiaomi')
    const category5 = categories.filter(item => item.sub_category === 'oneplus')
    const category6 = categories.filter(item => item.sub_category === 'infinix')
    const category7 = categories.filter(item => item.sub_category === 'vivo')
    const category8 = categories.filter(item => item.sub_category === 'zte')
    const category9 = categories.filter(item => item.sub_category === 'iphone')
    const categoryAppleAdapter = categories.filter(item => item.sub_category === 'apple_adapter')
    const categoryAnkerAdapter = categories.filter(item => item.sub_category === 'anker_adapter')
    const categorySamsungAdapter = categories.filter(item => item.sub_category === 'samsung_adapter')
    const categoryHeaweiAdapter = categories.filter(item => item.sub_category === 'huawei_adapter')
    const appleMackbook = categories.filter(item => item.sub_category === 'apple_macbook')
    const watchSamsung = categories.filter(item => item.sub_category === 'samsung_watch')
    const watchApple = categories.filter(item => item.sub_category === 'apple_watch')
    const airpodsSamsung = categories.filter(item => item.sub_category === 'samsung_airpods')
    const airpodsApple = categories.filter(item => item.sub_category === 'apple_airpods')
    const airpodsAmazone = categories.filter(item => item.sub_category === 'amazone_airpods')
    const airpodsOneplus = categories.filter(item => item.sub_category === 'oneplus_airpods')
    const akgHeadphones = categories.filter(item => item.sub_category === 'akg_headphones')
    const ankerHeadphones = categories.filter(item => item.sub_category === 'anker_headphones')
    const xiaomiHeadphones = categories.filter(item => item.sub_category === 'xiaomi_headphones')
    const amazoneSpeakers = categories.filter(item => item.sub_category === 'amazon_speakers')
    const appleSpeakers = categories.filter(item => item.sub_category === 'apple_speakers')
    const jblSpeakers = categories.filter(item => item.sub_category === 'jbl_speakers')
    const marshallSpeakers = categories.filter(item => item.sub_category === 'marshall_speakers')
    const ankerEarphone = categories.filter(item => item.sub_category === 'anker_earphone')
    const samsungEarphone = categories.filter(item => item.sub_category === 'samsung_earphone')
    const xiaomiEarphone = categories.filter(item => item.sub_category === 'xiaomi_earphone')
    const oneplusEarphone = categories.filter(item => item.sub_category === 'oneplus_earphone')

    useEffect(() => {
        fetch("http://localhost:5000/filter-collections")
            .then(response => response.json())
            .then(data => {
                const mobile = data.filter(item => item.name === 'mobile');
                const mobileData = mobile[0]?.name === product
                setMobileData(mobileData);

                const adapter = data.filter(item => item.name === 'adapter');
                const adapterData = adapter[0]?.name === product
                setAdapterData(adapterData);

                const mackbook = data.filter(item => item.name === 'mackbook');
                const mackbookData = mackbook[0]?.name === product
                setmackbookData(mackbookData);

                const watch = data.filter(item => item.name === 'watch');
                const watchData = watch[0]?.name === product
                setWatch(watchData);

                const airpod = data.filter(item => item.name === 'airpods');
                const aidpods = airpod[0]?.name === product
                setAirpods(aidpods);


                const headphone = data.filter(item => item.name === 'headphones');
                const headphonesData = headphone[0]?.name === product
                setHeadphoneData(headphonesData);


                const speakers = data.filter(item => item.name === 'speakers');
                const speakersData = speakers[0]?.name === product
                setSpeakers(speakersData);


                const earphone = data.filter(item => item.name === 'earphone');
                const earphoneData = earphone[0]?.name === product
                setEarphone(earphoneData);


            })
            .catch(error => console.log(`404 page not found ${error}`));
    }, [product]);

    return (
        <Tabs>
            <TabList className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10">
                {mobileData && <>
                    <Tab>Samsung</Tab>
                    <Tab>Iphone</Tab>
                    <Tab>Asus</Tab>
                    <Tab>Xiaomi</Tab>
                    <Tab>OnePlus</Tab>
                    <Tab>Infinix</Tab>
                    <Tab>Vivo</Tab>
                    <Tab>Realme</Tab>
                    <Tab>ZTE</Tab>
                </> || adapterData && <>
                    <Tab>Apple</Tab>
                    <Tab>Anker</Tab>
                    <Tab>Samsung</Tab>
                    <Tab>Huawei</Tab>
                </> || mackbook && <>
                    <Tab>Mackbook</Tab>
                </> || watchData && <>
                    <Tab>Samsung</Tab>
                    <Tab>Apple</Tab>
                </> || airpodsData && <>
                    <Tab>Apple</Tab>
                    <Tab>Samsung</Tab>
                    <Tab>Amazone</Tab>
                    <Tab>Oneplus</Tab>
                </> || headPhoneData && <>
                    <Tab>AKG</Tab>
                    <Tab>Anker</Tab>
                    <Tab>Xioami</Tab>
                </> || speakers && <>
                    <Tab>Amazone</Tab>
                    <Tab>Apple</Tab>
                    <Tab>JBL</Tab>
                    <Tab>marshall</Tab>
                </> || earphone && <>
                    <Tab>Anker</Tab>
                    <Tab>Samsung</Tab>
                    <Tab>Xioami</Tab>
                    <Tab>Oneplus</Tab>
                </>

                }
            </TabList>

            {mobileData && <>
                <TabPanel><ProductTabFunction item={category1}></ProductTabFunction> </TabPanel>
                <TabPanel><ProductTabFunction item={category9}></ProductTabFunction> </TabPanel>
                <TabPanel><ProductTabFunction item={category3}></ProductTabFunction> </TabPanel>
                <TabPanel><ProductTabFunction item={category4}></ProductTabFunction> </TabPanel>
                <TabPanel><ProductTabFunction item={category5}></ProductTabFunction> </TabPanel>
                <TabPanel><ProductTabFunction item={category6}></ProductTabFunction> </TabPanel>
                <TabPanel><ProductTabFunction item={category7}></ProductTabFunction> </TabPanel>
                <TabPanel><ProductTabFunction item={category2}></ProductTabFunction> </TabPanel>
                <TabPanel><ProductTabFunction item={category8}></ProductTabFunction> </TabPanel>
            </>}

            {adapterData && <>
                <TabPanel><ProductTabFunction item={categoryAppleAdapter}></ProductTabFunction> </TabPanel>
                <TabPanel><ProductTabFunction item={categoryAnkerAdapter}></ProductTabFunction> </TabPanel>
                <TabPanel><ProductTabFunction item={categorySamsungAdapter}></ProductTabFunction> </TabPanel>
                <TabPanel><ProductTabFunction item={categoryHeaweiAdapter}></ProductTabFunction> </TabPanel>
            </>}

            {mackbook && <>
                <TabPanel><ProductTabFunction item={appleMackbook}></ProductTabFunction> </TabPanel>
            </>}
            {
                watchData && <>
                    <TabPanel><ProductTabFunction item={watchSamsung}></ProductTabFunction> </TabPanel>
                    <TabPanel><ProductTabFunction item={watchApple}></ProductTabFunction> </TabPanel>
                </>
            }
            {
                airpodsData && <>
                    <TabPanel><ProductTabFunction item={airpodsApple}></ProductTabFunction> </TabPanel>
                    <TabPanel><ProductTabFunction item={airpodsSamsung}></ProductTabFunction> </TabPanel>
                    <TabPanel><ProductTabFunction item={airpodsAmazone}></ProductTabFunction> </TabPanel>
                    <TabPanel><ProductTabFunction item={airpodsOneplus}></ProductTabFunction> </TabPanel>
                </>
            }
            {
                headPhoneData && <>
                    <TabPanel><ProductTabFunction item={akgHeadphones}></ProductTabFunction> </TabPanel>
                    <TabPanel><ProductTabFunction item={ankerHeadphones}></ProductTabFunction> </TabPanel>
                    <TabPanel><ProductTabFunction item={xiaomiHeadphones}></ProductTabFunction> </TabPanel>
                </>
            }
            {
                speakers && <>
                    <TabPanel><ProductTabFunction item={amazoneSpeakers}></ProductTabFunction> </TabPanel>
                    <TabPanel><ProductTabFunction item={appleSpeakers}></ProductTabFunction> </TabPanel>
                    <TabPanel><ProductTabFunction item={jblSpeakers}></ProductTabFunction> </TabPanel>
                    <TabPanel><ProductTabFunction item={marshallSpeakers}></ProductTabFunction> </TabPanel>
                </>
            }
            {
                earphone && <>
                    <TabPanel><ProductTabFunction item={ankerEarphone}></ProductTabFunction> </TabPanel>
                    <TabPanel><ProductTabFunction item={samsungEarphone}></ProductTabFunction> </TabPanel>
                    <TabPanel><ProductTabFunction item={xiaomiEarphone}></ProductTabFunction> </TabPanel>
                    <TabPanel><ProductTabFunction item={oneplusEarphone}></ProductTabFunction> </TabPanel>
                </>
            }
        </Tabs>
    );
};

export default Product;
