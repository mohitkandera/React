import React from 'react';

function FoodProductList({ products }) {
  return (
    <div className="product-list">
      <h2>Available Products</h2>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              {/* Add Edit and Delete buttons/functionality here */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FoodProductList;
