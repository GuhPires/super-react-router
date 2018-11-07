
import React from 'react';
import { Link } from 'react-router-dom';

class MainComponent extends React.Component{
    render(){
        return (
            <div className="container">
                <h1>This is the Main Component</h1>
                <p>In order to proceed with the test, click in the link bellow: </p>
                <Link to="/dashboard">Your Dashboard</Link>
            </div>
        )
    }
}

export default MainComponent;