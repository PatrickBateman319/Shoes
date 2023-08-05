let currentAmount = 0;
const maxAmount = 500;

function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    progressFill.textContent = `${currentAmount.toFixed(2)}/${maxAmount}$`;
    const progressBarWidth = (currentAmount / maxAmount) * 100;
    progressFill.style.width = `${progressBarWidth}%`;

    if (currentAmount >= maxAmount) {
        const donateButton = document.getElementById('donateButton');
        donateButton.disabled = true;
        progressFill.textContent = 'დიდი მადლობა გაწეული სამსახურისთვის, უფალი შეგეწიოთ';
    }
}

document.getElementById('donateButton').addEventListener('click', () => {
    if (currentAmount < maxAmount) {
        currentAmount += 0.99;
        updateProgressBar();
    }
});

