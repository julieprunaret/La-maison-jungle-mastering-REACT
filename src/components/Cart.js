import '../styles/Cart.css';
import { useState } from 'react';

function Cart({cart, setCart}) {
    const monsteraPrice = 8;
    const [open, setOpen] = useState(false);

    //my soluce
    // const isMenuOpen = () => {
    //     setOpen(current => !current)
    // }

    return open ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			<div>Monstera : {monsteraPrice}€</div>
			<h3>Total : {monsteraPrice * cart}€</h3>
            <button onClick={() => setCart(0)}>Vider le panier</button>
		</div>
    ) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>    
    )
}

export default Cart
