import React, { Component } from 'react';
import { UserContext } from '../../UserContext'
import Config from '../../config';



const TokenService = {
    
    saveToken(token) {
        
    //console.log(this.context)
     window.sessionStorage.setItem('TOKEN_KEY', token)

    },
    clearAuthToken() {
        window.sessionStorage.removeItem('TOKEN_KEY')
    }
}



TokenService.contextType = UserContext
export default TokenService