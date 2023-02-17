import axios from "axios";

 export const getProducts = () => {
    return axios
    .get('/api/products')
    .then( res => res.data )
    .catch( err => console.log(err))
}

export const getProductsDetails = (id) => {
    return axios
    .get(`/api/products/${id}`)
    .then( res => res.data )
    .catch( err => console.log(err))
   
}