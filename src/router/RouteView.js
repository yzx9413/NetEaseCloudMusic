import React from 'react';
import { Route, Switch, Redirect } from 'dva/router';

export default (props) => {
    return <Switch>{
        props.routes.map((item, index) => {
            return <Route path={item.path} render={
                (props) => {
                    if (item.redirect) {
                        return <Redirect to={item.redirect} />
                    } else if (item.children) {
                        return <item.component {...props} routes={item.children}></item.component>
                    } else {
                        return <item.component {...props}></item.component>
                    }
                }
            } key={index} />
        })
    }</Switch>
}