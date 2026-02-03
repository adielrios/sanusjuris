import { Route, Switch } from 'wouter';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
}
