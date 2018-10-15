/********************************* AUTH ROUTER *********************************/
//                                                                             //
//          This is the router component responsible for authentication.       //
//                                                                             //
//          It will proceed to the desired component if the provided           //
//              'condition' is satisfied (true), otherwise it will             //
//              redirect to another component (login page for exaple).         //
//                                                                             //
/*******************************************************************************/

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { MyContext } from "../../context";

class AuthRouter extends React.Component {
    render(){
        return(
            <MyContext.Consumer>
                {(context) => (
                    <Route 
                        path={this.props.path}
                        render={routeProps => context.state.isLogged ? <this.props.component {...routeProps} componentProps={this.props.componentProps}/> : <Redirect to={{
                                pathname: this.props.redirect
                            }} />
                        }
                    />
                )}
            </MyContext.Consumer>
        )
    }
}

export default AuthRouter;