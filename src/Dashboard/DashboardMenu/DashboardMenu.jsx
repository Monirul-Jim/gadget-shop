import { Link, Outlet } from "react-router-dom";
import { FaAddressBook, FaHome, FaUsers, FaWallet } from 'react-icons/fa';
import useAdmin from "../../hooks/useAdmin/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";
import useSeller from "../../hooks/useSeller/useSeller";

const DashboardMenu = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin();
    const [isSeller] = useSeller()
    return (
        <div className="drawer lg:drawer-open space-x-4">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side text-white bg-gray-800">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className='mb-5'>
                    <div className='flex justify-center mt-5 mb-2'><img className='rounded-full' src={
                        user?.photoURL ||
                        "https://img.freepik.com/free-icon/user_318-159711.jpg"
                    } alt='No one Here' width={100} height={100}></img></div>
                    <div>
                        <h2 className='text-center text-xl'>{user?.displayName || "Profile Name"}</h2>
                        <p className='text-center text-sm italic'>{user?.email}</p>
                    </div>
                </div>
                <ul className="menu p-4 w-80">
                    {isAdmin ? (
                        <>
                            <li className="text-2xl">
                                <Link ><FaHome></FaHome> Admin Home</Link>
                            </li>
                            <li className="text-2xl">
                                <Link to='/dashboard-for-all/all-user-collection'><FaUsers></FaUsers>All User</Link>
                            </li>
                        </>
                    ) : isSeller ? (
                        <>
                            <li className="text-2xl">
                                <Link to="/dashboard-for-all/sellerHome"><FaHome></FaHome>Seller Home</Link>
                            </li>
                            {/* <li className="text-2xl">
                                <Link><FaAddressBook></FaAddressBook></Link>
                            </li> */}
                            <li className="text-2xl">
                                <Link to='/dashboard-for-all/manageOrderedProducts'><FaWallet></FaWallet>Ordered Products</Link>
                            </li>
                            <li className="text-2xl">
                                <Link to='/dashboard-for-all/addProduct'><FaWallet></FaWallet>Add Products</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="text-2xl">
                                <Link to='/dashboard-for-all/userHome'><FaHome></FaHome> User Home</Link>
                            </li>
                            <li className="text-2xl">
                                <Link to="/dashboard-for-all/userOrderedItem">Ordered Products</Link>
                            </li>
                        </>
                    )}
                    <div className="divider"></div>
                    <li className="text-2xl"><Link to="/">Home</Link> </li>
                </ul>

            </div>
        </div >
    );
};

export default DashboardMenu;