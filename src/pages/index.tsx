import { useEffect } from 'react';
import Header from './header';
import './home.scss';
import PrimaryCarousel from './primaryCarousel';

function Home() {
  useEffect(() => {
    fetch(
      `https://api.express24.uz/client/v5/catalog/stores?offset=0&latitude=41.311191&longitude=69.279776&limit=21&rootCategoryId=1`
    )
      .then((res) => res.json())
      .then((val) => {
        console.log(val?.list);
      });
  }, []);
  return (
    <div className="home container">
      <Header />
      <PrimaryCarousel />
    </div>
  );
}

export default Home;
