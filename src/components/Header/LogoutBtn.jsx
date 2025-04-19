import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrtie/auth'
import {logout} from '../../store/auth'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()
        .then(() =>{
            dispatch(logout())
        }
        )
        
    }
  return (
   <button className='inline-block font-bold px-6 py-2 text-white border-2 border-transparent rounded-xl duration-200 hover:border-white hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
    onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn
