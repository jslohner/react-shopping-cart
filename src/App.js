import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { ProductContext } from './contexts/ProductContext.js';
import { CartContext } from './contexts/CartContext.js';

import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	const removeItem = item => {
		setCart(cart.filter(cartItem => cartItem.id !== item.id));
	};

	return (
		<div className='App'>
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, removeItem }}>
					<Navigation />

					{/* Routes */}
					<Route exact path='/'>
						<Products />
					</Route>

					<Route path='/cart'>
						<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
