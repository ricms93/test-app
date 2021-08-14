import React from "react";
import { StackNavigator } from "react-navigation";
import { Root } from "native-base";


import Home from "./container/HomeContainer";
import User from "./container/UserContainer";

const App = StackNavigator(
	{
		Home: { screen: Home },
		User: { screen: User },
	},
	{
		initialRouteName: "Home",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
