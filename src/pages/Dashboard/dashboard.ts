import { Navbar, NavbarEvents } from '../../components/Navbar/navbar';
import { CardEvents, UserCard } from '../../components/UserCard/user-card';
import { getApi } from '../../helpers/fetch';
import { NavigateTo } from '../../Router';
import './dashboard.css';

export async function Dashboard() {
  //render page

  const $root = document.querySelector('#root') as HTMLDivElement;
  $root.innerHTML = `
        ${Navbar()}
        <div class="dashboard-container">
            <h1>Users</h1>
            <div class="users-container"></div>
        </div>
    `;

  //page logic

  NavbarEvents();

  const users: IUser[] = await getApi('http://localhost:3000/users');

  function renderCards() {
    let cardsChilds: string = '';
    users.forEach((user) => {
      cardsChilds += UserCard(user.id, user.name, user.email, user.avatar);
    });
    const $usersContainer = document.querySelector(
      '.users-container'
    ) as HTMLDivElement;
    $usersContainer.innerHTML = `
            ${cardsChilds}
        `;
  }

  renderCards();

  CardEvents();
}
