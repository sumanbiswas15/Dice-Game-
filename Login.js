document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

     
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    
    console.log('Logged in:', { username, password });

    
    window.location.href = 'g.html';
});

document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'Home_page.html'; 
});