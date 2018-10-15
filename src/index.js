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


class App extends React.Component {
    render(){
        return(
            <MyProvider> 
                <Router>
                    <Switch>
                        {PrivateRoutes.map((route, i) => <AuthRouter key={i} {...route} />)}
                        {PublicRoutes.map((route, i) => <CustomRouter key={i} {...route} />)}
                        <Route exact path="/" component={HomeComponent} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </MyProvider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));