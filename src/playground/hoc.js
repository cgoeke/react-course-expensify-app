import React from 'react';
import ReactDOM from 'react-dom';

// Higher Order Component (HOC) - A higher order component is a component that renders another component.
const statelessComponent = (props) => (
    <div>
        <h1>Component</h1>
        <p>props passed: {props.exampleProp}</p>
    </div>
);

const higherOrderComponent = (WrappedComponent) => {
    return (props) => (
        <div>
            <h1>This is an addition to the passed in component</h1>
            <WrappedComponent {...props} />
        </div>
    );
};

// Require Authentication example
const Info = (props) => (
    <div>
        <h1>Title</h1>
        <p>{props.info}</p>
    </div>
);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>'You must be logged in to access the information'</p>
            )}
        </div>

    );
}
const AuthInfo = requireAuthentication(Info);

const newComponent = higherOrderComponent(statelessComponent);

// ReactDOM.render(<statelessComponent exampleProp='1 prop' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='Here is the info you requested' />, document.getElementById('app'));