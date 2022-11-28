// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import theproducts from '../products.json'

const ProductDetail = () => {
    const {ID}=useParams();
    const [product,setproduct]=useState({})

useEffect(()=>{
    // axios({
    //     method:"get",
    //     url:`http://localhost:4000/products/${ID}`
    // }).then((data)=>{
    //     setproduct(data.data)
    // })
    let pro=theproducts.filter((f)=>{return f.id==ID})
    setproduct(pro[0])
   
},[ID])


  return (
    <div className='ms-3'>
        <h1 className='text-center mt-2 mb-4'>product details</h1>
    <div className='detail p-3'>
    <h1>name: {product.name}</h1>
    <h1>price: {product.price}</h1>
    <h1>count: {product.count}</h1>
    </div>
    </div>
  )
}

export default ProductDetail;