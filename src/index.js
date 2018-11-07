/************************************ INDEX ************************************/
//                                                                             //
//          This is the main file. It is only used for the routes, but you     //
//              can add more content OUTSIDE the 'Switch' block. The           //
//                  added content will be displayed in EVERY PAGE.             //
//                                                                             //
//                  CREATED, DEVELOPED AND MAINTAINED BY: GuhPires             //
//                                                                             //
//          Please visit: https://github.com/GuhPires/super-react-router       //
//                    for docs, examples and more information.                 //
//                                                                             //
/*******************************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { MyProvider } from './context';

import PrivateRoutes from './routes/privateRoutes';
import PublicRoutes from './routes/publicRoutes';

import AuthRouter from './components/AuthRouter';
import CustomRouter from './components/CustomRouter';

import HomeComponent from './components/HomeComponent';
import NotFound from './components/NotFound';

import './App.css';


class App extends React.Component {
    render(){
        return(
            <MyProvider> 
                <Router>
                    <React.Fragment>
                        <Switch>
                            {PrivateRoutes.map((route, i) => <AuthRouter key={i} {...route} />)}
                            {PublicRoutes.map((route, i) => <CustomRouter key={i} {...route} />)}
                            <Route exact path="/" component={HomeComponent} />
                            <Route component={NotFound} />
                        </Switch>
                    </React.Fragment>
                </Router>
            </MyProvider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));