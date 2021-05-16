


import { useState } from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
  const [product, setProduct] = useState({
    Name: "mouse",
    price: 200,
    quality: "excellent"
  })
  const update = () => {
    setProduct({ ...product, price: product.price + 50 })
  }
  const degrate = () => {
    setProduct({ ...product, price: product.price + 25 })
  }
  return (
    <div className="container">
      {/*  <Header />
      <Home /> */}
      <div>
        <p>{product.Name}</p>
        <p>{product.price}</p>
        <p>{product.quality}</p>
        <button onClick={update}>Increment</button>
        <button onClick={degrate}>Decrement</button>
      </div>

    </div>
  )
};

export default App;
