import React from "react";

import { default as CartIcon } from "../cart-icon/cart-icon.container";
import { default as CartDropdown } from "../cart-dropdown/cart-dropdown.container";

import { ReactComponent as Logo } from "../../assets/crown.svg";
	
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">SHOP</OptionLink>
			<OptionLink to="/shop">CONTACT</OptionLink>
			{currentUser ? (
				<OptionLink as="div" onClick={signOutStart}>
					SIGN OUT
				</OptionLink>
			) : (
				<OptionLink to="/signin">SIGN IN</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

export default Header;
