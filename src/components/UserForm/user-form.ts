import './user-form.css';

export function UserForm() {
  //render component

  return `
        <form>
            <label for="form-name">Name:</label>
            <input id="form-name" type="text" required maxlength="20">
            <label for="form-email">Email:</label>
            <input id="form-email" type="email" required maxlength="30">
            <label for="form-avatar">Avatar:</label>
            <input id="form-avatar" type="text" required value="https://randomuser.me/api/portraits/men/1.jpg">
        </form>
    `;
}
