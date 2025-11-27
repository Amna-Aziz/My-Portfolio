document.addEventListener('DOMContentLoaded', () => {
    // Card container ko pakadte hain jise flip karna hai
    const cardContainer = document.querySelector('.card-container');

    // Sign Up aur Login buttons ko pakadte hain
    const switchToSignUp = document.getElementById('switchToSignUp');
    const switchToLogin = document.getElementById('switchToLogin');

    // Login aur Sign Up form submissions ko handle karte hain (Optional, for demo)
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Function jo card ko flip karegi
    function flipCard() {
        cardContainer.classList.toggle('flipped');
    }

    // Event Listeners: Click hone par flip function call hoga
    switchToSignUp.addEventListener('click', (e) => {
        e.preventDefault(); // Default link behavior ko rokta hai
        flipCard();
    });

    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault(); // Default link behavior ko rokta hai
        flipCard();
    });

    // Form submit events (Aap yahan actual validation ya API call add kar sakte hain)
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login Attempted!');
        // Yahan actual login logic add karein
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sign Up Attempted!');
        // Yahan actual sign up logic add karein
    });
});