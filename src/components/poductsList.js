import React from 'react'
import Products from './product'
import Default from './defaultResult'


const ProductList = ({data, search, isLoggedin, wishlist}) => {

  const results = data.filter(item => {
    let key = search.toLowerCase()
    return (item.name.toLowerCase()).includes(key)
      || (item.brand.toLowerCase()).includes(key)
      || (item.category[0]).includes(key)
      || item.price < key
  });

  return (
    <div className= 'product-container' >
        <ul className="productList">

            { results.length ===0 ?
              <Default data = {data} wishlist = {wishlist} isLoggedin = {isLoggedin} />
              :
              results.map((item)=> (
                <Products 
                    key = {item._id}
                    item = {item}
                    wishlist = {wishlist}
                />
              ))
            }
        </ul>
    </div>
  )
}

export default ProductList