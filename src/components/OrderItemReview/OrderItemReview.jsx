
import { Link } from "react-router-dom";
import useGetProduct from "../../hooks/useGetProduct";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
// import OrderItemReviewTable from "./OrderItemReviewTable";

const OrderItemReview = () => {
    const [product, refetch] = useGetProduct()
    const [axiosSecure] = useAxiosSecure()
    const [quantity, setQuantity] = useState({});
    const [showTotal, setShowTotal] = useState(false);
    useEffect(() => {
        const initialQuantity = {};
        product.forEach((product) => {
            initialQuantity[product._id] = 1;
        });
        setQuantity(initialQuantity);
    }, [product]);

    const incrementValue = (productId) => {
        setQuantity((prevQuantity) => ({
            ...prevQuantity,
            [productId]: (prevQuantity[productId] || 1) + 1,
        }));
        setShowTotal(true);
    };

    const decrementValue = (productId) => {
        if (quantity[productId] > 1) {
            setQuantity((prevQuantity) => ({
                ...prevQuantity,
                [productId]: prevQuantity[productId] - 1,
            }));
            setShowTotal(true);
        }
    };

    const getTotalPrice = (productId, price) => {
        return (quantity[productId] || 1) * price;
    };

    // here i make sub total calculate
    const calculateSubtotal = () => {
        let subtotal = 0;
        product.forEach((item) => {
            subtotal += getTotalPrice(item._id, item.price);
        });
        return parseFloat(subtotal).toFixed(2);
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

                axiosSecure.delete(`/product-delete/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            localStorage.removeItem(`added_${item.menuItemId}`);
                        }
                    })

            }
        })

    }
    // here i make payment gateway

    return (
        <div className="mt-8">
            <div className="flex justify-between">
                <h1 >Shopping Cart</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((item) => (
                                <tr key={item._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.product_url} alt="Phone Pic" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><h1>${item.product_name}</h1></td>
                                    <td>
                                        <button onClick={() => incrementValue(item._id)}><FaPlus></FaPlus></button>
                                        <input className="w-6 text-center" type="text" value={quantity[item._id] || 1} readOnly />
                                        <button onClick={() => decrementValue(item._id)}><FaMinus></FaMinus></button>
                                    </td>
                                    <td>${item.price}</td>
                                    <td>${getTotalPrice(item._id, item.price)}</td>
                                    <th>
                                        <button onClick={() => handleDeleteProductItem(item)}><FaTrash></FaTrash></button>
                                    </th>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>
                <div className="flex justify-end gap-16">
                    <h1 className="text-xl ">Sub Total: ${calculateSubtotal()}</h1>
                    <Link>

                        <button className="mr-36 bg-orange-400 p-1 px-4 font-semibold rounded-md text-white">Check Out</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderItemReview;