import React from 'react';

const ItemList = () => {
  const items = [
    'Item 1 - Elegant Dress',
    'Item 2 - Punjabi Suit',
    'Item 3 - Traditional Saree',
    'Item 4 - Wedding Dress',
    'Item 5 - Casual Wear'
  ];

  return (
    <div>
      <h2>Items for Sale</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
