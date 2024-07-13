import { NavigateTo } from '../../Router';
import './navbar.css';

//render component

export function Navbar() {
  return `
        <nav>
            <ul>
                <li class="navbar-home">Home</li>
                <li class="navbar-create">Create</li>
                <li>About-us</li>
            </ul>        
        </nav>
    `;
}

//component logic

export function NavbarEvents() {
  const $home = document.querySelector('.navbar-home') as HTMLLIElement;
  $home?.addEventListener('click', () => {
    NavigateTo('/');
  });

  const $create = document.querySelector('.navbar-create') as HTMLLIElement;
  $create?.addEventListener('click', () => {
    NavigateTo('/create-user');
  });
}
