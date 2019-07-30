import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import Routes from "./routes";
import "./config/StatusBarConfig";
import reducers from "./reducer";
import NavigationService from "./services/NavigationService";

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <SafeAreaView style={{ flex: 1 }}>
          <Routes
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </SafeAreaView>
      </Provider>
    );
  }
}
