import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Context/store.ts";  // Import your Redux store
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals.ts";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store} > {/* Wrap with Provider and pass store */}
    <App />
  </Provider>
);

reportWebVitals();
