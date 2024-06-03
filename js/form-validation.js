document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi để kiểm tra
    validateForm();
});

function validateForm(){
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        let isValid = true;

        document.getElementById('usernameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';

        if(username.trim() === ''){
            document.getElementById('usernameError').textContent = 'Username is required.';
            isValid =false;
        }

        if(email.trim() === ''){
            document.getElementById('emailError').textContent = 'Email is required.';
            isValid = false;
        }else if (!validateEmail(email)){
            document.getElementById('emailError').textContent = 'Invalid email format.';
            isValid = false;
        }

        if(password.trim() === ''){
            document.getElementById('passwordError').textContent = 'Password is required.';
            isValid = false;
        }else if (password.length < 6){
            document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
          
        }
    

        function validateEmail(email){
            const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return re.test(email);
        }

}