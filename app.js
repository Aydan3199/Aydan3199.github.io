// 戒菸進度追蹤功能
function calculateBenefits() {
    const daysQuit = document.getElementById('daysQuit').value;
    const resultsDiv = document.getElementById('results');
    
    if (!daysQuit || daysQuit <= 0) {
        resultsDiv.innerHTML = '<p>請輸入正確的天數。</p>';
        return;
    }

    let progressMessage = `<h3>您已經戒菸 ${daysQuit} 天！</h3>`;
    
    // 根據天數顯示進度
    if (daysQuit >= 1 && daysQuit <= 30) {
        progressMessage += "<p>您的血液循環已經改善。</p>";
    } 
    if (daysQuit >= 365) {
        progressMessage += "<p>1年內，您的心臟病風險減少一半！</p>";
    }
    if (daysQuit >= 1825) {
        progressMessage += "<p>5年後，您的中風風險大幅降低。</p>";
    }
    
    resultsDiv.innerHTML = progressMessage;
}

// 表單儲存計畫功能
document.getElementById('planForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const goal = document.getElementById('goal').value;
    const dailyNote = document.getElementById('dailyNote').value;
    
    if (goal && dailyNote) {
        const planResults = document.getElementById('planResults');
        planResults.innerHTML = `<h3>您的戒菸計畫已儲存：</h3><p><strong>目標：</strong>${goal}</p><p><strong>每日記錄：</strong>${dailyNote}</p>`;
    } else {
        alert('請填寫完整的計畫。');
    }
});

// 社群發帖功能
document.getElementById('forumForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const postMessage = document.getElementById('postMessage').value;
    
    if (username && postMessage) {
        const forumPosts = document.getElementById('forumPosts');
        const newPost = document.createElement('div');
        newPost.innerHTML = `<strong>${username}</strong><p>${postMessage}</p>`;
        forumPosts.appendChild(newPost);
        document.getElementById('username').value = '';
        document.getElementById('postMessage').value = '';
    } else {
        alert('請填寫完整的發帖內容。');
    }
});

// 模擬訪問者統計
let visitorCount = 1234; // 假設訪問者數量
function updateVisitorCount() {
    document.getElementById('visitorCount').textContent = visitorCount;
}

// 初始化訪問者統計
updateVisitorCount();