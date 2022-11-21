import { RouteObject } from 'react-router-dom';
import HomeScreen from './../pages/Home';
import FruitScreen from './../pages/Fruit';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomeScreen />
  },
  {
    path: '/nutritional-table',
    element: <FruitScreen />
  }
];

export default routes;