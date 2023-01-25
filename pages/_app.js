import React, { useEffect } from "react";
import { Body } from "modules";
import "tailwindcss/tailwind.css";
import "../public/styles.css";
import { Provider } from "react-redux";
import store from "redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

function MyApp({ Component, pageProps }) {
	const persistor = persistStore(store);

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Body pageProps={pageProps}>
					<Component {...pageProps} />
				</Body>
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
