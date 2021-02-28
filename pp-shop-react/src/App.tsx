import { BrowserRouter, Link, Route, Router, Switch } from 'react-router-dom'
import React, { useEffect } from 'react'

import { HomePage } from './Pages/HomePage/HomePage'
import { LoginPage } from './Pages/LoginPage';
import { Navbar } from './components/Navbar'
import { SecondPage } from './Pages/SecondPage/SecondPage'
import { authenticationService } from './services'
import { history } from './helpers';

const App: React.FC = () => {

  const [currentUser, setCurrentUser] = React.useState<any>();

  useEffect(() => { 
    setCurrentUser(authenticationService.currentUser);
    ; }, [])

    const logout = () =>
    authenticationService.logout();
    history.push('/login');

  return (
    <Router history={history}>
                <div>
                    {currentUser &&
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-link">Home</Link>
                                <a onClick={logout} className="nav-item nav-link">Logout</a>
                            </div>
                        </nav>
                    }
                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <Route path="/" component={HomePage} exact />
                                    <Route path="/login" component={LoginPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
    // <BrowserRouter>
    //   <Navbar />
    //   <div className="container">
    //     <Switch>
    //       <Route path="/" component={HomePage} exact />
    //       <Route path="/All" component={SecondPage} />
    //     </Switch>
    //   </div>
    // </BrowserRouter>
  )
}

export default App