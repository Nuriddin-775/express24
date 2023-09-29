import { CarIcon, HeartIcon, StarIcon } from 'src/assets/svg';
import './main.scss';

function MainProduct() {
  return (
    <div className="mainProduct">
      <img
        src="src/assets/img/products/img-1.jpg"
        alt="products image"
        className="mainProduct-img"
      />
      <div className="mainProduct-info">
        <h4>ДОДО ПИЦЦА</h4>
        <p>Пиццерия</p>
      </div>
      <div className="mainProduct-footer">
        <div>
          <StarIcon />
          <p>4.8</p>
        </div>
        <div>
          <CarIcon />
          <p>12200 - 18200 сум</p>
        </div>
      </div>
      <div className="mainProduct-logo">
        <img src="src/assets/img/products/img-4.jpg" alt="logo" />
      </div>
      <div className="mainProduct-like__btn">
        <HeartIcon />
      </div>
    </div>
  );
}

export default MainProduct;
