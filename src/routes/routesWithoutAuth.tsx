import { Route, Switch } from 'react-router-dom';
import { SignIn } from '../pages';

function RoutesWithoutAuth() {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact />
    </Switch>
  );
}

export default RoutesWithoutAuth;
