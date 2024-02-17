// Item.js

import React from 'react';

const Item = () => {
  // Initialize itemData with an object that has the 'isInCart' property
  const itemData = {
    isInCart: true, // Set to an appropriate value or undefined.
  };

  return (
    <div>
      {/* Safely access isInCart using optional chaining */}
      <p>{itemData?.isInCart ? 'In Cart' : 'Not In Cart'}</p>
    </div>
  );
};

export default Item;
