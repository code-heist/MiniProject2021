const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

const sign_in_btn_1 = document.querySelector("#sign-in-btn-1");
const sign_up_btn_1 = document.querySelector("#sign-up-btn-1");

const container = document.querySelector(".container-1");

sign_up_btn_1.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
  
  sign_in_btn_1.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });