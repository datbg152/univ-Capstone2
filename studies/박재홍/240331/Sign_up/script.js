/* Class가 my-form인 요소를 찾아 loginForm 변수에 할당 */
let loginForm = document.querySelector(".my-form");

/* Id가 email인 요소를 찾아 email 변수에 할당 */
let email = document.getElementById("email");

/* Id가 password인 요소를 찾아 password 변수에 할당 */
let password = document.getElementById("password");

/* Id가 confirmPassword인 요소를 찾아 confirm-password 변수에 할당 */
let confirmPassword = document.getElementById("confirm-password")

/* loginForm요소에 submit 이벤트 리스너를 추가하여 폼이 제출될 때마다 이벤트를 처리하는 함수를 정의 */
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('Email:', email.value);
    console.log('Password:', password.value);
});

/* 비밀번호 확인 입력 필드의 값이 변경될 때마다 호출 */
function onChange() {
    /* 비밀번호 확인 입력 필드의 값이 비밀번호 입력 필드의 값과 일치하는지 확인. 불일치 시 메시지 출력 */
    if (confirmPassword.value === password.value) {
        confirmPassword.setCustomValidity('');
    } else {
        confirmPassword.setCustomValidity('Passwords do not match!');
    }
}

password.addEventListener('change', onChange);
confirmPassword.addEventListener('change', onChange);