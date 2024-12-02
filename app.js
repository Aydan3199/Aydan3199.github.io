// 計算戒菸天數
function calculateDays() {
    const startDateInput = document.getElementById("startDate");
    const daysElement = document.getElementById("days");

    if (!startDateInput.value) {
        alert("請選擇您的戒菸開始日期！");
        return;
    }

    const startDate = new Date(startDateInput.value);
    const today = new Date();
    const difference = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    if (difference < 0) {
        alert("戒菸開始日期不能是未來的日期！");
        return;
    }

    daysElement.textContent = difference;
}
