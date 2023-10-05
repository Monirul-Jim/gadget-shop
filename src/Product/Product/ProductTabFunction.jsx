import { useState } from "react";
import ProductTabFunctionCard from "./ProductTabFunctionCard";

const ProductsPerPage = 10;
const ProductTabFunction = ({ item }) => {

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastProduct = currentPage * ProductsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;
    const currentProducts = item.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(item.length / ProductsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (

        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {
                    currentProducts.map(product => <ProductTabFunctionCard key={product._id} product={product}></ProductTabFunctionCard>)
                }
            </div>


            <div className="mt-4 flex justify-center">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-2 px-4 py-2 rounded-full ${currentPage === index + 1
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-blue-500 hover:bg-blue-200'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>









    );
};

export default ProductTabFunction;