registerBtn.onmousedown = () => {
  registerBtn.style.boxShadow = 'none'; //マウスを下げると 影が消える
  registerBtn.style.transform = 'translate(1px, 2px)'; //ボタンが動く
}

registerBtn.onmouseup = () => {
  //マウスがホバーした状態に戻ると cssで書いた通りに元に戻る
  registerBtn.style.boxShadow = '5px 5px 2px #000';
  registerBtn.style.transform = 'translate(0, 0)';
}
