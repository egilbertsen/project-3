import React, { createContext, Component } from 'react';
import API from "../utils/api";

export const LoginContext = createContext();

class LoginContextProvider extends Component {
    state = {
        isLoggedIn: false,
        userID: ""
    }

    checkLoginStatus = () => {
        API.getLoginStatus().then(res => {
            if (res.data.id > 0) {
                this.setState({
                    isLoggedIn: true,
                    userID: res.data.id
                })
            }
            return;
        }).catch(err => console.log(err))
    }

    

    componentDidMount = () => {
        this.checkLoginStatus();
    }

    render() {
        return (
            <LoginContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </LoginContext.Provider>
        );
    }
}

export default LoginContextProvider;