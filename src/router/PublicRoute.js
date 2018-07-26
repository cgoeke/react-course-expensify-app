import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({ 
  isLoggedIn, 
  component: Component,
  ...props
}) => {
  return <Route {...props} component={(props) => (
    isLoggedIn ? (
      <Redirect to="/dashboard" />
    ) : (
      <Component {...props} />
    )
  )} />
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: !!state.auth.uid
  };
};

export default connect(mapStateToProps)(PublicRoute);