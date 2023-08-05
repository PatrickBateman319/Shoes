let currentProgress = 0;

function updateProgress() {
    currentProgress += 0.99;
    if (currentProgress >= 500) {
        document.getElementById("progress").innerText = "500/500$";
        document.getElementById("message").innerText = "დიდი მადლობა გაწეული სამსახურისთვის, უფალი შეგეწიოთ";
        document.getElementById("donateButton").disabled = true;
    } else {
        document.getElementById("progress").innerText = currentProgress.toFixed(2) + "/500$";
    }
}
