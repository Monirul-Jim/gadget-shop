import { useEffect, useState } from "react";
import { Link, } from "react-router-dom";


const SecondComponent = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/filter-collections')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);
    return (
        <div>
            <div className='text-center mt-8 mb-8'>
                <h1 className='text-2xl font-bold'>FEATURED CATEGORIES</h1>
                <p>Get your desired product from featured category</p>
            </div>


            <div className='grid grid-cols-4 lg:grid-cols-8 lg:mr-12 lg:ml-12 sm:ml-4'>
                {categories.map(category => (
                    <div key={category._id}>
                        <Link to={`/product/${category.name}`} state={category.name}><img className="h-12 w-12" src={category.image_url} alt="" /></Link>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default SecondComponent;