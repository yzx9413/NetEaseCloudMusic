import React from 'react';
import { Router } from 'dva/router';
// import IndexPage from './routes/main';

import Config from './router/Routerconfig';
import RouterView from './router/RouteView';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <React.Fragment>
        <RouterView routes={Config.routes} />
      </React.Fragment>
    </Router>
  );
}

export default RouterConfig;
