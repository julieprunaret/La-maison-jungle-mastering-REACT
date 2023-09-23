import '../styles/Cart.css';
import { useState } from 'react';

function Cart() {
    const monsteraPrice = 8;
    const [Cart, setCart] = useState(0);
    const [open, setOpen] = useState(false);

    //my soluce
    // const isMenuOpen = () => {
    //     setOpen(current => !current)
    // }

    return open ? (
        <div>
            {/* <button onClick={isMenuOpen}>
                {open ? 'Fermer' : 'Ouvrir'}
            </button> */}
            {/* <div className={`lmj-cart ${open && 'lmj-cart_open'}`}> */}
            <div className="lmj-cart">
            <button onClick={() => setOpen(false)}>Fermer</button>
                <h2>Panier</h2>
                <p>Monstera {monsteraPrice} €</p>
                <p>Total : {monsteraPrice * Cart}€</p>
                <button onClick={() => setCart(Cart + 1)}>Ajouter</button>
            </div>
        </div>
    ) : (
        <button onClick={() => setOpen(true)}>Ouvrir</button>
    )
}

export default Cart
