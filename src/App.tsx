import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./app/store/rootReducer";
import MainComponent from "./app/components/mainComponent";

//import "./App.scss";
import CatList from "./app/components/catList";
import SimpleForm from "./app/components/simpleForm";
import styles from "./app.module.scss";

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <>
      <section className="content">
        <h1>Redux</h1>
        <hr />
        <Provider store={store}>
          <MainComponent />
          <div className={styles.container}>
            <div className={styles.item}>
              <CatList />
            </div>
            <hr/>
            <div className={styles.item}>
              <SimpleForm />
            </div>
          </div>
        </Provider>
      </section>
    </>
  );
}

export default App;
