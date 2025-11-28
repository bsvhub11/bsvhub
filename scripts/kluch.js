let incorrectAttempts = 0;

function exit (event) {
	window.close(); // Close the browser window
}

function showPasswordModal(event) {
	

    event.preventDefault(); // Prevent the default action of the link
    document.getElementById('passwordModal').style.display = 'flex';
    document.getElementById('passwordInput').focus(); // Automatically focus on the password input
}

function closePasswordModal() {
    document.getElementById('passwordModal').style.display = 'none';
    incorrectAttempts = 0; // Reset the incorrect attempts counter
}

function checkPassword() {
    var password = document.getElementById('passwordInput').value;
    var passwordPrompt = document.getElementById('passwordPrompt');
    
    if (password === "admin11") {
        window.open("admin.html", "_self"); // opens in the same tab
        closePasswordModal(); // Close the password modal
    } else {
        incorrectAttempts++;
        passwordPrompt.textContent = "INCORRECT PASSWORD";
        passwordPrompt.classList.add('flash');
        
        setTimeout(() => {
            passwordPrompt.textContent = "Please enter the password:";
            passwordPrompt.classList.remove('flash');
            document.getElementById('passwordInput').value = ''; // Clear the password input
            if (incorrectAttempts >= 3) {
                closePasswordModal();
                window.close(); // Close the browser window
            }
        }, 1000);
    }
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
}