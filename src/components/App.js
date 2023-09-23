import React from 'react';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../styles/Layout.css';
import logo from '../assets/logo.png';

function App() {
    return (
      <React.Fragment>
        <Banner>
          <img src={logo} alt='La maison jungle' className='lmj-logo' />
          <h1 className='lmj-title'>La maison jungle</h1>
        </Banner>
        <div className='lmj-layout-inner'>
          <Cart />
          <ShoppingList />
        </div>
        <Footer />
      </React.Fragment>
    )
}

export default App