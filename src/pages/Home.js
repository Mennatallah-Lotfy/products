import React from 'react'
import theproducts from '../products.json'
import {Card,CardHeader,CardBody,CardTitle,CardText} from 'reactstrap'

function Home() {
// const[product,setproduct]=useState([])






  return (
    <div className='row justify-content-evenly'>
{theproducts.map((m)=>(
  <Card
  key={m.id}
    className="my-2 col-3 "
    color="danger"
    inverse
    style={{
      width: '18rem'
    }}
  >
    <CardHeader  tag="h4">
      {m.name}
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
       {m.price}$
      </CardTitle>
      <CardText>
       number of items available : {m.count}
      </CardText>
    </CardBody>
  </Card>
))}
    </div>
  )
}

export default Home