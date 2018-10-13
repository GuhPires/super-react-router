

import React from 'react';
import { Redirect } from 'react-router-dom';

import { MyContext } from '../../context';

const LoginComponent = (props) => {
    // render(){
        return (
            <MyContext.Consumer>
                {(context) => (   
                    <div>
                        <p>{context.state.times}</p>
                        {console.log(context)}
                        {!context.state.isLogged ? <React.Fragment>
                                <h1>Login Page</h1>
                                <p>You must login to proceed!</p>
                                <button onClick={context.login}>Click to Login</button>
                                <button onClick={context.clicked}>Clicked {context.state.times} times</button>
                            </React.Fragment> : <Redirect to="/main" /> 
                        }
                    </div>
                )}
            </MyContext.Consumer>
        )
    }
// }

export default LoginComponent;