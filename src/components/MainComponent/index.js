
import React from 'react';
import { Link } from 'react-router-dom';

class MainComponent extends React.Component{
    render(){
        return (
            <div style={Styles.container}>
                <h1>This is the Main Component</h1>
                <p>In order to proceed with the test, click in the link bellow: </p>
                <Link to="/dashboard">Your Dashboard</Link>
            </div>
        )
    }
}

const Styles = {
    container: {
        width: '60%',
        margin: '5% auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black'
    }
}

export default MainComponent;