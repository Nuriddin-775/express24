import React, { useEffect, useState } from 'react';
import { GetShops } from 'src/utils';
import UniversalCarousel from './universalCarousel';

function ShopsCarousel() {
  const [shops, setShops] = useState([]);

  const GetList = async () => {
    setShops(await GetShops());
  };

  useEffect(() => {
    GetList();
  }, []);

  return (
    <div className="shopsCarousel">
      <UniversalCarousel>{}</UniversalCarousel>
    </div>
  );
}

export default ShopsCarousel;
