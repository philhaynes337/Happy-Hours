import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../Login/Auth/TokenService';
import {UserContext} from '../UserContext';

function PrivateRoute({ component, ...props }) {
    const Component = component;
    const token = useContext(UserContext)

    return (
        <Route
        {...props}
        render={componentProps => (
            TokenService.hasAuthToken(token.token)
 
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