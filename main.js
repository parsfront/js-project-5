const userNameInput = document.querySelector(".user-input");
const passWordInput = document.querySelector(".pass-input");
const userNameMsg = document.querySelector(".username-msg");
const passWordMsg = document.querySelector(".password-msg");
const signinMsg = document.querySelector(".signin-status");
const signinBtn = document.querySelector(".signin-button");

signinBtn.addEventListener("click", signIn);

function signIn(event) {
    event.preventDefault();
    userNameMsg.innerHTML = "";
    passWordMsg.innerHTML = "";
    const userNameValue = userNameInput.value;
    const passWordValue = passWordInput.value;
    let ifSendData = true;

    if (userNameValue.length === 0 || userNameValue.indexOf("@") === -1 || userNameValue.indexOf("@") === -1) {
        userNameMsg.innerText = "Please enter a valid Email";
        ifSendData = false;
    }
    if (passWordValue.length === 0) {
        passWordMsg.innerText = "Please enter your Password";
        ifSendData = false;
    } else if (passWordValue.length < 4) {
        passWordMsg.innerText = "Password must be at least 4 characters";
        ifSendData = false;
    }

    if (ifSendData) {
        const body = JSON.stringify({
            email: userNameValue,
            password: passWordValue,
        });
        const headers = {
            "Content-Type": "application/json",
        };
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: body,
            headers: headers,
        }).then((response) => {
            if (response.ok) {
                signinMsg.innerText = "Sign in successful";
            } else {
                signinMsg.innerText = "Sign in failed";
            }
        });
    }
}
