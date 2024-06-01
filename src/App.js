import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/PageHome/Home';
import NotFound from './components/NotFound/NotFound';
import TopHeader from './components/TopHeader/TopHeader';
import About from './components/PageAbout/About';
import Product from './components/PageProduct/Product';
import Contact from './components/PageContact/Contact';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/abouts" element={<About />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/contacts" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
