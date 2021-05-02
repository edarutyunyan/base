import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './App.scss';
import Header from './Components/Fragments/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Authenticated, NonAuthenticated } from './Utils/router';
import { Spin } from 'antd';

type User = {};

type AppContextType = { user: User | null; setUser: Dispatch<SetStateAction<User | null>> | null };
export const AppContext = React.createContext<AppContextType>({ user: null, setUser: null });

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser as string));
    }
  }, []);

  const routes = user ? Authenticated : NonAuthenticated;

  return (
    <div className="App">
      <AppContext.Provider value={{ user: user, setUser: setUser }}>
        <Router>
          <Header isAuth={!!user} />
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
      </AppContext.Provider>
    </div>
  );
}

export default App;
