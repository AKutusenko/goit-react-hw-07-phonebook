import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "modern-normalize/modern-normalize.css";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"Loading..."} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
