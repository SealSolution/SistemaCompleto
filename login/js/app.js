const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");



function ir_cadastro() {

  container.classList.add("sign-up-mode");
}

function voltar_login(){

  container.classList.remove("sign-up-mode");
}