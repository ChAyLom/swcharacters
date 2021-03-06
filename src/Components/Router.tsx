import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlanetsList from './PlanetsList/PlanetsList';
import PlanetView from './PlanetView/PlanetView';
import TopNavigation from './TopNavigation/TopNavigation';

const Router: FC = () => {

  return <BrowserRouter>
    <Switch>
      <Route path="/planet/:planetId">
        <TopNavigation />
        <PlanetView />
      </Route>
      <Route path="/">
        <PlanetsList />
      </Route>
    </Switch>
  </BrowserRouter>;
};

export default Router;