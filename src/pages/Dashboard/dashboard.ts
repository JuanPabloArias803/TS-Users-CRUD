import { Navbar, NavbarEvents } from '../../components/Navbar/navbar';
import { CardEvents, UserCard } from '../../components/UserCard/user-card';
import { getApi } from '../../helpers/fetch';
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
    users.forEach((user: IUser) => {
      cardsChilds += UserCard(user.name, user.email, user.avatar, user.id);
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
