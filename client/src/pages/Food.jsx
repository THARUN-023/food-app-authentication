import './Food.css';
import { useState } from "react"
// images (ONLY here)
import pizza from "../assets/pizza.jpg";
import burger from "../assets/buger.jpg";
import biryani from "../assets/biryani.jpg";
import pasta from "../assets/pasta.jpg";
import chicken from "../assets/chicken.jpg";
import icecream from "../assets/icecream.jpg";
import sandwich from "../assets/sandwich.jpg";
import noodles from "../assets/noodles.jpg";
import shawarma from "../assets/shawarma.jpg";
import fries from "../assets/fires.jpg";
import salad from "../assets/salad.jpg";
import raspberrycake from "../assets/raspberrycake.jpg";
import pastasalad from "../assets/pastasalad.jpg";
import curlyfries from "../assets/curlyfries.jpg";
import rawvegetable from "../assets/rawvegetables.jpg";


function Food() {
  const foods = [
    { id: 1, name: "Pizza", price: 200, img: pizza },
    { id: 2, name: "Burger", price: 120, img: burger },
    { id: 3, name: "Biryani", price: 250, img: biryani },
    { id: 4, name: "Pasta", price: 180, img: pasta },
    { id: 5, name: "Chicken", price: 220, img: chicken },
    { id: 6, name: "Ice Cream", price: 100, img: icecream },
    { id: 7, name: "Sandwich", price: 90, img: sandwich },
    { id: 8, name: "Noodles", price: 140, img: noodles },
    { id: 9, name: "Shawarma", price: 160, img: shawarma },
    { id: 10, name: "French Fries", price: 80, img: fries },
    { id: 6, name: "Salad", price: 150 , img: salad },
    { id: 7, name: "Raspberry Cake", price: 90, img: raspberrycake },
    { id: 8, name: "Pasta Salad", price: 140, img: pastasalad },
    { id: 9, name: "Curly Fries", price: 160, img: curlyfries },
    { id: 10, name: "Raw Vegetable", price: 80, img: rawvegetable }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <h1>🍔 Food App</h1>
        <input type="text" placeholder="Search food..." />
        <button className="login-btn">Login</button>
      </header>

      {/* FOOD LIST */}
      <h2 className="title">Food Menu</h2>
      <div className="food-grid">
        {foods.map((food) => (
          <div className="food-card" key={food.id}>
            <img src={food.img} alt={food.name} />
            <h3>{food.name}</h3>
            <p>₹{food.price}</p>
            <button onClick={() => addToCart(food)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* CART */}
      <h2 className="title">🛒 Cart</h2>
      <div className="cart">
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item, index) => (
            <p key={index}>
             {item.name} - ₹{item.price}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default Food;