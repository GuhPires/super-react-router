# Super React Router

Super React Router is simply a **clean, organized and modular** boilerplate for SPA's using Create React App with React Routes. This project has some built-in components such a **_Authentication Router, Not Found Page and a Custom Router_**, everything that you need to start your project without be concerned about routes setup.

## Get Ready

To start, you must:

1. Clone or download this repository
2. Enter into the project folder by the command `cd super-ract-router`
3. Inside the project folder, simply type the command `npm install` ( you must have Node.js installed into your machine ) to install all dependecies of the project
    - It will take a while to install everything, so have a break :stuck_out_tongue_winking_eye:
4. After installing it, type the `npm start` command to run the server

## Usage

I will walk you trough the proccess to make it crystal clear. Make sure that you follow this order, so you can understand all parts of the application completely.

### Creating a new Component

It is really simple to create an component, simply go into the _components_ folder and create a new folder with your component name, then create an _index.js_ file inside of it with the code bellow: 

```javascript

import React from 'react';

class YourComponent extends React.Component {
    render(){
        return (
            <h1>Hello from 'Your Component'!</h1>
        )
    }
}

export default YourComponent;

```

I am assuming that you already know React.js, so you know that you can edit this as you want.

The example bellow is just if you want to use the _Terminal_ instead of the GUI version to do this step:

```

mkdir YourComponent
cd YourComponent
touch index.js

```

### Creating a Route

In order to create a route to this component, you should decide if this component will be [_Public_](#Private%20Routes) or [_Private_](#Public%20Routes) ( see the section bellow to understand those concepts ). After deciding which route component you want to use, go to the _routes_ folder and open the desired file ( _privateRoutes.js_ for [Private Routes](#Private%20Routes) or _publicRoutes.js_ for [Public Routes](#Public%20Routes)). I will provide examples using both types, so don't worry.

* **_privateRoutes.js_**

I want to render the _YourComponent_ when the URL match _'/mycomponent'_, but the user must be authenticated in to access it.

```javascript

{
    path: '/mycomponent',              
    component: YourComponent,   
    componentProps: {},  
    redirect: '/login'               
}

```

* **_publicRoutes.js_**

I want to render the _YourComponent_ when the URL match _'/mycomponent'_, but the user doesn't need to be authenticated in to access it.

```javascript

{
    path: '/mycomponent',              
    component: YourComponent,   
    componentProps: {}
}

```

_To see a more in depth explanation about the syntax, please visit [this section](#Routes%20Folder)_

**Important:** Don't forget to `import YourComponent from '../components/YourComponent'` ( or from other path ), otherwise it will throw an error.

### You're Ready To Go!

If you follow those steps, you should be able to do the `npm start` command and test your application!

## The Environment

After installing all dependencies, your folder structure should look like this: 
    
    .
    |--- node_modules
    |--- public
         |--- favicon.ico
         |--- index.html
         |___ manifest.json
    |--- src
         |--- components
              |--- AuthRouter
                   |___ index.js
              |--- CustomRouter
                   |___ index.js
              |--- DashboardComponent
                   |___ index.js
              |--- HomeComponent
                   |___ index.js
              |--- LoginComponent
                   |___ index.js
              |--- MainComponent
                   |___ index.js
              |___ NotFound
                   |___ index.js
         |--- routes
              |--- privateRoutes.js
              |--- publicRoutes.js
         |--- context.js
         |___ index.js
    |--- .gitignore
    |--- package-lock.json
    |--- package.json
    |___ README.md

I will not go much in depth of the *node_modules, public, .gitignore, package-lock.json, package.json and the README.md* files/folders since they're generated by React tool ( create-react-app ), NPM and GitHub.

### SRC Folder

All the application lies into this folder, all the components, pages and necessary routes goes here. Some components are crutial to the project functionallity, but some were used as an example, I will be highlighting which components can or can't be modified or deleted into this documentation.

#### Components Folder

This folder will hold all the project Components (oh really?! :open_mouth:), you can create as many components as you like. Please keep the same folder structure just for organization sake.

* **AuthRouter**

This is the Route with Authentication Component, **You cannot delete it** since it is crutial for the routes that needs authentication. It is a really staright forward component that makes use of React Router, if the provided condition is true, it will proceed to the desired route, othewise it will be redirected to some provided path. One example usage for this component is any page that needs login or other kind of permission for accessing the provided route.

```javascript

<Route 
    path={this.props.path}
    render={routeProps => context.state.isLogged ? <this.props.component {...routeProps} componentProps={this.props.componentProps}/> : <Redirect to={{ pathname: this.props.redirect }} />
//                        |----- CONDITION -----| |----------------------------- IF 'CONDITION' IS TRUE -----------------------------| |--------------------- ELSE ---------------------|
    }
/>

```

* **CustomRouter**

A Component just like the **_AuthRouter_** but without any conditions, it will render the desiderd component when the URL match the provided _path_. **You cannot delete it**, because it is needed to create routes to your application.

```javascript

<Route path={props.path} render={routeProps => <props.component {...routeProps} componentProps={props.componentProps}/>} />
//    |------------------------------------------------ NO 'CONDITION' ------------------------------------------------|

```

* **DasboardComponent, LoginComponent and MainComponent**

These components are used as an example, and yes **You CAN delete it** ( and in fact, you should ) after testing it out, since it is just an example of how it works. Don't forget to delete all `import`'s that make use of them.

* **HomeComponent**

This is your homepage by default, and **you can edit it** as you would like to.

* **NotFound**

Just a Not Found ( 404 ) page, **you can edit it** too, feel free to do whatever you would like to.

#### Routes Folder

This folder holds all the files that contains routes needed to the application, **you don't need to create files here ( and it isn't recommended to do so )**. Basically it has 2 files that are plain JavaScript, _privateRoutes.js_ and _publicRoutes.js_. They are responsible of all routes paths, static props and components that you want to render.

* **Private Routes**

All routes that need some kind of authentication **must** be declared at the **_privateRoutes.js_** file ( inside the _PrivateRoutes_ array ), following the object structure as the example bellow: 

```javascript

{
    path: '/dashboard',              // This is the path that you want
    component: DashboardComponent,   // The component that should be rendered when the URL mathces the provided path
    componentProps: {key: "value"},  // If you want some static values, otherwise just let it as an empty object {}
    redirect: '/login'               // The path that you want to redirect the user if the output of the condition that you provided is false
}

```

Don't forget to put a comma into the last curly brace ( } ) before stating another route object. **All the objects must follow this pattern/syntax** otherwise it won't work properly. 

* **Public Routes**

This file is used for routes that do not need any kind of authentication, so if you just want a route that anybody can access, should be declared into the **_publicRoutes.js_** file ( inside the _PublicRoutes_ array ), following the object structure as the example bellow:

```javascript
{
    path: '/main',                   // Path that you want
    component: MainComponent,        // The component that should be rendered when the URL mathces the provided path
    componentProps: {key: "value"}   // If you want some static values, otherwise just let it as an empty object {}
},                                   // Comma separating route objects
{
    path: '/login',
    component: LoginComponent,
    componentProps: { key: "value" }
}

```

Don't forget to put a comma into the last curly brace ( } ) before stating another route object. **All the objects must follow this pattern/syntax** otherwise it won't work properly. 

### Context File

This file just holds all the setup needed to the new ( not so new ) React Context API. **You can edit or delete it** if you want to, but don't forget to **remove** all the `<MyContext.Consumer>`  and the `(context) => ` function ( if you opt to remove it ). Bellow is an example of how you should extract the code that is inside of an _Context_:

```javascript

<MyContext.Consumer> 
    {(context) => (
        // You can delete the Context Consumer and the function, but first: COPY ALL THE CODE THAT IS INSIDE THIS FUNCTION!
    )}
</MyContext.Consumer>

```
 - **Make sure to do that in all Components that make use of Context Consumer.**

You also need to remove the `<MyProvider> </MyProvider>` tags from the **_index.js_ file**, and delete the line that import it.

If you want to know more about the React Context API, check out [this project](https://github.com/GuhPires/reactcontext) created by [me](https://github.com/GuhPires) and the official docs [here](https://reactjs.org/docs/context.html).


### Index File

This is the main file of the application, it is used only for switching the part of the code that should be rendered ( done by React Router ), but if you want to you can edit anything **outside of the `<Switch> </Switch>` block but inside of `<Router> </Router>` block**, but it will show in every page of your application. Can be a perfect place for a _header_ or a _footer_, for example.