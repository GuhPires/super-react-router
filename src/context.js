import React from 'react';

const MyContext = React.createContext();

class MyProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            times: 0
        }
        this.contextValues = {
            state: this.state,
            login: () => this.setState({ isLogged: true }),
            logout: () => this.setState({ isLogged: false }),
            clicked: () => this.setState({ times: this.state.times + 1 }, () => console.log('clicked: ', this.state.times))
        }
    }

    render() {
        return (
            <MyContext.Provider value={this.contextValues}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider };