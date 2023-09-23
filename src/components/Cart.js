import '../styles/Cart.css';
import { useState } from 'react';

function Cart() {
    const monsteraPrice = 8;
    const [Cart, setCart] = useState(0);

    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <p>Monstera {monsteraPrice} €</p>
            <p>Total : {monsteraPrice * Cart}€</p>
            <button onClick={() => setCart(Cart + 1)}>Ajouter</button>
        </div>
    )
}

export default Cart
