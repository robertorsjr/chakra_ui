import { Route, Switch } from 'react-router-dom';
import { Home } from '../pages';

function RoutesWithAuth() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  );
}

export default RoutesWithAuth;
