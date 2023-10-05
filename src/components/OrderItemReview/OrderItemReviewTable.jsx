
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import useAxiosSecure from '../../hooks/useAxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';
import { useState } from 'react';

const OrderItemReviewTable = ({ item, refetch }) => {
    const { menuItemId, product_url, product_name, price } = item
    const [count, setCount] = useState(1);
    const [showTotal, setShowTotal] = useState(false);




    const incrementValue = () => {
        setCount(count + 1);
        setShowTotal(true);
    };

    const decrementValue = () => {
        if (count > 1) {

            setCount(count - 1);
            setShowTotal(true);
        }
    };

    const totalPrice = count * item.price;
    const [axiosSecure] = useAxiosSecure()

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
    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={product_url} alt="Phone Pic" />
                            </div>
                        </div>
                    </div>
                </td>
                <td><h1>${product_name}</h1></td>
                <td>
                    <button onClick={incrementValue}><FaPlus></FaPlus></button>
                    <input className="w-6 text-center" type="text" value={count} readOnly />
                    <button onClick={decrementValue}><FaMinus></FaMinus></button>
                </td>
                <td>${price}</td>
                <td>{showTotal ? `$${totalPrice}` : `$${item.price}`}</td>
                <th>
                    <button onClick={() => handleDeleteProductItem(item)}><FaTrash></FaTrash></button>
                </th>
            </tr>
        </>
    );
};

export default OrderItemReviewTable;