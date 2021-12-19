import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import "./index.css";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

import App from "./App";
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
