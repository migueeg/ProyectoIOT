const API_URL = "http://localhost:3000";

const btnMotor = document.getElementById("toggleMotor");
const logsTable = document.getElementById("logsTable");

//
// Motor
//
async function loadMotorStatus() {
    const res = await fetch(`${API_URL}/motor`);
    const data = await res.json();

    btnMotor.textContent = data.motor ? "APAGAR MOTOR" : "ENCENDER MOTOR";
    btnMotor.style.background = data.motor ? "#d11" : "#0a0";
}

btnMotor.onclick = async () => {
    await fetch(`${API_URL}/motor/toggle`, { method: "POST" });
    loadMotorStatus();
};

loadMotorStatus();

//
// Logs
//
async function loadLogs() {
    const res = await fetch(`${API_URL}/logs`);
    const data = await res.json();

    logsTable.innerHTML = data.map(log => `
        <tr>
            <td>${log.id}</td>
            <td>${log.timestamp}</td>
            <td>${log.sensor}</td>
            <td>${log.value}</td>
        </tr>
    `).join("");
}

setInterval(loadLogs, 1000);
loadLogs();