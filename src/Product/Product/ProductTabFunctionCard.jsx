
import { Link } from "react-router-dom";


const ProductTabFunctionCard = ({ product }) => {
    const { _id, product_url, product_name, price } = product
    return (
        <div className=" mt-8 max-w-lg mx-auto card  relative w-48 h-72  rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-transparent hover:border-blue-500  hover:shadow-blue-300">
            <img className=" mx-auto" src={product_url} alt="" />
            <div className=" ">
                <h1 className="text-center">{product_name}</h1>
                <p className="text-xl text-center">${price}</p>
                <div className="space-x-20 ">
                    <Link to={`/single-product/${_id}`}><button className="bg-orange-400 pb-1  pt-0 absolute bottom-0 font-semibold rounded-md text-white"><p className="px-2">Buy Now</p></button></Link>
                    <button className=" font-semibold pb-1 rounded-md text-orange-400 border absolute bottom-0 border-orange-300"><p className="px-2">Add to Cart</p></button>
                </div>
            </div>
        </div>
    );
};

export default ProductTabFunctionCard;