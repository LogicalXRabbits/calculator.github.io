document.getElementById('add-tasks-button').addEventListener('click', addTasks);
document.getElementById('calculate-button').addEventListener('click', calculate);

function addTasks() {
    var numTasks = parseInt(document.getElementById('num-tasks').value) || 0;
    var tasksInputsContainer = document.getElementById('tasks-inputs-container');
    tasksInputsContainer.innerHTML = '';

    for (var i = 1; i <= numTasks; i++) {
        var taskDiv = document.createElement('div');
        taskDiv.classList.add('input-section');

        taskDiv.innerHTML = `
            <label for="hours-task${i}">Waktu Task ${i} (jam):</label>
            <input type="number" class="task-input hours-task" id="hours-task${i}" placeholder="Masukkan waktu task ${i}" />
            <label for="rate-task${i}">Harga per Jam Task ${i} (IDR):</label>
            <input type="number" class="task-input rate-task" id="rate-task${i}" placeholder="Masukkan harga per jam task ${i}" />
        `;

        tasksInputsContainer.appendChild(taskDiv);
    }
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
}

function calculate() {
    var totalHours = 0;
    var totalPrice = 0;

    var hoursInputs = document.querySelectorAll('.hours-task');
    var rateInputs = document.querySelectorAll('.rate-task');

    for (var i = 0; i < hoursInputs.length; i++) {
        var hours = parseFloat(hoursInputs[i].value) || 0;
        var rate = parseFloat(rateInputs[i].value) || 0;

        totalHours += hours;
        totalPrice += hours * rate;
    }

    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p>Jumlah Task: ${document.getElementById('num-tasks').value}</p>
        <p>Total Waktu: ${totalHours.toFixed(2)} jam</p>
        <p>Total Harga: ${formatCurrency(totalPrice)}</p>
    `;
}
// JavaScript to show and hide the welcome notification
document.addEventListener('DOMContentLoaded', function () {
    var welcomeNotification = document.getElementById('welcome-notification');
    var closeNotificationButton = document.getElementById('close-notification');

    // Show notification on page load
    welcomeNotification.style.display = 'block';

    // Hide notification when the close button is clicked
    closeNotificationButton.addEventListener('click', function () {
        welcomeNotification.style.display = 'none';
    });
});
