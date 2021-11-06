import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPortfolio } from '../store/portfolio';

import Portfolio from './Portfolio';
import PortfolioItem from './PortfolioItem';
import Home from './Home';

class App extends Component {
    componentDidMount() {
        this.props.loadPortfolio();
    }

    render() {
        return (
            <Router>
                <div id='main'>
                    <h1>
                        <Link to='/'> Home </Link>
                        <Link to='/portfolio'> Portfolio </Link>
                    </h1>
                    <Switch>
                        <Route exact path='/' component={ Home } />
                        <Route exact path='/portfolio' component={ Portfolio } />
                        <Route path='/portfolio/:id' component={ PortfolioItem } />
                    </Switch>
                </div>
            </Router>
        );
    };
};

const mapStateToProps = ({ portfolio }) => ({ portfolio });

const mapDispatchToProps = (dispatch) => {
    return {
        loadPortfolio: () => dispatch(fetchPortfolio()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);