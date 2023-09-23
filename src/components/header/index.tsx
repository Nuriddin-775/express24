import { ArrowRightIcon, LocationIcon } from 'src/assets/svg';
import './header.scss';

function Header() {
  return (
    <div className="header">
      <LocationIcon />
      <p>г. Ташкент, Мирзо Улугбек район, 1 проезд Корабулок 17</p>
      <ArrowRightIcon />
    </div>
  );
}

export default Header;
