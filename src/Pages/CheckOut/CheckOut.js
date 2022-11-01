import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
  const {title} = useLoaderData();
  return (
    <div>
      <h3>This is CheckOut PAge {title}</h3>
    </div>
  );
};

export default CheckOut;