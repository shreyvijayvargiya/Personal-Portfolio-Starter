import React, { useEffect } from "react";
import { theme } from "utils/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Body } from "modules";
import "tailwindcss/tailwind.css";
import "../public/styles.css";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import store from "redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

function MyApp({ Component, pageProps }) {

	const persistor = persistStore(store);

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ThemeProvider theme={theme}>
					<MantineProvider withGlobalStyles withNormalizeCSS>
						<Body pageProps={pageProps}>
							<Component {...pageProps} />
						</Body>
					</MantineProvider>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
