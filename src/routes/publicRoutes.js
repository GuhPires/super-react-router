/******************************* PUBLIC ROUTES *********************************/
//                                                                             //
//          This file holds ALL PUBLIC ROUTES needed for the app.              //
//          Public routes are all routes that DOES NOT need authentication.    //
//                                                                             //
//          If you want authentication to access some page, please             //
//                  place it inside the 'privateRoutes.js'                     //
//                                                                             //
//          In order to the route perform as expected, use THE EXACT SAME      //
//                          SYNTAX shown bellow:                               //
//                                                                             //
/*******************************************************************************/

import MainComponent from '../components/MainComponent';
import LoginComponent from '../components/LoginComponent';

const PublicRoutes = [
    {
        path: '/main',
        component: MainComponent,
        componentProps: {key: "value"}
    },
    {
        path: '/login',
        component: LoginComponent,
        componentProps: { key: "value" }
    }
];

export default PublicRoutes;