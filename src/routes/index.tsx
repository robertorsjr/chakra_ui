import { Switch } from 'react-router-dom';
import RoutesWithAuth from './routesWithAuth';
import RoutesWithoutAuth from './routesWithoutAuth';
import { useAuth } from '../hooks/useAuth';
import { Loading } from '../components';

function Routes() {
  const { signed, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return <Switch>{signed ? <RoutesWithAuth /> : <RoutesWithoutAuth />}</Switch>;
}

export default Routes;
