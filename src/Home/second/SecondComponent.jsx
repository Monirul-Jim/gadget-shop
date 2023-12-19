import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";




const SecondComponent = () => {
    const [categories, setCategories] = useState([])



    useEffect(() => {
        fetch('https://gadget-shop-server.vercel.app/filter-collections')
            .then(res => res.json())
            .then(data => {
                setCategories(data)

            });

    }, []);


    return (
        <div className="mb-10 container mx-auto">
            <div className='text-center mt-8 mb-8'>
                <h1 className='text-2xl font-bold mt-4 mb-5'>FEATURED CATEGORIES</h1>
                <p>Get your desired product from featured category</p>
            </div>
            <div className='grid grid-cols-4 lg:grid-cols-8 lg:mr-12 lg:ml-12 sm:ml-4 mb-10 '>
                {categories.map(category => (
                    <div key={category._id}>
                        <Link to={`/product/${category.name}`} state={category.name}><img className="h-12 w-12" src={category.image_url} alt="" /></Link>
                    </div>
                ))}
            </div>

            <FeaturedProducts></FeaturedProducts>

        </div>
    );
};

export default SecondComponent;