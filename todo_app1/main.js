// タスクのデータを保持する配列
let tasks = [];

// タスク一覧を表示
function renderTasks() {
    const taskList = document.getElementById('task-list'); // タスクリストの表示部分を取得
    taskList.innerHTML = ''; // 一旦、リストを空にする

    tasks.forEach((task, index) => {
        const li = document.createElement('li'); // 新しいリスト項目を作る
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})">削除</button>
        `;
        taskList.appendChild(li); // 作ったリスト項目を表示部分に追加
    });
}

// 新しいタスクを追加
document.getElementById('add-task').addEventListener('click', () => {
    const title = document.getElementById('new-task').value.trim(); // 入力されたタスクを取得
    if (!title) return; // タスクが空白なら何もしない
    tasks.push(title); // タスクを配列に追加
    document.getElementById('new-task').value = ''; // 入力欄をクリア
    renderTasks(); // リストを再描画
});

// タスクを削除
function deleteTask(index) {
    tasks.splice(index, 1); // 指定されたインデックスのタスクを削除
    renderTasks(); // リストを再描画
}

// 初期化
renderTasks();