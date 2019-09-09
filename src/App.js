import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import ProductContext from './contexts/ProductContext.js';
import CartContext from './contexts/CartContext.js';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<CartContext.Provider value={cart}>
			<ProductContext.Provider value={{ products, addItem }}>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route exact path="/" component={Products} />

					<Route exact path="/cart" component={ShoppingCart} />
				</div>
			</ProductContext.Provider>
		</CartContext.Provider>
	);
}

export default App;
