import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { ConfigureStore } from "./components/redux/configureStore";
import { Provider } from "react-redux";

const store = ConfigureStore();
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
