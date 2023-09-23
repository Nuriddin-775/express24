import UniversalCarousel from '..';
import '../main.scss';

function DiscountCarousel() {
  return (
    <div className="diskountCarousel">
      <UniversalCarousel>
        <img
          className="diskountCarousel__item"
          src={'src/assets/img/products/img-1.jpg'}
        />
        <img
          src={'src/assets/img/products/img-2.jpg'}
          className="diskountCarousel__item"
        />
        <img
          src={'src/assets/img/products/img-3.jpg'}
          className="diskountCarousel__item"
        />
        <img
          src={'src/assets/img/products/img-4.jpg'}
          className="diskountCarousel__item"
        />
        <img
          src={'src/assets/img/products/img-5.jpg'}
          className="diskountCarousel__item"
        />
        <img
          src={'src/assets/img/products/img-6.jpg'}
          className="diskountCarousel__item"
        />
        <img
          src={'src/assets/img/products/img-7.jpg'}
          className="diskountCarousel__item"
        />
        <img
          src={'src/assets/img/products/img-8.jpg'}
          className="diskountCarousel__item"
        />
        <img
          src={'src/assets/img/products/img-9.jpg'}
          className="diskountCarousel__item"
        />
        <img
          src={'src/assets/img/products/img-10.jpg'}
          className="diskountCarousel__item"
        />
      </UniversalCarousel>
    </div>
  );
}

export default DiscountCarousel;
