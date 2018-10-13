import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { MyContext, MyProvider } from './context';

import PrivateRoutes from './routes/privateRoutes';
import PublicRoutes from './routes/publicRoutes';

import AuthRouter from './components/AuthRouter';
import CustomRouter from './components/CustomRouter';

import HomeComponent from './components/HomeComponent';


class App extends React.Component {
    render(){
        return(
            <Router>
                <Switch>
                    <MyProvider> 
                        {PrivateRoutes.map((route, i) => <AuthRouter key={i} {...route} />)}
                        {PublicRoutes.map((route, i) => <CustomRouter key={i} {...route} />)}
                        <Route exact path="/" component={HomeComponent} />
                    </MyProvider>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));