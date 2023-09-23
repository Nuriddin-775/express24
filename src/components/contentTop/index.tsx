import { ArrowRightIcon } from 'src/assets/svg';
import './contentTop.scss';

interface Props {
  name: string;
}

function ContentTop({ name }: Props) {
  return (
    <div className="container contentTop">
      <h4>{name}</h4>
      <div>
        <p>Показать все</p>
        <ArrowRightIcon />
      </div>
    </div>
  );
}

export default ContentTop;
