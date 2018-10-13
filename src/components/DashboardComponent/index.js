
import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { MyContext } from '../../context';

class DashboardComponent extends React.Component {
    render(){
        return (
            <MyContext.Consumer>
                {(context) => (
                    <div>
                        <h1>Your Dashboard</h1>
                        <p>Congratulations, you're logged in!</p>
                        <Link to="/main">Main Page</Link>
                        <a href="javascrit:;" onClick={context.logout}>Logout</a>
                        {/* {!context.state.isLogged ? <Redirect to="/main"/> : null } */}
                    </div>
                )}
            </MyContext.Consumer>
        )
    }
}

export default DashboardComponent;