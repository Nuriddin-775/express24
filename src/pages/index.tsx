import './home.scss';
import Header from 'src/components/header';
import HomeProducts from 'src/components/products/HomeProducts';
import DiscountCarousel from 'src/components/carousel/discountCarousel';

function Home() {
  return (
    <div className="home">
      <Header />

      <DiscountCarousel />

      <HomeProducts />
    </div>
  );
}

export default Home;
