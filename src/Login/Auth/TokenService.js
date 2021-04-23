//import React from 'react';

const TokenService = {

    // saveToken(token) {
        
    //  window.sessionStorage.setItem('TOKEN_KEY', token)

    // },
    // clearAuthToken() {
    //     window.sessionStorage.removeItem('TOKEN_KEY')
    // },
    hasAuthToken(token) {
        return !!token
    },
}


export default TokenService