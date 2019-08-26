import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../pages/homepage/homepage.component";
import ShopPage from "../pages/shop/shop.component";
import SignInAndSignUpPage from "../pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "../pages/checkout/checkout.component";
import Header from "../components/header/header.component";

import { checkUserSession } from "./redux/user/user.actions";
import { connect } from "react-redux";

import { GlobalStyle } from "../global.styles";

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route
					exact
					path="/signin"
					render={() =>
						currentUser ? (
							<Redirect to="/" />
						) : (
							<SignInAndSignUpPage />
						)
					}
				/>
			</Switch>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession())
});
export default connect(
		null,
	mapDispatchToProps
)(App);
