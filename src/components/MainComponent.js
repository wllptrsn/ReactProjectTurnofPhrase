import React, { Component } from 'react';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import About from './AboutComponent';
import Team from './TeamComponent';
import Feedback from './FeedbackComponent';
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
                    <Route exact path='/feedback' component={Feedback} />
                    <Route exact path='/contactus' />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    };
}

export default Main;
