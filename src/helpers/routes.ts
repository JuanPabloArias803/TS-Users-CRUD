import { CreateUser } from '../pages/CreateUser/create-user';
import { Dashboard } from '../pages/Dashboard/dashboard';
import { NotFound } from '../pages/NotFound/not-found';
import { EditUser } from '../pages/EditUser/edit-user';

export const routes = {
  public: [
    { path: '/not-found', page: NotFound },
    { path: '/users', page: Dashboard },
    { path: '/create-user', page: CreateUser },
    { path: '/edit-user', page: EditUser}
  ],
};
