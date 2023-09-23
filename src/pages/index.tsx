import { useEffect, useState } from 'react';
import Header from './header';
import './home.scss';
import { GetShops } from 'src/utils';

function Home() {
  const [shops, setShops] = useState([]);
  const GetShopsList = async () => {
    console.log(await GetShops());
  };
  useEffect(() => {
    GetShopsList();
  }, []);

  return (
    <div className="home">
      <Header />
    </div>
  );
}

export default Home;
