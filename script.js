let donationAmount = 0;

function donate() {
    if (donationAmount < 500) {
        donationAmount += 0.99;
        updateProgressBar();
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.textContent = `${donationAmount.toFixed(2)}/500$`;

    if (donationAmount >= 500) {
        const thankYouMessage = document.getElementById('thank-you-message');
        thankYouMessage.classList.remove('hidden');
    }
}

// Attach the donate() function to the button's onclick event
const donateButton = document.getElementById('donate-button');
donateButton.addEventListener('click', donate);
