import { Navbar, NavbarEvents } from '../../components/Navbar/navbar';
import { UserForm } from '../../components/UserForm/user-form';

export function CreateUser() {
  //render page

  const $root = document.querySelector('#root') as HTMLDivElement;
  $root.innerHTML = `
    ${Navbar()}
    <h2>Create user</h2>
    ${UserForm()}
 `;

  //page logic
  NavbarEvents();
}
