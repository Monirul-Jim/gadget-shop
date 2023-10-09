import React, { useEffect, useState } from "react";
import ShowAllProductCard from "./ShowAllProductCard";
const ShowAllProduct = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20;
    const totalPages = Math.ceil(products.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    useEffect(() => {
        fetch('http://localhost:5000/product-collections')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setIsLoading(false);
            })
            .catch((error) => {
                // Handle errors
                setIsLoading(false); // Set isLoading to false even if there's an error
              });
    }, []);

    const renderPaginationButtons = () => {
        const maxButtonsToShow = 5; // You can adjust this number
        const buttons = [];
        
        if (totalPages <= maxButtonsToShow) {
            for (let i = 1; i <= totalPages; i++) {
                buttons.push(
                    <button
                        key={i}
                        className={`mx-2 px-3 py-1 rounded-md ${
                            currentPage === i ? "bg-orange-400 text-white" : ""
                        }`}
                        onClick={() => handlePageClick(i)}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            // Show first page
            buttons.push(
                <button
                    key={1}
                    className={`mx-2 px-3 py-1 rounded-md ${
                        currentPage === 1 ? "bg-orange-400 text-white" : ""
                    }`}
                    onClick={() => handlePageClick(1)}
                >
                    1
                </button>
            );

            // Show ellipsis if currentPage is not close to the beginning
            if (currentPage > 3) {
                buttons.push(<span key="ellipsis1">...</span>);
            }

            // Calculate which pages to show around the current page
            const pagesToShow = [];
            const startPage = Math.max(currentPage - 1, 2);
            const endPage = Math.min(currentPage + 1, totalPages - 1);
            for (let i = startPage; i <= endPage; i++) {
                pagesToShow.push(
                    <button
                        key={i}
                        className={`mx-2 px-3 py-1 rounded-md ${
                            currentPage === i ? "bg-orange-400 text-white" : ""
                        }`}
                        onClick={() => handlePageClick(i)}
                    >
                        {i}
                    </button>
                );
            }
            buttons.push(...pagesToShow);

            // Show ellipsis if currentPage is not close to the end
            if (currentPage < totalPages - 2) {
                buttons.push(<span key="ellipsis2">...</span>);
            }

            // Show last page
            buttons.push(
                <button
                    key={totalPages}
                    className={`mx-2 px-3 py-1 rounded-md ${
                        currentPage === totalPages ? "bg-orange-400 text-white" : ""
                    }`}
                    onClick={() => handlePageClick(totalPages)}
                >
                    {totalPages}
                </button>
            );
        }
        
        return buttons;
    };
    return (
        <>
            <h1 className="text-2xl text-center mt-6 mb-6 font-semibold">
                Here You Find All Our Available Product
            </h1>
            {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {productsToDisplay.map((product) => (
                    <ShowAllProductCard key={product._id} product={product} />
                ))}
            </div> */}
            {
                isLoading ?(
                    <div aria-label="Loading..." role="status" className="flex justify-center items-center space-x-2">
                    <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                        <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="24"></line>
                        <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                        </line>
                        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="24"></line>
                        <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                        </line>
                        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="24"></line>
                        <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                        </line>
                    </svg>
                    <span className="text-4xl font-medium text-gray-500">Loading...</span>
                </div>
                ):(<>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {productsToDisplay.map((product) => (
                    <ShowAllProductCard key={product._id} product={product} />
                ))}
            </div>
                </>)
            }

            <div className="mt-12 mb-6 flex justify-center">
                <button
                    className="mr-2 px-4 py-2 bg-orange-400 text-white rounded-md"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {renderPaginationButtons()}
                <button
                    className="ml-2 px-4 py-2 bg-orange-400 text-white rounded-md"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default ShowAllProduct;
