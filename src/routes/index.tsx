import { Route, Routes } from 'react-router-dom';
import Home from '../pages';

function RoutElements() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default RoutElements;
