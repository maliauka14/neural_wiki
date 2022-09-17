import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from '../pages/mainPage/MainPage';
import Authorization from '../pages/authorization/Authorization';
import ForgotPassword from '../pages/forgotPassword/ForgotPassword';
import Registration from '../pages/registration/Registration';
import TableList from '../tableList/TableList';
import FAQ from '../pages/FAQ/FAQ';

const App = () => {
  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <MainPage />
        </Route>

        <Route exact path='/login'>
          <Authorization />
        </Route>

        <Route exact path='/password_reset'>
          <ForgotPassword />
        </Route>

        <Route exact path='/registration'>
          <Registration />
        </Route>

        <Route exact path='/neural_networks'>
          <TableList />
        </Route>

        <Route exact path='/FAQ'>
          <FAQ />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
