/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../authprovider/AuthProvider";
const BuyNow = () => {
    const { user } = useContext(AuthContext)
    const loader = useLoaderData()
    const handleConfirmOrder = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const last = form.last.value
        const email = form.email.value
        const number = form.number.value
        const division = form.division.value
        const district = form.district.value
        const area = form.area.value
        const post = form.post.value
        const address = form.address.value
        const feedback = form.feedback.value
        const price = loader?.price
        const image = loader?.product_url
        const product = loader?.product_name;
        const ram = loader?.ram_rom
        const id = loader?._id
        const allAddProduct = { name, last, email, number, division, district, area, post, address, feedback, price, image, product, ram, id }
        fetch('http://localhost:5000/confirm-order-post', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allAddProduct)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result.url);
                window.location.replace(result.url)
            })


    }
    return (
        <div className="flex justify-center lg:mt-48">
            <form onSubmit={handleConfirmOrder} className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="w-full md:w-96">
                    <h1 className="mb-6 mt-6">Customer Information</h1>
                    <div className="flex flex-col md:flex-row md:gap-8">
                        <div className="mb-4 md:w-1/2">
                            <label className="text-sm font-semibold">First Name</label>
                            <input name="name" type="text" id="first-name" placeholder="Type here" className="input block input-bordered input-primary w-full" />
                        </div>
                        <div className="mb-4 md:w-1/2">
                            <label className="text-sm font-semibold">Last Name</label>
                            <input name="last" type="text" id="last-name" placeholder="Type here" className="input block input-bordered input-primary w-full" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="text-sm font-semibold">Email</label>
                        <input name="email" value={user.email} type="email" id="email" placeholder="Type here" className="input block input-bordered input-primary w-full" />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm font-semibold">Phone Number</label>
                        <input name="number" type="number" id="phone" placeholder="Type here" className="input block input-bordered input-primary w-full" />
                    </div>

                    <div className="flex flex-col md:flex-row md:gap-8 mb-4">
                        <div className="mb-4 md:w-1/2">
                            <label className="text-sm font-semibold">Choose Your Division</label>
                            <select name="division" id="division" className="input border border-slate-400 w-full">
                                <option value="">Choose Your Division</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Barisal">Barisal</option>
                                <option value="Chittagong">Chittagong</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Rangpur">Rangpur</option>
                                <option value="Mymensingh">Mymensingh</option>
                            </select>
                        </div>
                        <div className="mb-4 md:w-1/2">
                            <label className="text-sm font-semibold">Choose Your District</label>
                            <select name="district" id="district" className="input border border-slate-400 w-full">
                                <option value="">Choose Your District</option>
                                <option value="Bagerhat">Bagerhat</option>
                                <option value="Bandarban">Bandarban</option>
                                <option value="Barguna">Barguna</option>
                                <option value="Barishal">Barishal</option>
                                <option value="Bhola">Bhola</option>
                                <option value="Bogra">Bogra</option>
                                <option value="Brahmanbaria">Brahmanbaria</option>
                                <option value="Chandpur">Chandpur</option>
                                <option value="Chapainawabganj">Chapainawabganj</option>
                                <option value="Chattogram">Chattogram</option>
                                <option value="Chuadanga">Chuadanga</option>
                                <option value="Cox's Bazar">Cox's Bazar</option>
                                <option value="Cumilla">Cumilla</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Dinajpur">Dinajpur</option>
                                <option value="Faridpur">Faridpur</option>
                                <option value="Feni">Feni</option>
                                <option value="Gaibandha">Gaibandha</option>
                                <option value="Gazipur">Gazipur</option>
                                <option value="Gopalganj">Gopalganj</option>
                                <option value="Habiganj">Habiganj</option>
                                <option value="Jamalpur">Jamalpur</option>
                                <option value="Jashore">Jashore (Jessore)</option>
                                <option value="Jhalokati">Jhalokati</option>
                                <option value="Jhenaidah">Jhenaidah</option>
                                <option value="Joypurhat">Joypurhat</option>
                                <option value="Khagrachari">Khagrachari</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Kishoreganj">Kishoreganj</option>
                                <option value="Kurigram">Kurigram</option>
                                <option value="Kushtia">Kushtia</option>
                                <option value="Lakshmipur">Lakshmipur</option>
                                <option value="Lalmonirhat">Lalmonirhat</option>
                                <option value="Madaripur">Madaripur</option>
                                <option value="Magura">Magura</option>
                                <option value="Manikganj">Manikganj</option>
                                <option value="Meherpur">Meherpur</option>
                                <option value="Moulvibazar">Moulvibazar</option>
                                <option value="Munshiganj">Munshiganj</option>
                                <option value="Mymensingh">Mymensingh</option>
                                <option value="Naogaon">Naogaon</option>
                                <option value="Narail">Narail</option>
                                <option value="Narayanganj">Narayanganj</option>
                                <option value="Narsingdi">Narsingdi</option>
                                <option value="Natore">Natore</option>
                                <option value="Nawabganj">Nawabganj</option>
                                <option value="Netrokona">Netrokona</option>
                                <option value="Nilphamari">Nilphamari</option>
                                <option value="Noakhali">Noakhali</option>
                                <option value="Pabna">Pabna</option>
                                <option value="Panchagarh">Panchagarh</option>
                                <option value="Patuakhali">Patuakhali</option>
                                <option value="Pirojpur">Pirojpur</option>
                                <option value="Rajbari">Rajbari</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Rangamati">Rangamati</option>
                                <option value="Rangpur">Rangpur</option>
                                <option value="Satkhira">Satkhira</option>
                                <option value="Shariatpur">Shariatpur</option>
                                <option value="Sherpur">Sherpur</option>
                                <option value="Sirajganj">Sirajganj</option>
                                <option value="Sunamganj">Sunamganj</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Tangail">Tangail</option>
                                <option value="Thakurgaon">Thakurgaon</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:gap-8">
                        <div className="mb-4 md:w-1/2">
                            <label className="text-sm font-semibold">Area</label>
                            <input name="area" type="text" id="area" placeholder="Type here" className="input block input-bordered input-primary w-full" />
                        </div>
                        <div className="mb-4 md:w-1/2">
                            <label className="text-sm font-semibold">Post Code</label>
                            <input name="post" type="number" id="post-code" placeholder="Type here" className="input block input-bordered input-primary w-full" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="text-sm font-semibold">Address</label>
                        <input name="address" type="text" id="address" placeholder="Type here" className="input block input-bordered input-primary w-full" />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm font-semibold">Something That We Can Find Easily</label>
                        <input name="feedback" type="text" id="something" placeholder="Type here" className="input block input-bordered input-primary w-full" />
                    </div>
                </div>
                <div>
                    {/* <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={loader?.product_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Product Name: {loader?.product_name} {loader?.ram_rom}</h2>
                            <p>Price: {loader?.price}</p>
                        </div>
                    </div> */}
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Ram/Rom</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={loader?.product_url} alt="Phone Pic" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><h1>${loader?.product_name}</h1></td>
                                    <td><h1>{loader?.ram_rom}</h1></td>
                                    <td>${loader?.price}</td>
                                </tr>

                            </tbody>

                        </table>
                    </div>




                    <div className="flex justify-end">
                        <button type="submit" className=" bg-orange-400 p-1 mt-2 px-4 font-semibold rounded-md text-white" >Confirm Order</button>
                    </div>










                </div>
            </form>
        </div>
    );
};

export default BuyNow;