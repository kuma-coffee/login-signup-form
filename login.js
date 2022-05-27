function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".formMessage");

    messageElement.textContent = message;
    messageElement.classList.remove("formMessage--success", "formMessage--error");
    messageElement.classList.add(`formMessage--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("errorMessage--error");
    inputElement.parentElement.querySelector(".errorMessage").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("errorMessage--error");
    inputElement.parentElement.querySelector(".errorMessage").textContent = "";
}

var state = false;
        function toogle()
        {
            if(state)
            {
                document.getElementById("password").setAttribute("type","password");
                document.getElementById("eye").style.color="#adadad";
                state = false;
            } else {
                document.getElementById("password").setAttribute("type","text");
                document.getElementById("eye").style.color="#009579";
                state = true;
            }
        }

var state = false;
        function toogle1()
        {
            if(state)
            {
                document.getElementById("password1").setAttribute("type","password");
                document.getElementById("eye1").style.color="#adadad";
                state = false;
            } else {
                document.getElementById("password1").setAttribute("type","text");
                document.getElementById("eye1").style.color="#009579";
                state = true;
            }
        }

var state = false;
        function toogle2()
        {
            if(state)
            {
                document.getElementById("password2").setAttribute("type","password");
                document.getElementById("eye2").style.color="#adadad";
                state = false;
            } else {
                document.getElementById("password2").setAttribute("type","text");
                document.getElementById("eye2").style.color="#009579";
                state = true;
            }
        }        

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("createAcc");
        createAccountForm.classList.remove("createAcc");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("createAcc");
        createAccountForm.classList.add("createAcc");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".formInput").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
