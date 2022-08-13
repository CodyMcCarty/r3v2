import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

// import Product from './product';
import TestPage from './test-page/';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default ({ match }) => {
  return (
    <div>
      <Switch>
        {/* prettier-ignore */}
        <Route path={`${match.url}/testpage`} component={TestPage} />
        {/* You will add routes here */}
      </Switch>
    </div>
  );
};
