import React, { useEffect } from "react";
import { theme } from "utils/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Body } from "modules";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles.css";
import { MantineProvider } from "@mantine/core";
import { portfolioData } from "utils";

function MyApp({ Component, pageProps }) {
	
	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	const data = portfolioData;

	return (
		<ThemeProvider theme={theme}>
			<MantineProvider withGlobalStyles withNormalizeCSS>
				<Body pageProps={pageProps} data={data}>
					<Component {...pageProps} />
				</Body>
			</MantineProvider>
		</ThemeProvider>
	);
}

export default MyApp;
