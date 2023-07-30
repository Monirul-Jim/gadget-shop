import ProductTabFunctionCard from "./ProductTabFunctionCard";


const ProductTabFunction = ({item}) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {
                item.map(product=><ProductTabFunctionCard key={product._id} product={product}></ProductTabFunctionCard>)
            }
        </div>
    );
};

export default ProductTabFunction;