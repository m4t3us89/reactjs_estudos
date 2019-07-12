import React from 'react'

import { BrowserRouter, Switch, Route, Redirect }  from 'react-router-dom'


import Main from './pages/main'
import Product from './pages/product'

import isAuthenticated  from './auth/auth'
 
const PrivateRoute = ({ component: Componenet, ...rest }) => (
    <Route {...rest} render={props=> (
        isAuthenticated() ? 
            <Componenet { ...props } />
         : 
            <Redirect to={{ pathname: '/' , state: {from: props.locatiton} }} />
    )}/>
)

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <PrivateRoute path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
)