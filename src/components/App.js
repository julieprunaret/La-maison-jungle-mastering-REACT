import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../styles/Layout.css';
import logo from '../assets/logo.png';

function App() {
  const [isFooterShown, updateIsFooterShown] = useState(true)

  // we check if something is in the localstorage
  const savedCart = localStorage.getItem('cart')
  // if there is something inside we bring it, in the other way  
  const [cart, setCart] = useState(savedCart? JSON.parse(savedCart) : [])
  // at each change of state, we store the data into the localstorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

    return (
      <React.Fragment>
        <Banner>
          <img src={logo} alt='La maison jungle' className='lmj-logo' />
          <h1 className='lmj-title'>La maison jungle</h1>
        </Banner>
        <div className='lmj-layout-inner'>
          <Cart cart={cart} setCart={setCart}/>
          <ShoppingList  cart={cart} setCart={setCart}/>
        </div>
        <button onClick={() => updateIsFooterShown(!isFooterShown)}>
          Cacher
        </button>
        {isFooterShown && <Footer cart={cart}/>}
      </React.Fragment>
    )
}

export default App