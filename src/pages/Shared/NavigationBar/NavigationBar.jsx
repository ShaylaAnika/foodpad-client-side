import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogout = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  }
  return (
    <div className='bg-purple-100'>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <NavLink className={({isActive}) => isActive? 'text-xl font-semibold text-purple-600 mr-4' : 'text-xl font-semibold text-gray-600 mr-4' } to='/' >Home</NavLink>
              <NavLink className={({isActive}) => isActive? 'text-xl font-semibold text-purple-600 mr-4' : 'text-xl font-semibold text-gray-600 mr-4' } to='/blog'>Blog</NavLink>
            </ul>
          </div>
          <p className=" normal-case text-3xl font-bold">CookPad</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink className={({isActive}) => isActive? 'text-xl font-semibold text-purple-600 mr-4' : 'text-xl font-semibold text-gray-600 mr-4' } to='/'>Home</NavLink>
            <NavLink className={({isActive}) => isActive? 'text-xl font-semibold text-purple-600 mr-4' : 'text-xl font-semibold text-gray-600 mr-4' } to='/blog'>Blog</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.photoURL? <img className='w-[35px] h-[35px] rounded-full mr-2' src={user?.photoURL} title= {user?.displayName}  alt= ""/> : ""
          } 
        </div>

          <div>
            {
            user ? <>
              <button onClick={handleLogout} className="btn bg-purple-400 border-none">Log out</button>
            </> :
              <Link to='/login' className="btn bg-purple-400 border-none">Log in</Link>
            }
          </div>

        
      </div>
    </div>
  );
};

export default NavigationBar;