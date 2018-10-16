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

const AuthRouter = (props) => {
    return(
        <MyContext.Consumer>
            {(context) => (
                <Route 
                    path={props.path}
                    render={routeProps => context.state.isLogged ? <props.component {...routeProps} componentProps={props.componentProps}/> : <Redirect to={{
                            pathname: props.redirect
                        }} />
                    }
                />
            )}
        </MyContext.Consumer>
    )
}

export default AuthRouter;