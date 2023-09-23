import { Route, Routes } from 'react-router-dom';
import Home from 'src/pages/home';

function RoutElements() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default RoutElements;
