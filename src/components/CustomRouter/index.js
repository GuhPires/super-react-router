/******************************** CUSTOM ROUTER ********************************/
//                                                                             //
//          This is the router component responsible for any routes that       //
//                          do not need authentication.                        //
//                                                                             //
//          It will proceed to the desired component setted into the           //
//                            'publicRoutes.js' file                           //
//                                                                             //
/*******************************************************************************/

import React from 'react';
import { Route } from 'react-router-dom';

const CustomRouter = (props) => {
    console.log('Custom Router: ', props);
    return(
        
        <Route path={props.path} render={routeProps => <props.component {...routeProps} componentProps={props.componentProps}/>} />
    )
}

export default CustomRouter;