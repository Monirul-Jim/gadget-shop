
// import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Product = () => {
    
    return (
        <Tabs>
            <TabList className="grid sm:grid-cols-5 lg:grid-cols-10">

             mobile &&(
                <Tab>samsung</Tab>
                <Tab>apple</Tab>
                <Tab>google</Tab>
                <Tab>oneplus</Tab>
             )
              adapter &&(
                <Tab>samsung11111</Tab>
                <Tab>apple222222</Tab>
                <Tab>google33333</Tab>
                <Tab>oneplus44444</Tab>
              )
            </TabList>


           mobile&&(
            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 4</h2>
            </TabPanel>
           )
           adapter&&(
            <TabPanel>
                <h2>Any content 5</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 6</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 7</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 8</h2>
            </TabPanel>
           )
        </Tabs>
    );
};

export default Product;
{/* <Tabs>
<TabList className="grid sm:grid-cols-5 lg:grid-cols-10">
    {selectedCategory .name === "mobile" && (
        <>
            <Tab>
                <button>Samsung</button>
            </Tab>
            <Tab>
                <button>Apple</button>
            </Tab>
            <Tab>
                <button>Google</button>
            </Tab>
        </>
    )}

    {selectedCategory .name === "adapter" && (
        <>
            <Tab>
                <button>a</button>
            </Tab>
            <Tab>
                <button>b</button>
            </Tab>
            <Tab>
                <button>c</button>
            </Tab>
        </>
    )}

</TabList>

{selectedCategory .name === "mobile" && (
    <>
        <TabPanel>
            <h2>Any content for Samsung</h2>
        </TabPanel>
        <TabPanel>
            <h2>Any content for Apple</h2>
        </TabPanel>
        <TabPanel>
            <h2>Any content for Google</h2>
        </TabPanel>
    </>
)}

{selectedCategory .name === "adapter" && (
    <>
        <TabPanel>
            <h2>Any content for a</h2>
        </TabPanel>
        <TabPanel>
            <h2>Any content for b</h2>
        </TabPanel>
        <TabPanel>
            <h2>Any content for c</h2>
        </TabPanel>
    </>
)}
</Tabs> */}