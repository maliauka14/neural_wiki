import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from '../pages/mainPage/MainPage';
import Neurals from '../pages/neurals/Neurals';
import Theory from '../pages/theory/Theory';
import FAQ from '../pages/FAQ/FAQ';
import Rules from '../pages/rules/Rules';
import Authorization from '../pages/authorization/Authorization';
import ForgotPassword from '../pages/forgotPassword/ForgotPassword';
import Registration from '../pages/registration/Registration';
import WrongPage from '../pages/wrongPage/WrongPage';

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
          <Neurals />
        </Route>

        <Route exact path='/FAQ'>
          <FAQ />
        </Route>

        <Route exact path='/theory'>
          <Theory />
        </Route>

        <Route exact path='/rules'>
          <Rules />
        </Route>

        <Route exact path='/*'>
          <WrongPage/>  
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
