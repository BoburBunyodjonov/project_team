const form = document.querySelector('#form');

const getData = JSON.parse(localStorage.getItem('UserData'));

if(getData){
    window.location.href = 'index.html';
}else{
    // window.location.href = 'login.html';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = e.target[0].value.trim();
    const password = e.target[1].value;

    // Email
    const isValidEmail = /[a-zA-Z]$/;
    const emailValid = isValidEmail.test(email);

    // Password
    const isValidPassword = /[a-zA-Z0-9]$/;
    const passwordValid = isValidPassword.test(password);

    if(emailValid && passwordValid   ) {
        localStorage.setItem('UserData', JSON.stringify({email, password}));
        e.target.reset();
        window.location.href = 'index.html';
    }else {
        alert('Please enter a valid email...')
    }

    
});


