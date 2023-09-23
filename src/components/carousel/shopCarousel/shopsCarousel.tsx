import { useEffect, useState } from 'react';
import { GetShops } from 'src/utils';
import UniversalCarousel from '..';
import { Ishop } from '../../type';
import '../caraousel.scss';
import ContentTop from '../../contentTop';

function ShopsCarousel() {
  const [shops, setShops] = useState<Ishop[]>([]);

  const GetList = async () => {
    setShops(await GetShops());
    console.log(await GetShops());
  };

  useEffect(() => {
    GetList();
  }, []);

  return (
    <div className="shopsCarousel">
      <ContentTop name="Магазины" />
      <UniversalCarousel>
        {shops.map((shop) => (
          <div key={shop.id}>
            <img src={shop.cover} alt="shops image" />
            <p>{shop.name}</p>
            <span>{shop.subCategories[0].name}</span>
          </div>
        ))}
      </UniversalCarousel>
    </div>
  );
}

export default ShopsCarousel;
