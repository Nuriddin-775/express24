import UniversalCarousel from '..';
import { HotNews } from '../const';
import '../caraousel.scss';

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
