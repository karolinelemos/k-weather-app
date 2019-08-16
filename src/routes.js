import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Search from './pages/search'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
        </Switch>
    </BrowserRouter>
)

export default Routes