import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/checkout.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Home" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
