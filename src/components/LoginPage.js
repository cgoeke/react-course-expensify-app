import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
      <div>
        <button onClick={startLogin} type="submit">Login</button>
      </div>
    );

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin())
  };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);