
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authprovider/AuthProvider";
import Swal from "sweetalert2";
import useGetProduct from "../../hooks/useGetProduct";


const ProductTabFunctionCard = ({ product }) => {
    const { _id, product_url, product_name, price } = product
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [, refetch] = useGetProduct()
    const handleAddToCart = () => {
        // fetch('http://localhost:5000/product-added-database')


        if (user && user.email) {
            const cartItem = { menuItemId: _id, product_name, product_url, price, email: user.email }
            fetch('http://localhost:5000/product-added-database', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${product_name} added on the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }

    return (
        <div className=" mt-8 max-w-lg mx-auto card  relative w-48 h-72  rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-transparent hover:border-blue-500  hover:shadow-blue-300">
            <img className=" mx-auto" src={product_url} alt="" />
            <div className=" ">
                <h1 className="text-center">{product_name}</h1>
                <p className="text-xl text-center">${price}</p>
                <div className="space-x-20 ">
                    <Link to={`/single-product/${_id}`}><button className="bg-orange-400 pb-1  pt-0 absolute bottom-0 font-semibold rounded-md text-white"><p className="px-2">Buy Now</p></button></Link>
                    <button onClick={handleAddToCart} className=" font-semibold pb-1 rounded-md text-orange-400 border absolute bottom-0 border-orange-300"><p className="px-2">Add to Cart</p></button>
                </div>
            </div>
        </div>
    );
};

export default ProductTabFunctionCard;