import Header from './header';
import './home.scss';
import PrimaryCarousel from './primaryCarousel';

function Home() {
  return (
    <div className="home">
      <Header />
      <PrimaryCarousel />
    </div>
  );
}

export default Home;
