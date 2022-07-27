import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
// import TestPage from "app/marketplace/entities/test-page/testPage";
import TestPage from './testPage';

// import Product from './product';
// import ProductDetail from './product-detail';
// import ProductUpdate from './product-update';
// import ProductDeleteDialog from './product-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute path={match.url} component={TestPage} />
      {/* <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ProductUpdate} />*/}
      {/* <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ProductUpdate} />*/}
      {/* <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ProductDetail} />*/}
    </Switch>
    {/* <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ProductDeleteDialog} />*/}
  </>
);

export default Routes;
