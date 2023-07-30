

const ProductTabFunctionCard = ({product}) => {
    const {product_url,product_name,price}=product
    return (
        <div className="mt-8 relative w-48 h-72 bg-white rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-transparent hover:border-blue-500  hover:shadow-blue-300">
            <img src={product_url} alt="" />
            <h1 className="text-center">{product_name}</h1>
            <p className="text-xl text-center">${price}</p>
           <div className="lg:space-x-1 mt-2  mb-10">
           <button className="bg-orange-400 pb-1 pt-0 font-semibold rounded-md text-white"><p className="px-2">Buy Now</p></button>
           <button className=" pb-1 pt-0 font-semibold rounded-md text-orange-400 border border-orange-300"><p className="px-2">Add to Cart</p></button>
           </div>
        </div>
    );
};

export default ProductTabFunctionCard;