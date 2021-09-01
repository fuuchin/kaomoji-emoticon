// 登録ボタン
registerBtn.onmousedown = () => {
  registerBtn.style.boxShadow = 'none'; //マウスを下げると 影が消える
  registerBtn.style.transform = 'translate(1px, 2px)'; //ボタンが動く
}

registerBtn.onmouseup = () => {
  //マウスがホバーした状態に戻ると cssで書いた通りに元に戻る
  registerBtn.style.boxShadow = '5px 5px 2px #000';
  registerBtn.style.transform = 'translate(0, 0)';
}


// リセットボタン
const resetBtn = id('reset');

resetBtn.onmousedown = () => {
  resetBtn.style.boxShadow = 'none'; //マウスを下げると 影が消える
  resetBtn.style.transform = 'translate(1px, 2px)'; //ボタンが動く
}

resetBtn.onmouseup = () => {
  //マウスがホバーした状態に戻ると cssで書いた通りに元に戻る
  resetBtn.style.boxShadow = '5px 5px 2px #000';
  resetBtn.style.transform = 'translate(0, 0)';
}

resetBtn.onclick = () => {
  window.location.reload();
}
/**
 * 登録する顔文字入力欄を編集すると、作成ボタンが消えるのだが、
 * リセットボタンをクリックすると、リロードされ、
 * 入力欄もリセットされて 作成ボタンも最初のように現れる。
 */


// 未実装
copyBtn.onmousedown = () => {
  copyBtn.style.boxShadow = 'none'; //マウスを下げると 影が消える
  copyBtn.style.transform = 'translate(1px, 2px)'; //ボタンが動く
}

copyBtn.onmouseup = () => {
  //マウスがホバーした状態に戻ると cssで書いた通りに元に戻る
  copyBtn.style.boxShadow = '5px 5px 2px #000';
  copyBtn.style.transform = 'translate(0, 0)';
}
