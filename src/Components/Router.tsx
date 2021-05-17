import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlanetsList from './PlanetsList/PlanetsList';

const Router: FC = () => {

  return <BrowserRouter>
    <Switch>
      <Route path="/planet/:id">
        
      </Route>
      <Route path="/">
        <PlanetsList />
      </Route>
    </Switch>
  </BrowserRouter>;
};

export default Router;