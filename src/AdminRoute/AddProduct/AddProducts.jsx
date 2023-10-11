import { useContext } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";
import Swal from "sweetalert2";
import moment from "moment";


const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const handleAddedClasses = (event) => {
        event.preventDefault()
        const form = event.target
        const product_url = form.product_url.value
        const product_name = form.product_name.value
        const category = form.category.value
        const best = form.best.value
        const sub_category = form.sub_category.value
        const email = user ? user.email : form.email.value;
        const price = parseFloat(form.price.value)
        const ram_rom = form.ram_rom.value
        const currentDateAndTime = moment().format("YYYY-MM-DD HH:mm:ss")
        const addClasses = { product_url, product_name, ram_rom, email, price, category, sub_category, best, date_added: currentDateAndTime }
        fetch('https://gadget-shop-server.vercel.app/seller-added-product', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addClasses)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset()
                    Swal.fire({
                        title: 'Congratulation!',
                        text: 'You have added a class',
                        icon: 'success',
                        confirmButtonText: 'Go Back'
                    })
                }
            })


    }
    return (
        <div className="bg-slate-300 add-product">
            <div className=' p-8  text-black mt-20 container mx-auto'>
                <p className=" text-2xl font-serif text-center mt-10 mb-16">---------ADD A PRODUCT--------------</p>
                <form onSubmit={handleAddedClasses} className="container mx-auto" >
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Give a Photo url?</span>
                            </label>
                            <input type="url" name='product_url' placeholder="Photo Url" className="input input-bordered w-full max-w-xs text-black" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name='product_name' placeholder="product name" className="input input-bordered w-full max-w-xs text-black" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered w-full max-w-xs text-black" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name='price' placeholder="price" className="input input-bordered w-full max-w-xs text-black" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Ram/Rom</span>
                            </label>
                            <input type="text" name='ram_rom' placeholder="Ram/Rom" className="input input-bordered w-full max-w-xs text-black" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select name="category" className="select select-bordered w-full max-w-xs text-black" required>
                                <option value="">Select a Category</option>
                                <option value="mobile">Mobile</option>
                                <option value="adapter">Adapter</option>
                                <option value="macbook">Macbook</option>
                                <option value="watch">Watch</option>
                                <option value="airpods">Airpods</option>
                                <option value="headphones">Headphones</option>
                                <option value="speakers">Speakers</option>
                                <option value="earphone">Earphone</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs text-black">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select name="sub_category" className="select select-bordered w-full max-w-xs" required>
                                <option value="">Select a Sub_Category</option>
                                <option value="samsung">samsung</option>
                                <option value="iphone">iphone</option>
                                <option value="ipad">ipad</option>
                                <option value="Value 2">realme</option>
                                <option value="realme">asus</option>
                                <option value="google">google</option>
                                <option value="xiaomi">xiaomi</option>
                                <option value="oneplus">oneplus</option>
                                <option value="infinix">infinix</option>
                                <option value="vivo">vivo</option>
                                <option value="zte">zte</option>
                                <option value="apple_adapter">apple_adapter</option>
                                <option value="anker_adapter">anker_adapter</option>
                                <option value="samsung_adapter">samsung-adapter</option>
                                <option value="huawei_adapter">huawei_adapter</option>
                                <option value="apple_macbook">apple_macbook</option>
                                <option value="samsung_watch">samsung_watch</option>
                                <option value="apple_watch">apple_watch</option>
                                <option value="apple_airpods">apple_airpods</option>
                                <option value="amazone_airpods">amazone_airpods</option>
                                <option value="samsung_airpods">samsung_airpods</option>
                                <option value="oneplus_airpods">oneplus_airpods</option>
                                <option value="akg_headphones">akg_headphones</option>
                                <option value="akg_headphones">akg_headphones</option>
                                <option value="anker_headphones">anker_headphones</option>
                                <option value="xiaomi_headphones">xiaomi_headphones</option>
                                <option value="amazon_speakers">amazon_speakers</option>
                                <option value="apple_speakers">apple_speakers</option>
                                <option value="jbl_speakers">jbl_speakers</option>
                                <option value="marshall_speakers">marshall_speakers</option>
                                <option value="anker_earphone">anker_earphone</option>
                                <option value="samsung_earphone">samsung_earphone</option>
                                <option value="xiaomi_earphone">xiaomi_earphone</option>
                                <option value="oneplus_earphone">oneplus_earphone</option>
                                <option value="new_arrival">new_arrival</option>
                                <option value="best_deal">best_deal</option>
                                <option value="best_sellers">best_sellers</option>
                            </select>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Best Sellers/Best Deal/New Arrival</span>
                            </label>
                            <select name="best" className="select select-bordered w-full max-w-xs text-black">
                                <option value="">Select</option>
                                <option value="pre-order">pre-order</option>
                                <option value="new_launching">new_arrival</option>
                                <option value="new_arrival">popular Product</option>
                                <option value="best_sellers">best_sellers</option>
                                <option value="best_deal">best_deal</option>

                            </select>
                        </div>

                    </div>
                    <input type="submit" className='btn ml-[45%] mt-8' value="Add Product" />
                </form>

            </div>
        </div>
    );
};

export default AddProducts;