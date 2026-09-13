import { createRoot } from "react-dom/client";
import App from "./App.tsx";

/* Self-hosted variable fonts — no third-party font requests */
import "@fontsource-variable/lora";
import "@fontsource-variable/lora/wght-italic.css";
import "@fontsource-variable/instrument-sans";
import "@fontsource-variable/instrument-sans/wght-italic.css";
import "@fontsource-variable/jetbrains-mono";

import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
