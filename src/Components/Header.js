import React from 'react';
import '../styles/Header.css'
import logo from '../images/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
	return (
		<header className="header">
			<img
				className="header__logo"
				src={logo}
				alt="logo"
			/>
			<div className="header__search">
				<input type="text" className="header__searchInput"/>
				<SearchIcon className="header__searchIcon"/>
			</div>
			<div className="header__nav">
				<div className="header__options">
					<span className="header__options-one">Hello</span>
					<span className="header__options-two">Sign In</span>
				</div>
				<div className="header__options">
					<span className="header__options-one">Returns</span>
					<span className="header__options-two">& Orders</span>
				</div>
				<div className="header__options">
					<span className="header__options-one">Your</span>
					<span className="header__options-two">Prime</span>
				</div>
				<div className="header__optionBasket">
					<ShoppingBasketIcon />
					<span className="header__options-two header__basketCount">0</span>
				</div>
			</div>
		</header>
	);
}

export default Header;