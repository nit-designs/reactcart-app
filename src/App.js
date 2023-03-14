import { Badge, ButtonToolbar, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
 
  const data = [
    {
      productImage:
        "#",
      productName: "Fancy Product",
      price: "$40.00 - $80.00",
      
    },
    {
      productImage:
        "#",
      productName: "Special Item",
      price:  "$18.00",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      productImage:
        "#",
      productName: "Sale Item",
      price: "$25.00",
      
    },
    {
      productImage:
        "#",
      productName: "Popular Item",
      price: "$40.00",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      productImage:
        "#",
      productName: "Sale Item",
      price: "$50.00 $25.00",
      
    },
    {
      productImage:
        "#",
      productName: "Fancy Product",
      price: "$120.00 - $280.00",
      
    },
    {
      productImage:
        "#",
      productName: "Special Item",
      price: "$20.00 $18.00",
      rating: "⭐⭐⭐⭐⭐",
      
    },
    {
      productImage:
        "#",
      productName: "Popular Item",
      price: "$40.00",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className="cart-value">
      <Button  variant="light">
        🛒CART {count}
      </Button>
      </div>
    <div>
    <h1>Shop in Style</h1>   
    </div>   

     <div className="card-container">
      {data.map((prod, idx)=> <Cards
      idx = {idx}
      prod = {prod}
      setCount= {setCount}
      count = {count}
      />)}

      </div>
    </div>
  );
}

export default App;

function Cards({prod, idx, setCount, count}){
  const [show, setShow] = useState(false);

  function viewOpt(){
    setShow(!show)
  }

  function addToCart(){
    setShow(!show)
    setCount(count + 1)
  }

  function removeFromCart(){
    setShow(!show)
    setCount(count - 1)
  }

  return (
    
    <Card key={idx} className="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prod.productImage} style={{ height: "10rem", width: '23rem', backgroundColor: " rgb(216, 216, 220)" }} />
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text>{prod.price} RS</Card.Text>
        <Card.Text>{prod.rating} </Card.Text>
        {/* conditional rendering */}
        {show ? <Button
          variant="outline-dark"
          onClick={viewOpt}
        >View Options</Button> : ""}
        {" "}


        {!show ? <Button
          variant="outline-dark"
          onClick={addToCart}
        >Add cart</Button> : ""}


        {show ? <Button
          variant="danger"
          onClick={removeFromCart}
        >remove cart</Button> : ""}

      </Card.Body>
    </Card>
  )
}