import { deleteApi } from '../../helpers/fetch';
import { NavigateTo } from '../../Router';
import './user-card.css';

//render component

export function UserCard(
  name: string,
  email: string,
  avatar: string,
  id?: string
) {
  return `
        <div class="user-card" id="${id}">
            <div class="user-avatar">
                <img src="${avatar}">
            </div>
            <div class="user-info">
                <h3>${name}</h3>
                <p>${email}</p>
                <span>
                    <button class="card-edit" userid="${id}">Edit</button>
                    <button class="card-delete" userid="${id}">Delete</button>
                </span>
            </div>
        </div>
    `;
}

//component logic

export function CardEvents() {
  document.querySelectorAll('.card-delete').forEach((button) => {
    button.addEventListener('click', async () => {
      if (confirm('¿Estás seguro de eliminar este usuario?')) {
        await deleteApi(
          `http://localhost:3000/users/${button.getAttribute('userid')}`
        );
        NavigateTo('/');
      } else {
        return;
      }
    });
  });

  document.querySelectorAll('.card-edit').forEach((button) => {
    button.addEventListener('click', () => {
      NavigateTo(`/edit-user?userid=${button.getAttribute("userid")}`);
    });
  });
}
