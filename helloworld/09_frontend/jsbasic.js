// 色を変更する関数を定義
function changeColor() {
    const textElement = document.getElementById('text-element');
    textElement.classList.add('color-changed');
}

// ボタンを取得
const button = document.getElementById("color-change-button");

// イベントリスナーの登録
button.addEventListener("click", changeColor);