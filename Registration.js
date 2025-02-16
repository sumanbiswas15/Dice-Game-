document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const username = document.getElementById('username').value;
    const phno = document.getElementById('phno').value;
    const password = document.getElementById('password').value;

    
    console.log('Registered:', { username, phno, password });


    window.location.href = 'login.html';
});

document.getElementById('cancelButton').addEventListener('click', function() {
    window.location.href = 'Home_page.html'; 
});