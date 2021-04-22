import React, { Component } from 'react';
import AuthService from './Auth/AuthService';
import TokenService from './Auth/TokenService';
import { UserContext } from '../UserContext';



class Login extends Component {
    static contextType = UserContext

    state = {
        error: null,
        loggingIn: null,
        token: null,

    }

    

    loginSuccess = () => {
       
        
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/happyhours'
        history.push(destination)
    }

    submitAuthToken = e => {
        e.preventDefault();

        this.setState({
            error: null,
            LoggingIn: 'Logging In... Standby',
        });

        const { user_name, user_password } = e.target;

        //const { userName } = this.context

        AuthService.login({
            user_name: user_name.value,
            user_password: user_password.value
        })
        .then(res => {
            
            user_password.value = '';
            TokenService.saveToken(res.authToken);
           //console.log(res.userid)
            this.setState({
                token: window.sessionStorage.getItem('TOKEN_KEY'),
                userName: user_name.value,
                userid: res.userid,

            })
           
           
            const {setUserName, setUserToken, setUserId} = this.context
            
            setUserName(this.state.userName)
            
            setUserToken(this.state.token)
            console.log(this.state.userid)
            
            setUserId(this.state.userid)
            TokenService.clearAuthToken();
            
            this.loginSuccess();
        })
        .catch(res => {
            this.setState({
                error: res.error
            })
        })


    }


    render() {

        const { error, LoggingIn } = this.state;


        return(
            <div>
                
                <h2>Log into Happy Hours!</h2>
                <p>
                    {error} {LoggingIn}
                </p>

                <form onSubmit={this.submitAuthToken}>
                    <section className='create'>

                        <div className='create-r'>
                            <div className='create-c'>

                                User Name:

                            </div>
                            <div className='create-c'>
                                <input type='text' name='user_name' id='user_name' defaultValue='User Name' required />
                            </div>
                        </div>
                        <div className='create-r'>
                            <div className='create-c'>

                                Password:

                            </div>
                            <div className='create-c'>
                                <input type='password' name='user_password' id='user_password' defaultValue='password' required />
                            </div>
                        </div>
                        <div className='create-r'>
                            <div className='create-c'>

                                

                            </div>
                            <div className='create-c'>
                                <button>Login</button>
                            </div>
                        </div>
                    </section>

                </form>
                
            </div>
        )
    }
}
Login.contextType = UserContext;

export default Login