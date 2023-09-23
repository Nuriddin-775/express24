import DiscountCarousel from 'src/components/discountCarousel/discountCarousel';
import './home.scss';
import Header from 'src/components/header';
import HomeProducts from 'src/components/products/HomeProducts';

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
