import React, { useState } from "react";
import NavigationBar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

const App = () => {
  const [isLoading, setLoadingState] = useState(true);

  const showLoader = () => {
    setLoadingState(true);
  };
  const hideLoader = () => {
    setLoadingState(false);
  };

  return (
    <Router>
    <NavigationBar showLoader={showLoader} />
    <Switch>
      <>
        <Route
          exact
          key="home"
          path="/"
          render={() => (
            <News
              isLoading={isLoading}
              hideLoader={hideLoader}
              showLoader={showLoader}
            />
          )}
        />
        <Route
          key="shows"
          path="/shows"
          render={() => (
            <News
              isLoading={isLoading}
              hideLoader={hideLoader}
              showLoader={showLoader}
            />
          )}
        />
        <Route
          key="ask"
          path="/ask"
          render={() => (
            <News
              isLoading={isLoading}
              hideLoader={hideLoader}
              showLoader={showLoader}
            />
          )}
        />
        <Route
          key="jobs"
          path="/jobs"
          render={() => (
            <News
              isLoading={isLoading}
              hideLoader={hideLoader}
              showLoader={showLoader}
            />
          )}
        />

        <Route
          key="top"
          path="/top"
          render={() => (
            <News
              isLoading={isLoading}
              hideLoader={hideLoader}
              showLoader={showLoader}
            />
          )}
        />
        <Route
          key="new"
          path="/new"
          render={() => (
            <News
              isLoading={isLoading}
              hideLoader={hideLoader}
              showLoader={showLoader}
            />
          )}
        />
        <Route
          key="best"
          path="/best"
          render={() => (
            <News
              isLoading={isLoading}
              hideLoader={hideLoader}
              showLoader={showLoader}
            />
          )}
        />
      </>
    </Switch>
  </Router>
  );
};

export default App;
