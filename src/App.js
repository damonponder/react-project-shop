import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homePage";
import ShopPage from "./pages/shop/shop"
import Header from './components/header/header'
import SignIn from "./components/sign-in/signin";
import { auth } from './firebase/firebase.utils'

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user});
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser = {this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/signin' component={SignIn}/>
                </Switch>
            </div>
        );
    }
}

export default App;
