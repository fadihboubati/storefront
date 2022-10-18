import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/Main';
import Categories from './components/storefront/Categories';
import Products from './components/storefront/Products';

function App() {
  return (
    <>
      <Header />
      <main>
        <Categories />
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
