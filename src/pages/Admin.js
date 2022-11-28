import React, { useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import {Table} from 'reactstrap';
// import axios from "axios";
import theproducts from '../products.json'

// import Swal from 'sweetalert2';

function Admin() {

  const [products,setproducts]=useState([]);
  const [change,setchange]=useState(0);


  
  
  // const del=(product)=>{
  //   Swal.fire({
  //     background:"black",
  //     color:"white",
  //     iconColor:"red",
  //     title: 'Are you sure you want to delete it?',
  //     text: "You won't be able to revert this!",
  //     icon: 'question',
  //     showCancelButton: true,
  //     confirmButtonColor: 'green',
  //     cancelButtonColor: 'red',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) { 
  //         Swal.fire({
  //         titleText:'Deleted!',
  //         text:'Your file has been deleted.',
  //         icon:'success',
  //         background:"black",
  //         color:"white",
  //         iconColor:"green",
  //         confirmButtonColor: 'green',
  //         }).then((RES)=>{
  //           if (RES.isConfirmed){
  //                 axios({
  //                 method:"delete",
  //                 url:`http://localhost:4000/products/${product.id}`
  //               }); 
  //               setchange(change+1);
  //              // console.log(change)
  //               axios({
  //                 method:"get",
  //                 url:"http://localhost:4000/products"
  //               }).then((data)=>{
  //                 setproducts(data.data)
  //               });
  //           }
  
  //         })
         
  //     }
  //   })
  
     
  // }
  
  const del=(product)=>{
 //   axios({
//     method:"delete",
//     url:`http://localhost:4000/products/${product.id}`
//   }); 
theproducts.splice(theproducts.indexOf(theproducts.filter((f)=>{return f.id===product.id})[0]),1);
    setchange(change+1);
  }
  
  
  
  useEffect(()=>{
    // axios({
    //   method:"get",
    //   url:"http://localhost:4000/products"
    // }).then((data)=>{
    //   setproducts(data.data)
    // });
    setproducts(theproducts)
  },[change])
  

  return (
    <div>
       <NavLink to={'/NewProduct'}> <Button color='success mb-5'>add new product</Button></NavLink>
       <Table className="table-dark" bordered>
  <thead>
    <tr>
    <th>
        #
      </th>
      <th>
        name
      </th>
      <th>
      items
      </th>  
      <th>
        price
      </th>
      <th className='text-center'>
        options
      </th>
    </tr>
  </thead>
  {products.map((product)=>( 
  <tbody key={product.id}>
    <tr className="table-dark" >
    <td>
        {product.id}
      </td>
      <td>
        {product.name}
      </td>
      <td>
      {product.count} 
      </td>
      <td>
        {product.price}
      </td>
      <td className='d-flex justify-content-evenly'>
      <Button onClick={()=>{del(product)}}  color="danger">del</Button>
      <Link to={`/EditProduct/${product.id}`} ><Button color='warning'>edit</Button></Link>
      <Link to={`/ProductDetail/${product.id}`}><Button color='primary'>view</Button></Link>      
      </td>
    </tr>
  </tbody>
   ))}
</Table>
    </div>
  )
}

export default Admin