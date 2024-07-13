import { CreateUser } from '../pages/CreateUser/create-user';
import { Dashboard } from '../pages/Dashboard/dashboard';
import { NotFound } from '../pages/NotFound/not-found';

export const routes = {
  public: [
    { path: '/not-found', page: NotFound },
    { path: '/users', page: Dashboard },
    { path: '/create-user', page: CreateUser },
  ],
};
