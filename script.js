// Try to load donationAmount from localStorage
let donationAmount = parseFloat(localStorage.getItem('donationAmount')) || 0;

function donate() {
    if (donationAmount < 500) {
        donationAmount += 0.99;
        // Save donationAmount to localStorage
        localStorage.setItem('donationAmount', donationAmount);
        updateProgressBar();
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.textContent = `${donationAmount.toFixed(2)}/500$`;

    // Calculate and set the width of the progress bar
    progressBar.style.width = `${(donationAmount / 500) * 100}%`;
    
    if (donationAmount >= 500) {
        const thankYouMessage = document.getElementById('thank-you-message');
        thankYouMessage.classList.remove('hidden');
    }
}

// Attach the donate() function to the button's onclick event
const donateButton = document.getElementById('donate-button');
donateButton.addEventListener('click', donate);

// Initialize progress bar on page load
updateProgressBar();
