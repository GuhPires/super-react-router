import React from 'react';

const MyContext = React.createContext();

class MyProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
        }
        this.contextValues = {
            login: () => this.setState({ isLogged: true }),
            logout: () => this.setState({ isLogged: false }),
        }
    }

    render() {
        return (
            <MyContext.Provider value={{state: this.state, ...this.contextValues}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider };