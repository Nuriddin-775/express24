import React, { useEffect, useState } from 'react';
import MainProduct from '../MainProduct';
import { GetProducts } from 'src/utils';

function HomeProducts() {
  const [products, setProducts] = useState([]);

  const GetList = async () => {
    setProducts(await GetProducts());
  };

  useEffect(() => {
    GetList();
  }, []);

  return (
    <div>
      <MainProduct />
    </div>
  );
}

export default HomeProducts;
