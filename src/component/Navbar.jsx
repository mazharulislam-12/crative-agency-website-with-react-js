import React from 'react';

export const Navbar = () => {
    const navItems = [
        <li key="submenu1"><a>Home</a></li>,
        <li key="submenu2"><a>About</a></li>,
        <li key="submenu2"><a>Service</a></li>,
        <li key="submenu2"><a>Protfillo</a></li>,
       
    ];

    return (
        <div className=' bg-dark'>
            <div className="navbar max-w-7xl mx-auto  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" text-white hover:text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className=" text-3xl text-white font-bold"> <span className='text-orange'>A</span>rino</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="  menu menu-horizontal px-1 text-white  ">
                       {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Contact</a>
                </div>
            </div>
        </div>
    );
};
