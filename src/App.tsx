import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './Components/Fragments/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Authenticated, NonAuthenticated } from './Utils/router';
import { Spin } from 'antd';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const routes = isAuth ? Authenticated : NonAuthenticated;

  useEffect(() => {
    (async () => {
      const user = await localStorage.getItem('user');
      console.log('app update1');
      if (user) {
        setIsAuth(true);
        console.log('app update2');
      } else {
        setIsAuth(false);
      }
    })();
  });

  return (
    <div className="App">
      <Router>
        <Header isAuth={isAuth} />
        <div className={'App-content center'}>
          <React.Suspense fallback={<Spin />}>
            <Switch>
              {routes.map((route) => (
                <Route
                  exact={true}
                  component={route.component}
                  path={route.path}
                  key={route.path}
                />
              ))}
              <Redirect to={'/'} />
            </Switch>
          </React.Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
