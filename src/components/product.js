import React from 'react'
import { FaHeart , FaAlignJustify} from "react-icons/fa";
import api from '../api/requests'

const product = ({ item, wishlist}) => {
  const base64string = btoa(String.fromCharCode(...new Uint8Array(item.img.data.data)))

  var in_wishlist=false

  wishlist.map(product=>{
    if (product._id === item._id){
      in_wishlist = true
    }

   })


  return (
        <li className='product' key= {item.id}>

            <img className='product-thumbnail' src= {`data:image/png;base64,${base64string}`} alt=''> 
            </img>
            <div className='product-details' >
              <label className='product-name'> {item.name} </label>
              <label className='product-brand'> {item.brand} </label>
              <label className='product-price'> Rs. {item.price} </label>
              

              { 
                !in_wishlist && 
                  
              <button
                className="wishlist-btn"
                value='Wishlist'
                id='wishlist-btn'
                onClick={() => {
                  api.handleClickWishlist(item._id) &&
                  <FaAlignJustify />
                }}
              >
                Wishlist <FaHeart/>
              </button>
              }

              {in_wishlist=false}
              

              
            </div>
        </li>
     )
}
export default product