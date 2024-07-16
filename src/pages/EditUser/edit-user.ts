import { Navbar, NavbarEvents } from '../../components/Navbar/navbar';
import { formAction, UserForm } from '../../components/UserForm/user-form';
import { getApi } from '../../helpers/fetch';
import { NavigateTo } from '../../Router';
import './edit-user.css';

export async function EditUser() {
  //evaluate valid params

  const params = new URLSearchParams(window.location.search);
  const userID = params.get('userid');
  const users: IUser[] = await getApi(
    'https://users-json-server-ruby.vercel.app/users'
  );
  let userFlag: boolean = false;
  users.forEach((user) => {
    if (user.id === userID) {
      userFlag = true;
    }
  });

  if (userFlag === false) {
    NavigateTo('/not-found');
    return;
  }

  //render page

  const $root = document.querySelector('#root') as HTMLDivElement;
  $root.innerHTML = `
    ${Navbar()}
    <div class="edit-container">
      <h2>Edit User</h2>
      ${UserForm()}
    </div>
 `;

  //page logic

  NavbarEvents();
  formAction('edit', userID!);
}
