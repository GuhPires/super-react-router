/******************************* HOME COMPONENT ********************************/
//                                                                             //
//          This is the Home Component file. It is your homepage by default,   //
//                            but you can change that.                         //
//                                                                             //
//                        Feel free to edit this component.                    //
//                                                                             //
/*******************************************************************************/

import React from 'react';
import { Link } from 'react-router-dom';

class HomeComponent extends React.Component {
    render(){
        return (
            <div style={Styles.container}>
                <h1>Super React Router</h1>
                <p>Basic application boilerplate for React with React Router</p>
                <h2>See what you can do with this application: </h2>
                <ul>
                    <li>React SPA's with a more clean and organized Routes</li>
                    <li>Routes that need authentication made simple, just use the AuthRouter component!</li>
                    <li>All needed routes components ready to use</li>
                    <li>Create as many routes you want!</li>
                </ul>
                <p>To see more information, examples and guides please visit: <a href="https://github.com/GuhPires/super-react-router" target="_blank">this page</a></p>
                <h2><Link to="/main">Let's start!</Link></h2>
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

export default HomeComponent;