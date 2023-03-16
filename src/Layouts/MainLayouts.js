import React from 'react'
import { Outlet } from 'react-router-dom'
import AccountDropdown from '../components/AccountDropdown'
export default  function MainLayouts(props){
 return(
  <>
    <nav>
    <div className='header-logo'>
      <img src='https://www.edigitalagency.com.au/wp-content/uploads/tripadvisor-logo-circle-owl-icon-black-green-858x858.png'></img>
      <span className='header-logo-title'> TripAdvisor</span>
    </div>
    <div className='header-account'>
      <div className='header-account-left'>
        <span className='currency'>USD</span>
        <span className='currency'><img className='map' src=''/></span>
        <span className='notification'><i className="fa-sharp fa-solid fa-bell"></i></span>
      </div>
      <div className='header-account-right'>
        <img  className='user-avatar' src=''/>
        <div className=' dropdown'> Delowar</div>
        <AccountDropdown />
      </div>
    </div>

    </nav>
    <Outlet/>
    {/* Route path,element дочерние элементы, которые будут  между определенными дивами */}
<footer className=" relative bottom-0  w-full inset-x-0 bg-white-50 dark:bg-gray-150">
    
    <div className=" grid grid-cols-2 gap-8 px-4 py-5  md:grid-cols-4">
   <div>
   <div className='header-logo'>
      <img src='https://www.edigitalagency.com.au/wp-content/uploads/tripadvisor-logo-circle-owl-icon-black-green-858x858.png'></img>
      <span className='header-logo-title'> TripAdvisor</span>
    </div>
    <p className='text-lg text-gray-500 px-6 py-7'>
                This is the team that specializes in <br/>
                making sure in the find it a <br/> your interior looks cool
    </p>
   </div>
    <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-700 uppercase dark:text-gray-800">Services</h2>
            <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Travel Booking</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Car Booking</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Flight Booking</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
            </ul>
        </div>
        <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-700 uppercase dark:text-gray-800">Support</h2>
            <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Account</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Legal</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Contact Us</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
            </ul>
        </div>
        <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-700 uppercase dark:text-gray-800">Business</h2>
            <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Success</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">About  Locato</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Blog</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Information</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Travel Guide</a>
                </li>
            </ul>
        </div>
    </div>

</footer>



  </>
 )
}