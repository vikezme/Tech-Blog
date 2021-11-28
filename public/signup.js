async function signupFormHandler(event){
    event.preventDefault();

    const username = document.querySelector('#signupUsername').value.trim();
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();
    const confirmPassword = document.querySelector('#signupConfirm').value.trim();

    console.log(username);
    console.log(email);
    console.log(password);

    if (password === confirmPassword){
        if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log(response);
            document.location.replace('/dashboard');
        } else {
            console.log(response.statusText);
        }
        }
    } else {
        console.log("Passwords don't match. Please ensure passwords match to sign up")
    }

  };

 document.querySelector('#signupForm').addEventListener('submit', signupFormHandler);
