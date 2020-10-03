import React, { Component } from 'react';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent2.js';
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './HomeComponent';
import About from './AboutComponent2';
import Team from './TeamComponent2';
import FeedBack from './ContactComponent2';
import GamePlay from './GamePlayComponent';
//import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
//import { connect } from 'react-redux';  UNCOMMENT ONCE YOU WANT TO USE REDEUX

class Main extends Component {


    render() {
        return(
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/team' component={Team}/>
                    <Route exact path='/feedback' component={FeedBack} />
                    <Route exact path='/demo' component={GamePlay}/>
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    };
}

export default Main;
