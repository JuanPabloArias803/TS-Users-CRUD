import { Navbar, NavbarEvents } from '../../components/Navbar/navbar';
import { formAction, UserForm } from '../../components/UserForm/user-form';
import "./create-user.css";

export async function CreateUser() {
  
  //render page

  const $root = document.querySelector('#root') as HTMLDivElement;
  $root.innerHTML = `
    ${Navbar()}
    <div class="create-container">
      <h2>Create user</h2>
      ${UserForm()}
    </div>
 `;

  //page logic

  NavbarEvents();
  formAction("create");
}
