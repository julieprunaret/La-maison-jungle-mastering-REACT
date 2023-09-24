import '../styles/Cart.css';
import { useState } from 'react';

function Cart({cart, setCart}) {
    const monsteraPrice = 8;
    const [open, setOpen] = useState(false);

	const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0)

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
			{
				cart.map({ name, price, amount }, index => {
					<div key={`${index}-${name}`}>
						{name} {price}€ x{amount}
					</div>
				})
			}
			<h3>Total : {total}€</h3>
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
