import './home.scss';
import Header from 'src/components/header';
import HomeProducts from 'src/components/products/HomeProducts';
import ShopsCarousel from 'src/components/carousel/shopCarousel/shopsCarousel';
import DiscountCarousel from 'src/components/carousel/discountCarousel/discountCarousel';

function Home() {
  return (
    <div className="home">
      <Header />

      <DiscountCarousel />

      <ShopsCarousel />

      <HomeProducts />
    </div>
  );
}

export default Home;
