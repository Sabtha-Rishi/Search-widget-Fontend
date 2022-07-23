import React from 'react'
import api from '../api/requests'

const login = ({ setIsLoggedin }) => {
  return (
    <div className='login-container'>
        
        <button
            className="login-btn"
            value='Login'
            id='wishlist-btn'
            onClick={() => {
                
                api.login(setIsLoggedin)
            
            }}
        >
            Login for Wishlist
        </button>

    </div>
  )
}

export default login