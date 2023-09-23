import { useEffect, useState } from 'react';
import Header from './header';
import './home.scss';
import PrimaryCarousel from './primaryCarousel';
import { GetProducts, GetShops } from 'src/utils';
import DiscountCarousel from 'src/components/carousel/discountCarousel';

function Home() {
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);

  const GetList = async () => {
    setShops(await GetShops());
    setProducts(await GetProducts());
  };

  useEffect(() => {
    GetList();
  }, []);

  return (
    <div className="home">
      <Header />

      <DiscountCarousel />
    </div>
  );
}

export default Home;
