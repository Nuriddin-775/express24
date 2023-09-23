import { useEffect, useState } from 'react';
import Header from './header';
import './home.scss';
import { GetShops } from 'src/utils';
import DiscountCarousel from 'src/components/discountCarousel/discountCarousel';
import ShopsCarousel from 'src/components/shopCarousel/shopsCarousel';

function Home() {
  const [shops, setShops] = useState([]);

  const GetList = async () => {
    setShops(await GetShops());
  };

  useEffect(() => {
    GetList();
  }, []);

  return (
    <div className="home">
      <Header />
      <DiscountCarousel />
      <ShopsCarousel />
    </div>
  );
}

export default Home;
