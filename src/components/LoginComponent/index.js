
import React from 'react';
import { Redirect } from 'react-router-dom';

import { MyContext } from '../../context';

const LoginComponent = (props) => {
    // render(){
        return (
            <MyContext.Consumer>
                {(context) => (   
                    <div className="container">
                        {!context.state.isLogged ? <React.Fragment>
                                <h1>Login Page</h1>
                                <p>You must login to proceed!</p>
                                <button onClick={context.login}>Click to Login</button>
                            </React.Fragment> : <Redirect to="/dashboard" /> 
                        }
                    </div>
                )}
            </MyContext.Consumer>
        )
    }
// }

export default LoginComponent;