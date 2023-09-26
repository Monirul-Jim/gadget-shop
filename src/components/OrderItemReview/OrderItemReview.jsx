
import { Link } from "react-router-dom";
import useGetProduct from "../../hooks/useGetProduct";
import OrderItemReviewTable from "./OrderItemReviewTable";

const OrderItemReview = () => {
    const [product, refetch] = useGetProduct()
    return (
        <div className="mt-8">
            <div className="flex justify-between">
                <h1 >Shopping Cart</h1>
                <Link >

                    <button className="mr-36 bg-orange-400 p-1 px-4 font-semibold rounded-md text-white">Check Out</button>
                </Link>
            </div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map(item => <OrderItemReviewTable key={item._id} refetch={refetch} item={item} ></OrderItemReviewTable>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default OrderItemReview;