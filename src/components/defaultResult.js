import React from 'react'
import Products from './product'

const defaultResult = ({ data, isLoggedin, wishlist}) => {
  console.log(wishlist)
  return (
    <> 
        Oops! We could not find the product you have searched.

        <h1>Wishlist</h1>

        {
          wishlist.length >0 ?
          wishlist.map((item)=> (
            <Products 
                key = {item._id}
                item = {item}
                wishlist = {wishlist}
            />
        ))

        :
        <p> No Products in your wishlist</p>
        }

        <h1>Bestsellers</h1>
        {
            data.map((item)=> (
                <Products 
                    key = {item._id}
                    item = {item}
                    wishlist = {wishlist}
                />
            ))
        }
    </>
    
  )
}

export default defaultResult