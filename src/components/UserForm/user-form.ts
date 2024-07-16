import { postApi } from '../../helpers/fetch';
import { NavigateTo } from '../../Router';
import './user-form.css';

export function UserForm() {
//render component

  return `
    <form class="user-form">
        <label for="form-name">Name:</label>
        <input id="form-name" type="text" required maxlength="20">
        <label for="form-email">Email:</label>
        <input id="form-email" type="email" required maxlength="30">
        <label for="form-avatar">Avatar:</label>
        <input id="form-avatar" type="text" required value="https://randomuser.me/api/portraits/men/1.jpg">
        <button class="form-submit" type="submit" >Enviar</button>
    </form>
`;

}

//component logic

export function formAction(action:"create"|"edit"){
    const $userName=document.querySelector("#form-name") as HTMLInputElement;
    const $userEmail=document.querySelector("#form-email") as HTMLInputElement;
    const $userAvatar=document.querySelector("#form-avatar") as HTMLInputElement;
    const $userForm=document.querySelector(".user-form") as HTMLFormElement;
    if(action==="create"){
        $userForm.addEventListener("submit",async (event)=>{
            event.preventDefault();
            if(!$userName.value||!$userEmail.value||!$userAvatar.value){
              alert("Error inesperado");
            }else{
                await postApi("http://localhost:3000/users",{"name": $userName.value, "email": $userEmail.value, "avatar": $userAvatar.value});
                NavigateTo("/");
            }
          })
    }
    if(action==="edit"){
        $userName.value="test";
        $userEmail.value="test";
        $userAvatar.value="test";
    }
}
