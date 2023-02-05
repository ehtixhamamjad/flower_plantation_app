import Main from "./Main";
import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import store from "./redux/store";

export default function App() {
  return (
    <StoreProvider store={store}>
        <Main />
    </StoreProvider>
  );
}