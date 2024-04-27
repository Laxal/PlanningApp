import { FC } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { CustomRouteProps } from './types';

const PublicRoute: FC<CustomRouteProps> = (props) => {
  const isToken = localStorage.get('access_token');

  if (isToken) {
    return <Navigate to="/homepage" />;
  }

  return <Route {...props} />;
};

export default PublicRoute;
