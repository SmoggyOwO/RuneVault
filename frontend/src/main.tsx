import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import "./index.css";
import { WalletContextProvider } from "./components/LoginModal.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<WalletContextProvider>
				<App />
			</WalletContextProvider>
		</BrowserRouter>
	</StrictMode>,
);
