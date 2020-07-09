import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Routes from "./routes";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./style";
import { store } from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {sendLogin, setLoggedInUser} from "./store/actions/loginActions";

library.add(fab, fas, far);

if (localStorage.getItem("token")) {
  const token = localStorage.getItem("token");
  store.dispatch(sendLogin(token));
}

if (localStorage.getItem("user")) {
  const user = localStorage.getItem("user");
  store.dispatch(setLoggedInUser(JSON.parse(user)));
}


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
