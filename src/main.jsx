import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./components";
import App from "./components/App/App";
import "./index.css";
import store from "./redux/store";
import Themer from "./theme/Themer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <Themer>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Themer>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
);
