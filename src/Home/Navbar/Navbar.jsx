/* eslint-disable no-unused-vars */
// import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";
import image from '../../assets/shop-logo.webp'
import shop from '../../assets/shop.webp'
import users from '../../assets/user.webp'
import cart from '../../assets/cart.webp'
import gift from '../../assets/gift.webp'
import useGetProduct from "../../hooks/useGetProduct";
import { IoSearchSharp } from "react-icons/io5";


const Navbar = ({ toggleTheme }) => {
  const { user, logOut } = useContext(AuthContext)
  const [showLogout, setShowLogout] = useState(false);
  // const [course] = useCourses()
  const [isOpen, setIsOpen] = useState(false);
  const [product] = useGetProduct()

  const [showSpinner, setShowSpinner] = useState(false);

  const toggleDropdown = () => {
    setShowSpinner(true);
    setIsOpen(!isOpen);
    setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
  };



  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    setSearching(true)
    fetch(`http://localhost:5000/search-product/${searchText}`)


      .then(res => res.json())
      .then(data => {
        setSearchResults(data);
        document.getElementById('my_modal_3').showModal();

      })
      .finally(() => {
        setSearching(false)
      })
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setShowSpinner(false);
    }
  }, [isOpen]);
  const handleLogoutButtonClick = () => {
    logOut();
    setShowLogout(false);
  };
  const navOptions = (
    <ul className="flex flex-col nav_options space-y-4 lg:space-y-0 lg:flex-row lg:items-center">
      <li className="text-white">
        <Link> Home</Link>
      </li>
      <li>
        <Link > <img className="h-8" src={gift} alt="" />
          Offers
          <br />
          Latest Offers
        </Link>
      </li>
      <li>
        <Link to='/order-item-review' > <img className="h-8" src={cart} alt="" />
          <div className="text-center">
            <span> Cart({product.length || 0})</span>
            <br />
            Add Item
          </div>
        </Link>
      </li>
      <li>
        <Link > <img className="h-8" src={shop} alt="" />
          Pre-Order
          <br />
          Order Today
        </Link>
      </li>


      <li><label className="swap swap-rotate">

        {/* this hidden checkbox controls the state */}
        <input type="checkbox" onChange={toggleTheme} />

        {/* sun icon */}
        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

        {/* moon icon */}
        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

      </label></li>



      {user ? (
        <div className="relative mt-2 md:mt-0 ml-4">
          <button
            type="button"
            className="flex items-center text-gray-700 md:order-2"
            id="user-menu-button"
            aria-expanded={isOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            {user && (
              <img
                title={user.displayName}
                className="h-12 w-12 rounded-full"
                src={user.photoURL}
                alt="Profile Picture"
              />
            )}
          </button>
          <div
            className={`absolute right-0 mt-2 w-48 bg-white dark:bg-black divide-y divide-gray-100 rounded-sm shadow  ${isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
              } transition-opacity duration-300`}
            id="user-dropdown"
          >
            {showSpinner ? (
              <div className="flex justify-center p-4 ">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <ul
                className="py-2 bg-white  dark:bg-black"
                aria-labelledby="user-menu-button"
              >
                <li>
                  <Link
                    to="dashboard-for-all"
                    className="block px-4 py-2 z-50 text-2xl text-black dark:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 z-50 py-2 text-2xl text-black dark:text-white"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-2xl text-black dark:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <div className="list-none text-2xl text-black dark:text-white">
                    <button onClick={handleLogoutButtonClick}>
                      Logout
                    </button>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="list-none">
            <Link to="/login">
              <img className="h-9" src={users} alt="" />
              <button>
                Account
                <br />
                Register/Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </ul >
  );
  return (
    <div>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown" style={{ zIndex: '9999' }}>
            {/* style={{  zIndex: '9999' }} */}
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white" >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <Link className=""><img className="mr-8 h-12 mt-1" src={image} alt="" /></Link>
          {/* <div >
            <input
              onChange={(e) => setSearchText(e.target.value)}
              onKeyPress={handleKeyPress}
              type="text"
              placeholder="Search"
              className="input input-accent bg-transparent border border-gray-500 text-white w-24 md:w-auto"
            />
          </div>
          <button onClick={handleSearch} className="btn text-3xl ml-2">
            {searching ? 'Searching...' : <IoSearchSharp></IoSearchSharp>}
          </button> */}

          <div className="form-control">
            <div className="input-group">
              <input type="text" onChange={(e) => setSearchText(e.target.value)}
                onKeyPress={handleKeyPress} placeholder="Search…" className="input input-bordered" />
              <button onClick={handleSearch} className="btn btn-square">
                {searching ? 'Searching...' : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}

              </button>
            </div>
          </div>
        </div>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box w-11/12 max-w-5xl">
            <form method="dialog ">
              {/* if there is a button in the form, it will close the modal */}
              <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
            </form>
            <h3 className="font-bold text-lg">Search Results</h3>
            <ul className="grid grid-cols-1 lg:grid-cols-4">


              {
                searching ? (
                  <div className="text-center">Searching...</div>
                ) :
                  (
                    searchResults.map((result, index) => (
                      <div key={result._id} >
                        <Link to={`/single-product/${result._id}`} onClick={() => document.getElementById('my_modal_3').close()}>
                          <div className=" mt-8 max-w-lg mx-auto card  relative w-48 h-72  rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-transparent hover:border-blue-500  hover:shadow-blue-300">
                            <img className=" mx-auto" src={result.product_url} alt="" />
                            <div className=" ">
                              <h1 className="text-center">{result.product_name}</h1>
                              <p className="text-xl text-center">${result.price}</p>
                            </div>
                          </div>
                        </Link>

                      </div>

                    ))
                  )
              }
            </ul>
          </div>
        </dialog>

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