import { Switch } from 'react-router-dom';
import RoutesWithAuth from './routesWithAuth';
import RoutesWithoutAuth from './routesWithoutAuth';
import { useAuth } from '../hooks/useAuth';

function Routes() {
  const { signed } = useAuth();

  return <Switch>{signed ? <RoutesWithAuth /> : <RoutesWithoutAuth />}</Switch>;
}

export default Routes;
