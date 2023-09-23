import UniversalCarousel from '..';
import { HotNews } from '../carousel/const';
import './main.scss';

function DiscountCarousel() {
  return (
    <div className="diskountCarousel">
      <UniversalCarousel>
        {HotNews.map((url: string) => (
          <img
            src={url}
            key={url}
            alt="Hot news image"
            className="diskountCarousel__item"
          />
        ))}
      </UniversalCarousel>
    </div>
  );
}

export default DiscountCarousel;
