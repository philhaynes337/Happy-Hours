import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../Login/Auth/TokenService';
//import {UserContext} from '../UserContext';

function PrivateRoute({ component, ...props }) {
    const Component = component;


    

    return (
        <Route
        {...props}
        render={componentProps => (
            TokenService.hasAuthToken()
 
            ? <Component {...componentProps} />
            : <Redirect
                to={{
                    pathname: '/login',
                    state: { from: componentProps.location }
                }}
                />
        )}
        />
    )
}

export default PrivateRoute