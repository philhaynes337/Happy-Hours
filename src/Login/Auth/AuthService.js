import Config from '../../config'

const endpoint = `${Config.API_ENDPOINT}/authentication`


const AuthService = {



    login(credentials) {
        return fetch(endpoint, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${Config.API_KEY}`
            },
            body: JSON.stringify(credentials)
        })
        .then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
            );
    },


}

export default AuthService