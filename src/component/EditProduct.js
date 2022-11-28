import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {Input,FormGroup,Label,Button,Form} from 'reactstrap'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import theproducts from '../products.json'

const EditProduct = () => {

    const {ID}=useParams();

    const [name,setname]=useState("")
    const [price,setprice]=useState(0)
    const [count,setcount]=useState(0)
    
    const navigat=useNavigate()

    useEffect(()=>{
      // axios({
      //   method:"get",
      //   url:`http://localhost:4000/products/${ID}`,
      // }).then((data)=>{
      //   setname(data.data.name)
      //   setcount(data.data.count)
      //   setprice(data.data.price)
      // }) 
      let pro=theproducts.filter((f)=>{return f.id==ID})
      setname(pro[0].name)
       setcount(pro[0].count)
       setprice(pro[0].price)
    },[ID])


    const edit=(e)=>{
        e.preventDefault();
        if(name!==''&&count!==0&&price!==0){
        // axios({
        //     method:"put",
        //     url:`http://localhost:4000/products/${ID}`,
        //     data:{
        //         name: name, 
        //         count:count,
        //         price:price
        //     }
        //   }).then((data)=>{
        //     navigat('/Admin')
        //   })
        let pro=theproducts.filter((f)=>{return f.id==ID})[0];
     let index=theproducts.indexOf(pro)
     theproducts.splice(index,1,{name:name,price:price,count:count,id:ID});
      // console.log(index,theproducts)
        navigat('/');
        }
    };


    return (
    <div>
         <h1 className='text-center my-2'>Edit produt</h1>
        <Form onSubmit={edit}>
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
        onChange={(e)=>{if(e.currentTarget.value!==''){setname(e.currentTarget.value)}else{setname('')}}}
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
      onChange={(e)=>{if(e.currentTarget.value!=='0'){setprice(e.currentTarget.value)}else{setprice(0)}}}
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
      onChange={(e)=>{if(e.currentTarget.value!=='0'){setcount(e.currentTarget.value)}else{setcount(0)}}}
    />
  </FormGroup>
  
  <Button type='submit'>
    Submit
  </Button>
</Form>
    </div>
  )
}

export default EditProduct;
