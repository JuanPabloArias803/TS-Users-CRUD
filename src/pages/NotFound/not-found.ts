import './not-found.css';

export function NotFound() {
  const $root = document.querySelector('#root') as HTMLDivElement;
  $root.innerHTML = `
        <div class="not-found-container">
            <h2>Sorry, page not found :(</h2>
        </div>
    `;
}
