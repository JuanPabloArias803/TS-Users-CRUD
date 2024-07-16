import { Navbar, NavbarEvents } from '../../components/Navbar/navbar';
import { formAction, UserForm } from '../../components/UserForm/user-form';
import "./edit-user.css";

export function EditUser() {
  
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
  formAction("edit");
  
}
