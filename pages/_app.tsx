import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

// fonts import
import "@fontsource/poppins";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
export default MyApp;
