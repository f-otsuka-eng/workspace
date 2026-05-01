// 通信先のURL（あなたのAWSサーバーの住所）
const API_URL = 'http://54.250.24.75:8080/tasks';

// タスク一覧をサーバーから取得して表示
async function renderTasks() {
    try {
        const res = await fetch(API_URL);
        const tasks = await res.json();
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        tasks.forEach(task => {
            const li = document.createElement('li');
            // task.title や task.id は Java側の変数名に合わせています
            li.innerHTML = `
                <span>${task.title}</span>
                <button onclick="deleteTask(${task.id})">削除</button>
            `;
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error("データ取得エラー:", error);
    }
}

// 新しいタスクをサーバーに追加
document.getElementById('add-task').addEventListener('click', async () => {
    const titleInput = document.getElementById('new-task');
    const title = titleInput.value.trim();
    if (!title) return;

    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title }), // Java側に送るデータ
        });
        titleInput.value = '';
        renderTasks(); // 保存後に再表示
    } catch (error) {
        console.error("追加エラー:", error);
    }
});

// サーバーからタスクを削除
async function deleteTask(id) {
    try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        renderTasks();
    } catch (error) {
        console.error("削除エラー:", error);
    }
}

// 最初に画面を開いた時にデータを読み込む
renderTasks();
