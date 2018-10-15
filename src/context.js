/*********************************** CONTEXT ***********************************/
//                                                                             //
//          This file holds all configuration, state and functions that can    //
//              be used globally, thanks for the Context API from React.       //
//                                                                             //
//          THIS IS NOT A REQUIRED FILE, if you do not want to use Context     //
//                      you can delete this file and remove all                //
//                  'MyContext.Consumer', 'MyContext.Privider' and             //
//                'MyProvider' from the components that makes use of if.       //
//                                                                             //
//          Visit https://github.com/GuhPires/super-react-router for           //
//                              more information.                              //
//                                                                             //
/*******************************************************************************/

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