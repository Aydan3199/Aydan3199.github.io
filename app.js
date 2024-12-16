// 戒菸進度追蹤
function calculateBenefits() {
    const daysQuit = document.getElementById("daysQuit").value;
    const results = document.getElementById("results");

    if (daysQuit <= 0 || isNaN(daysQuit)) {
        results.innerHTML = "<p>請輸入有效的天數！</p>";
        return;
    }

    const moneySaved = daysQuit * 110; // 每天省$110
    const healthGain = Math.floor(daysQuit / 30) * 10; // 每30天+10健康分數

    results.innerHTML = `
        <p>您已經省下了 <strong>$${moneySaved}</strong>！</p>
        <p>您的健康提升了 <strong>${healthGain} 分</strong>！</p>
    `;
}

// 儲存戒菸計畫
document.getElementById("planForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const goal = document.getElementById("goal").value;
    const dailyNote = document.getElementById("dailyNote").value;
    const planResults = document.getElementById("planResults");

    planResults.innerHTML = `
        <p>目標：<strong>${goal}</strong></p>
        <p>今日記錄：${dailyNote}</p>
    `;

    document.getElementById("planForm").reset();
});
