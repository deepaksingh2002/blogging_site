import React from 'react';
import {Logo, Contaner, LogoutBtn}from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate();
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-post",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='py-4 shadow bg-primary text-white w-full z-50 '>
      <Contaner>
        <nav className='flex flex-col sm:flex-row items-center justify-between gap-4'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='50px' />
            </Link>
          </div>
          <ul className='flex flex-col sm:flex-row items-center gap-3'>
            {navItems.map((item) => item.active ? (
              <li key={item.name}>
                <button onClick={() => navigate(item.slug)} 
                  className='inline-block mx-3 font-bold px-6 py-2 duration-200  bg-accent text-white hover:bg-primary rounded-full'>
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
          </ul>
        </nav>
      </Contaner>
    </header>
  )
}

export default Header
