import axios from 'axios'

axios.defaults.withCredentials = true

const fetchProducts = async (setProducts)=>{

    try{
      const response = await axios.create().get('http://localhost:8000/products')
      setProducts(response.data)
    } catch(err){
        console.log(err.message)
    }
  }

const login = async (setIsLoggedin)=>{

    try{
        const response = await axios.create().post('http://localhost:8000/accounts/login',{
            email:'rishi@gmail.com',
            password:'rishi1234',
        }, { withCredentials: true})

        if (response.data.isLoggedin){
            setIsLoggedin(true)
        }
    } catch(err){
        console.log(err.message)
    }
}


const handleClickWishlist = async (productID)=>{
    try{
        const response = await axios.create().post('http://localhost:8000/products/add-to-wishlist',{
            productID : productID,
        })

        return true
    } catch(err){
        console.log(err.message)
    }
    
}

const fetchWishlist = async (setWishlist)=>{
    try{
        const response = await axios.create().get('http://localhost:8000/products/wishlist',{})
        console.log(response.data)
        setWishlist(response.data)
      } catch(err){
          console.log(err.message)
      }
}

const api = {

    fetchProducts,
    login,
    handleClickWishlist,
    fetchWishlist
}
export default api