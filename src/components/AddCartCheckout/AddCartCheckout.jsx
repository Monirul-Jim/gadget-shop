


const AddCartCheckout = () => {
    return (
        <>
            <h1>Customer Information</h1>
            <div>
                <div className="w-full md:w-96">
                    <div className="flex flex-col md:flex-row md:gap-8">
                        <div className="mb-4 md:w-1/2">
                            <label className="text-sm font-semibold">First Name</label>
                            <input type="text" id="first-name" placeholder="Type here" className="input block input-bordered input-primary w-full" />
                        </div>
                        <div className="mb-4 md:w-1/2">
                            <label className="text-sm font-semibold">Last Name</label>
                            <input type="text" id="last-name" placeholder="Type here" className="input block input-bordered input-primary w-full" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="text-sm font-semibold">Email</label>
                        <input type="email" id="email" placeholder="Type here" className="input block input-bordered input-primary w-full" />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm font-semibold">Phone Number</label>
                        <input type="number" id="phone" placeholder="Type here" className="input block input-bordered input-primary w-full" />
                    </div>

                    <div className="flex flex-col md:flex-row md:gap-8 mb-4">
                        <div className="mb-4 md:w-1/2">
                            <label className="text-sm font-semibold">Choose Your Division</label>
                            <select id="division" className="input border border-slate-400 w-full">
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
                            <select id="district" className="input border border-slate-400 w-full">
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
                            <input type="text" id="area" placeholder="Type here" className="input block input-bordered input-primary w-full" />
                        </div>
                        <div className="mb-4 md:w-1/2">
                            <label className="text-sm font-semibold">Post Code</label>
                            <input type="number" id="post-code" placeholder="Type here" className="input block input-bordered input-primary w-full" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="text-sm font-semibold">Address</label>
                        <input type="text" id="address" placeholder="Type here" className="input block input-bordered input-primary w-full" />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm font-semibold">Something That We Can Find Easily</label>
                        <input type="text" id="something" placeholder="Type here" className="input block input-bordered input-primary w-full" />
                    </div>
                </div>






            </div>



        </>
    );
};

export default AddCartCheckout;