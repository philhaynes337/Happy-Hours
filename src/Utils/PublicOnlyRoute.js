import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../Login/Auth/TokenService';

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Redirect to={'/'} />
          : <Component {...componentProps} />
      )}
    />
  )
}