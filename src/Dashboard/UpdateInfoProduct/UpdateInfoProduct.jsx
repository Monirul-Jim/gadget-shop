import React, { useEffect, useState } from "react";
import { RxUpdate } from "react-icons/rx";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import useGetProduct from "../../hooks/useGetProduct";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const UpdateInfoProduct = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [axiosSecure] = useAxiosSecure()
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
                console.error(error)
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
                        className={`mx-2 px-3 py-1 rounded-md ${currentPage === i ? "bg-orange-400 text-white" : ""
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
                    className={`mx-2 px-3 py-1 rounded-md ${currentPage === 1 ? "bg-orange-400 text-white" : ""
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
                        className={`mx-2 px-3 py-1 rounded-md ${currentPage === i ? "bg-orange-400 text-white" : ""
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
                    className={`mx-2 px-3 py-1 rounded-md ${currentPage === totalPages ? "bg-orange-400 text-white" : ""
                        }`}
                    onClick={() => handlePageClick(totalPages)}
                >
                    {totalPages}
                </button>
            );
        }

        return buttons;
    };

    const handleDeleteProductItem = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/seller-delete/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        const updatedProducts = products.filter(p => p._id !== item._id);
                        setProducts(updatedProducts);
                    })

            }
        })

    }

    return (
        <div>
            <h1 className="text-2xl text-center mt-6 mb-6 font-semibold">
                Seller Update Product Info <br /> Total Product: {products.length}
            </h1>
            <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading?(
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
                            ):(
                              productsToDisplay.map((item,index) => (
                                <tr key={item._id}>
                                    <td>
                                        <td>{index+1}</td>
                                     <td>
                                     <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.product_url} alt="Phone Pic" />
                                                </div>
                                            </div>
                                        </div>
                                     </td>
                                    </td>
                                    <td><h1>{item.product_name}</h1></td>
                                    <td>${item.price}</td>
                                    <td><Link to={`/seller-update-product-id/${item._id}`}><button className="text-2xl" ><RxUpdate></RxUpdate></button></Link></td>
                                    <th>
                                        <button className="text-2xl" onClick={() => handleDeleteProductItem(item)}><FaTrash></FaTrash></button>
                                    </th>
                                </tr>
                            ))
                            )
                          
                        }

                    </tbody>

                </table>

            {/* {
                isLoading ? (
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
                ) : (<>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {productsToDisplay.map((product) => (
                            <UpdateInfoProductTable key={product._id} product={product} />
                        ))}
                    </div>
                </>)
            } */}

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

        </div>
    );
};

export default UpdateInfoProduct;