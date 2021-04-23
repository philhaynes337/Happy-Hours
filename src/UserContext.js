import React, { Component } from 'react';

export const UserContext = React.createContext({
    //userName: "", // []
})

export class UserContextProvider extends Component {
    state = {
        userName: null,
        token: null,
        userid: null,
        show: 'noShow',
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
    setEditButton = show => {
        this.setState({show: show})
    }

    render() {
        const {userName, token, userid, show} = this.state;
        const {setUserName, setUserToken, setUserId, setEditButton} = this;
        return(
            <UserContext.Provider value={{
                userName,
                token,
                userid,
                show,
                setUserName,
                setUserToken,
                setUserId,
                setEditButton,
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}




export default UserContext