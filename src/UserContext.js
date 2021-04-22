import React, { Component } from 'react';

export const UserContext = React.createContext({
    //userName: "", // []
})

export class UserContextProvider extends Component {
    state = {
        userName: null,
        token: null,
        userid: null,
    }
    setUserName = userName => {
        this.setState({userName: userName});
    }

    setUserToken = token => {
        this.setState({token: token});
    }

    setUserId = userid => {
        this.setState({userid: userid})
    }

    render() {
        const {userName, token, userid} = this.state;
        const {setUserName, setUserToken, setUserId} = this;
        return(
            <UserContext.Provider value={{
                userName,
                token,
                userid,
                setUserName,
                setUserToken,
                setUserId,
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}




export default UserContext