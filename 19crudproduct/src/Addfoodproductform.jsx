import React, { useState } from 'react';

function AddFoodProductForm({ addProduct }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!name.trim() || !description.trim() || !price) return;

    addProduct({
      name,
      description,
      price: parseFloat(price) // Convert price to a number
    });

    // Clear form fields after submission
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <h2>Add New Product</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price ($):</label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddFoodProductForm;
