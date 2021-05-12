

const TokenService = {

saveToken(token) {
    window.sessionStorage.setItem('TOKEN_KEY', token)
    },
    getAuthToken() {
        
    return window.sessionStorage.getItem('TOKEN_KEY')
    },
    clearAuthToken() {
    
    window.sessionStorage.removeItem('TOKEN_KEY')
    },
    windowAuthToken() {
        return !!TokenService.getAuthToken()
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken()
    },
}


export default TokenService