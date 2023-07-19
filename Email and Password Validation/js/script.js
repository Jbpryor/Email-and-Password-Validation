const form = document.querySelector("form"),
emailField = form.querySelector(".email-field"),
emailInput = emailField.querySelector(".email"),
passField = form.querySelector(".create-password"),
passInput = passField.querySelector(".password"),
cPassField = form.querySelector(".confirm-password"),
cPassInput = cPassField.querySelector(".cPassword");

// Email Validation
function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        return emailField.classList.add('invalid');
    }
    emailField.classList.remove('invalid');
}

const eyeIcons = document.querySelectorAll('.show-hide');

eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener('click', () => {
        const pInput = eyeIcon.parentElement.querySelector('input');
        if (pInput.type === 'password') {
            eyeIcon.classList.replace('bxs-hide', 'bxs-show');
            return (pInput.type = 'text');
        }
        eyeIcon.classList.replace('bxs-show', 'bxs-hide');
        pInput.type = 'password';
    });
});

function createPass() {
    const passPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (!passInput.value.match(passPattern)) {
        return passField.classList.add("invalid");
    }
    passField.classList.remove("invalid");
}

function confirmPass() {
    if (passInput.value !== cPassInput.value || cPassInput.value === "") {
        return cPassField.classList.add('invalid'); 
    }
    cPassField.classList.remove('invalid');
}

//Calling Function on Form Submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmail();
    createPass();
    confirmPass();

    emailInput.addEventListener('keyup', checkEmail);
    passInput.addEventListener('keyup', createPass);
    cPassInput.addEventListener('keyup', confirmPass);

    if (
        !emailField.classList.contains('invalid') && 
        !passField.classList.contains('invalid') &&
        !cPassField.classList.contains('invalid')
    )   {
         location.href = form.getAttribute('action') 
    }
})


