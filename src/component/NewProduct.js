import React, { useState } from 'react'
import {Input,FormGroup,Label,Button,Form} from 'reactstrap'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import theproducts from '../products.json'

const NewProduct = () => {

const [name,setname]=useState("")
const [price,setprice]=useState(0)
const [count,setcount]=useState(0)
const [id,setid]=useState(theproducts.map((m)=>{return m.id}))
const navigat=useNavigate()

const add = (e) => {
    e.preventDefault();
if(name!==''&&count!==0&&price!==0){
    // axios({
    //     method:"post",
    //     url:"http://localhost:4000/products",
    //     data:{
    //         name:name, 
    //         count:count,
    //         price:price
    //     }
    //   }).then((data)=>{
    //     navigat('/Admin')
    //   })
theproducts.push({name:name,count:count,price:price,id:Math.max(...id)+1})
navigat('/')
}
      
};



    return (
    <div>
      <h1 className='text-center my-2'>Add new produt</h1>
 <Form onSubmit={add}>
  <FormGroup>
    <Label for="name">
      name
    </Label>
    <Input
      id="name"
      name="name"
      placeholder="name"
      type="text"
      value={name}
      onChange={(e)=>{setname(e.currentTarget.value)}}
    />
  </FormGroup>
  <FormGroup>
    <Label for="price">
      price
    </Label>
    <Input
      id="price"
      name="price"
      placeholder="price"
      type="number"
      value={price}
      onChange={(e)=>{setprice(e.currentTarget.value)}}
    />
  </FormGroup>
  <FormGroup>
    <Label for="count">
      count
    </Label>
    <Input
      id="count"
      name="count"
      placeholder="count"
      type="number"
      value={count}
      onChange={(e)=>{setcount(e.currentTarget.value)}}
    />
  </FormGroup>
  
  <Button type='submit'>
    Submit
  </Button>
</Form>
    </div>
  )
}

export default NewProduct;