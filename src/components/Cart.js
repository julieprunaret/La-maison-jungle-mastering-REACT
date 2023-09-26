import '../styles/Cart.css';
import { useEffect, useState } from 'react';

function Cart({cart, setCart}) {
    const [open, setOpen] = useState(true);
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	function deleteItem(e, name) {
		e.preventDefault();
		setCart(cart.filter((plant) => plant.name !== name));
	}

	useEffect (() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

    return open ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setOpen(false)}
			>
				Fermer
			</button>
			{ cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{
							cart.map(({ name, price, amount }, index) => {
								return (
									<div key={`${index}-${name}`}>
										{name} {price}€ x{amount}
										<button onClick={(e) => deleteItem(e, name)}>supprimer la plante</button>
									</div>
								)
							})
						}
					</ul>
					<h3>Total : {total}€</h3>
					<button onClick={() => {setCart([])}}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			) }
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
