import { useContext } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";
import Swal from "sweetalert2";


const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const handleAddedClasses = (event) => {
        event.preventDefault()
        const form = event.target
        const photo = form.photo.value
        const name = form.name.value
        const category = form.category.value
        const sub_category = form.sub_category.value
        const email = user ? user.email : form.email.value;
        const price = parseFloat(form.price.value)
        const addClasses = { photo, name, email, price,category,sub_category }
        fetch('https://summer-school-server-tau.vercel.app/addClasses', {
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
        <div className='bg-slate-300 p-4 add_products text-black'>
            <form onSubmit={handleAddedClasses}>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Give a Photo url?</span>
                        </label>
                        <input type="url" name='photo' placeholder="Photo Url" className="input input-bordered w-full max-w-xs text-black" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class Name?</span>
                        </label>
                        <input type="text" name='name' placeholder="added a class name" className="input input-bordered w-full max-w-xs text-black" required />
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
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" className="select select-bordered w-full max-w-xs text-black" required>
                            <option value="">Select a Category</option>
                            <option value="Value 1">mobile</option>
                            <option value="Value 2">adapter</option>
                            <option value="Value 3">macbook</option>
                            <option value="Value 3">watch</option>
                            <option value="Value 3">airpods</option>
                            <option value="Value 3">headphones</option>
                            <option value="Value 3">speakers</option>
                            <option value="Value 3">earphone</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs text-black">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="sub_category" className="select select-bordered w-full max-w-xs" required>
                            <option value="">Select a Sub_Category</option>
                            <option value="Value 1">samsung</option>
                            <option value="Value 1">iphone</option>
                            <option value="Value 1">ipad</option>
                            <option value="Value 2">realme</option>
                            <option value="Value 3">asus</option>
                            <option value="Value 3">google</option>
                            <option value="Value 3">xiaomi</option>
                            <option value="Value 3">oneplus</option>
                            <option value="Value 3">infinix</option>
                            <option value="Value 3">vivo</option>
                            <option value="Value 3">zte</option>
                            <option value="Value 3">apple-adapter</option>
                            <option value="Value 3">anker_adapter</option>
                            <option value="Value 3">samsung-adapter</option>
                            <option value="Value 3">huawei_adapter</option>
                            <option value="Value 3">apple_macbook</option>
                            <option value="Value 3">samsung_watch</option>
                            <option value="Value 3">apple_watch</option>
                            <option value="Value 3">apple_airpods</option>
                            <option value="Value 3">amazone_airpods</option>
                            <option value="Value 3">samsung_airpods</option>
                            <option value="Value 3">oneplus_airpods</option>
                            <option value="Value 3">akg_headphones</option>
                            <option value="Value 3">akg_headphones</option>
                            <option value="Value 3">anker_headphones</option>
                            <option value="Value 3">xiaomi_headphones</option>
                            <option value="Value 3">amazon_speakers</option>
                            <option value="Value 3">apple_speakers</option>
                            <option value="Value 3">jbl_speakers</option>
                            <option value="Value 3">marshall_speakers</option>
                            <option value="Value 3">anker_earphone</option>
                            <option value="Value 3">samsung_earphone</option>
                            <option value="Value 3">xiaomi_earphone</option>
                            <option value="Value 3">oneplus_earphone</option>
                            <option value="Value 3">new_arrival</option>
                            <option value="Value 3">best_deal</option>
                            <option value="Value 3">best_sellers</option>
                        </select>
                    </div>

                </div>
                <input type="submit" className='btn btn-block mt-4' value="Add Toy" />
            </form>

        </div>
    );
};

export default AddProducts;