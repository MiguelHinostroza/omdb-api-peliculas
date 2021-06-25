import React, { FunctionComponent } from 'react';
import {Route} from 'react-router-dom';
import {IRoute} from "../models/IRoute";

interface OwnProps extends IRoute{}

type Props = OwnProps;

const SubRoute: FunctionComponent<Props> = (route) => {

  return (
    <Route path={route.path} render={(props => (<route.component {...props} routes={route.routes} />))} />
  );
};

export default SubRoute;
