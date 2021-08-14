import { Route, Switch } from 'react-router-dom';
import { Login } from '../pages';

function RoutesWithoutAuth() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
    </Switch>
  );
}

export default RoutesWithoutAuth;
