/******************************* PRIVATE ROUTES ********************************/
//                                                                             //
//          This file holds ALL PRIVATE ROUTES needed for the app.             //
//          Private routes are all routes that NEED authentication.            //
//                                                                             //
//          If you don't want authentication to access some page, please       //
//                  place it inside the 'publicRoutes.js'                      //
//                                                                             //
//          In order to the route perform as expected, use THE EXACT SAME      //
//                          SYNTAX shown bellow:                               //
//                                                                             //
/*******************************************************************************/

import DashboardComponent from '../components/DashboardComponent';

const PrivateRoutes = [
    {
        path: '/dashboard',
        component: DashboardComponent,
        componentProps: {key: "value"},
        redirect: '/login'
    }
];

export default PrivateRoutes;