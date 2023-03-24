import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout';
import About from './pages/about';
import Home from './pages/home';
import Item from './pages/item';
import NoMatch from './pages/noMatch';

export default function App() {
  return (
    <div>
      <h1>Basic Example</h1>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="item/:id" element={<Item />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Layout>
    </div>
  );
}
