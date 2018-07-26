import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';

const PrivateRoute = ({ 
  isLoggedIn, 
  component: Component,
  ...props
}) => {
  return <Route {...props} component={(props) => (
    isLoggedIn ? (
      <div>
        <Header />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to="/" />
    )
  )} />
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: !!state.auth.uid
  };
};

export default connect(mapStateToProps)(PrivateRoute);