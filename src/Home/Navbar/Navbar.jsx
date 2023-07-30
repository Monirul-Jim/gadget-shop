// import { useContext } from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";
import image from '../../assets/shop-logo.webp'
import shop from '../../assets/shop.webp'
import users from '../../assets/user.webp'
import cart from '../../assets/cart.webp'
import gift from '../../assets/gift.webp'


const Navbar = ({ toggleTheme }) => {
  const { user, logOut } = useContext(AuthContext)
  const [showLogout, setShowLogout] = useState(false);
  // const [course] = useCourses()


  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }
  const handlePhotoClick = () => {
    setShowLogout(prevState => !prevState);
  };

  const handleLogoutButtonClick = () => {
    handleLogout();
    setShowLogout(false);
  };
  const navOptions = (
    <ul className="flex flex-col nav_options space-y-4 lg:space-y-0 lg:flex-row lg:items-center">
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/instructor"> <img className="h-8" src={gift} alt="" />
          Offers
          <br />
          Latest Offers
        </Link>
      </li>
      <li>
        <Link to="/classes"> <img className="h-8" src={cart} alt="" />
          Cart
          <br />
          Add Item
        </Link>
      </li>
      <li>
        <Link to="/classes"> <img className="h-8" src={shop} alt="" />
          Pre-Order
          <br />
          Order Today
        </Link>
      </li>
      {/* {
              user && <li className="text-xl"><Link to='dashboard'>Dashboard
                  <div className="badge badge-secondary">+{course?.length || 0}</div>
              </Link></li>
          } */}
      <li>
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onChange={toggleTheme} />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </li>
      <div>

        {user && (
          <img
            title={user.displayName}
            className="h-12 w-12 rounded-full"
            src={user.photoURL}
            alt="Profile Picture"
            onClick={handlePhotoClick}
          />
        )}

        {showLogout && user && (
          <li className="list-none">
            <button onClick={handleLogoutButtonClick}>
              Logout
            </button>
          </li>
        )}

        {!user && (
          <li className="list-none">
            <Link to="/login"> <img className="h-9" src={users} alt="" />
              <button>
                Account
                <br />
                Register/Login
              </button>
            </Link>
          </li>
        )}
      </div>

      {/* {
                       user ? <li> <Link><button onClick={handleLogout} className="text-xl">Logout</button></Link></li> :
                           <li className="list-none"> <Link to='/login'><button className="text-xl">Login</button></Link></li>
                   }   */}
    </ul>
  );
  return (
    <div>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown" style={{  zIndex: '9999' }}>
            {/* style={{  zIndex: '9999' }} */}
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white" >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <Link className=""><img className="mr-8 h-12 mt-1" src={image} alt="" /></Link>
          <div className="form-control ml-6">
            <input type="text" placeholder="Search" className="input input-accent w-24 md:w-auto" />
          </div>
          <button className="btn btn-primary mr-6 ml-2">Search</button>
        </div>

        <div className="navbar-center hidden lg:flex  justify-start">
          <ul className="menu menu-horizontal px-1 text-white">
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;