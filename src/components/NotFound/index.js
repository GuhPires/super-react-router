/***************************** NOT FOUND COMPONENT *****************************/
//                                                                             //
//          This is the Not Found Component file. It is shown whenever the     //
//              URL does no match with any of you declared routes              //
//                              (Private or Public).                           //
//                                                                             //
//                         Feel free to edit this component.                   //
//                                                                             //
/*******************************************************************************/


import React from 'react';

const NotFound = (props) => {
    return (
        <div className="container">
            <h1>404</h1>
            <h2>Page Not Found!</h2>  
        </div>
    )
}

export default NotFound;