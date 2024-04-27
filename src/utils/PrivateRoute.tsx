import { FC } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { CustomRouteProps } from './types';

const PrivateRoute: FC<CustomRouteProps> = (props) => {
  const isTocken = localStorage.get('access_token');

  if (!isTocken) {
    return <Route {...props} element={<Navigate to="auth" />} />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
