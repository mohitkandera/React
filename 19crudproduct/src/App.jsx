import React, { useState } from 'react'
import AddFoodProductForm from './Addfoodproductform';
import FoodProductList from './Foodproductlist';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Apple Pie', description: 'Delicious homemade apple pie.', price: 12.50 },
    { id: 2, name: 'Burger', description: 'Classic beef burger with cheese.', price: 8.99 },
  ]);

  const addProduct = (product) => {
    // Generate a unique ID (in a real app, this would be handled by a backend API/database)
    product.id = Date.now(); 
    setProducts([...products, product]);
  };

  // Other CRUD operations (read, update, delete) would also be defined here

  return (
    <div className="App">
      <h1>Food Product Management</h1>
      <AddFoodProductForm addProduct={addProduct} />
      <FoodProductList products={products} />
    </div>
  );
}

export default App;
