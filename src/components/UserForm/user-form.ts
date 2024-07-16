import { getApi, postApi, putApi } from '../../helpers/fetch';
import { NavigateTo } from '../../Router';
import './user-form.css';

export function UserForm() {
  //render component

  return `
    <form class="user-form">
        <label for="form-name">Name:</label>
        <input id="form-name" type="text" required maxlength="15">
        <label for="form-email">Email:</label>
        <input id="form-email" type="email" required maxlength="30">
        <label for="form-avatar">Avatar:</label>
        <input id="form-avatar" type="text" required value="https://randomuser.me/api/portraits/men/1.jpg">
        <button class="form-submit" type="submit" >Enviar</button>
    </form>
`;
}

//component logic

export async function formAction(
  action: 'create' | 'edit',
  userID: string = ''
) {
  const $userName = document.querySelector('#form-name') as HTMLInputElement;
  const $userEmail = document.querySelector('#form-email') as HTMLInputElement;
  const $userAvatar = document.querySelector(
    '#form-avatar'
  ) as HTMLInputElement;
  const $userForm = document.querySelector('.user-form') as HTMLFormElement;

  if (action === 'create') {
    $userForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (
        !$userName.value ||
        !$userEmail.value ||
        !$userAvatar.value ||
        $userName.value.length > 15 ||
        $userEmail.value.length > 20
      ) {
        alert('Error inesperado');
      } else {
        await postApi('https://users-json-server-ruby.vercel.app/users', {
          name: $userName.value,
          email: $userEmail.value,
          avatar: $userAvatar.value,
        });
        NavigateTo('/');
      }
    });
  }

  if (action === 'edit') {
    const user: IUser = await getApi(
      `https://users-json-server-ruby.vercel.app/users/${userID}`
    );
    $userName.value = user.name;
    $userEmail.value = user.email;
    $userAvatar.value = user.avatar;
    $userForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (
        !$userName.value ||
        !$userEmail.value ||
        !$userAvatar.value ||
        $userName.value.length > 15 ||
        $userEmail.value.length > 30
      ) {
        alert('Error inesperado');
      } else {
        await putApi(
          `https://users-json-server-ruby.vercel.app/users/${userID}`,
          {
            name: $userName.value,
            email: $userEmail.value,
            avatar: $userAvatar.value,
          }
        );
        NavigateTo('/');
      }
    });
  }
}
