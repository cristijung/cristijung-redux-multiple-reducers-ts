import React from "react";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './app/store/rootReducer';
import MainComponent from "./app/components/mainComponent";

import "./App.css";

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <>
      <section className="content">
        <h1>Redux</h1>
        <Provider store={store}>
      <MainComponent />
    </Provider>
      </section>
    </>
  );
}

export default App;
