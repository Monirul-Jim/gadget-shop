import ScrollToTop from "react-scroll-to-top";
import TopBrandProduct from "../../components/TopBrandProduct/TopBrandProduct";
import FirstComponent from "../firstcomponent/FirstComponent";
import SecondComponent from "../second/SecondComponent";
import PreOrder from "../../components/PreOrder/PreOrder";
import LastBannerSection from "../LastBannerSection/LastBannerSection";
import AboutUs from "../AboutUs/AboutUs";


const Home = () => {
    return (
        <div>
            <FirstComponent />
            <PreOrder/>
            <SecondComponent />
            <TopBrandProduct />
            <LastBannerSection/>
            <AboutUs/>
            <ScrollToTop style={{ display: 'flex', bottom: 180, alignItems: 'center', justifyContent: 'center', left: 15, backgroundColor: '#f97316' }} smooth color='#ffffff' top={20} height="28" viewBox="0 0 256 256" />
        </div>
    );
};

export default Home;