
'use strict';
const id = id => document.getElementById(id); //[document.getElementById]を[id]に省略

const tutorialBtn = id('face-letter-tutorial-btn'); //使い方ボタン
const closeBtn = id('close-btn'); //使い方を閉じるボタン


tutorialBtn.onclick = () => {
  const tutorialBtnClick = tutorialBtn.onclick;
  id('face-letter-tutorial').style.display = tutorialBtnClick ? "block" : "none";
  //クリックされたかどうか次第で 表示するかしないか決まる
}

closeBtn.onclick = () => {
  const closeBtnClick = closeBtn.onclick;
  id('face-letter-tutorial').style.display = closeBtnClick ? "none" : "block";
  //クリックされたかどうか次第で 表示するかしないか決まる
}



let faceLetterTxt = id('face-letter-txt'); //登録したい顔文字の入力欄

function save() {
  if (!faceLetterTxt) {
    return;
  }

  // 文字列をBlob化 (データ型の一つ)
  const blob = new Blob([faceLetterTxt.value], { type: 'text/plain' });

  
  // ダウンロード用のaタグを作る
  const a = document.createElement('a');
  a.href =  URL.createObjectURL(blob);
  const registerName = id('register-name').value;
  a.download = registerName + '.txt';
  a.click();
}

const registerBtn = id('register-btn');
registerBtn.onclick = () => {
  save(); //save関数の実行
}

let slotAnswers = {
  contour1: [ //contour  英語の「りんかく」左側
    '(', '(', '(', '(', '(('
  ],

  contour2: [ //りんかく 右側
    ')', ')', ')', ')', '))'
  ],

  eye: [ //eye 英語の「目」
    '^', '^', '^', '^', '\'', '\'', '\`', '\"', '*', '*', ';', 'O', 'T', '○', '○', '◎', '◎', '゜', '゜', '゜', '゜', 'Φ', '￣', '￥', '・', '-', '=', '@', '@', '_', '+'],

  mouth: [ //mouth 英語の「口」
     ' ', '_', '-', 'o', 'o', 'o', 'v', 'v', 'v', 'Q', 'A', '∀', '▽', 'Д', 'ω', 'з', 'ε', '∧', '人', '人', '人', 'へ'
  ],

  others: [ //右側につける何か
    '/', '/', '/', '/', '|', 'ノ゛', 'v', 'v', 'v', 'V', 'zzZZ', 'b', 'b'
  ]
};



const feel = document.getElementsByName('feel');

feel[0].onclick = () => { //ランダム
  slotAnswers = {
    contour1: [
      '(', '(', '(', '(', '(('
    ],
  
    contour2: [
      ')', ')', ')', ')', '))'
    ],
  
    eye: [
      '^', '^', '^', '^', '\'', '\'', '\`', '\"', '*', '*', ';', 'O', 'T', '○', '○', '◎', '◎', '゜', '゜', '゜', '゜', 'Φ', '￣', '￥', '・', '-', '=', '@', '@', '_', '+'],
  
    mouth: [
       ' ', '_', '-', 'o', 'o', 'o', 'v', 'v', 'v', 'Q', 'A', '∀', '▽', 'Д', 'ω', 'з', 'ε', '∧', '人', '人', '人', 'へ'
    ],
  
    others: [
      '/', '/', '/', '/', '|', 'ノ゛', 'v', 'v', 'v', 'V', 'zzZZ', 'b', 'b'
    ]
  };
}

feel[1].onclick = () => { //喜び
  slotAnswers.eye = ['^', '^', '￥'];
  slotAnswers.mouth = ['', ' ', '-', 'v', 'o', 'Q', '∀', 'Д', 'ω', '人', 'へ', '_'];
  slotAnswers.others = ['/', '|', 'ノ゛', 'v', 'V', 'b'];
}

feel[2].onclick = () => { //悲しみ
  slotAnswers.eye = ['T', 'Y', ';', '/'];
  slotAnswers.mouth = [' ', '_', '_', '_', 'Д', 'o', ];
  slotAnswers.others = ['', '', 'ノ'];
}

feel[3].onclick = () => { //怒り
  slotAnswers.contour1 = ['(', '(', '(', '((', '(#'];
  slotAnswers.contour2 = [')', ')', ')', '))', '#)', '井)'];
  slotAnswers.eye = ['￣', '｀', '｀', '｀'];
  slotAnswers.mouth = ['Д', 'へ', 'へ'];
  slotAnswers.others = ['', '', 'ノ'];
}

/**
 * TODO びっくり
 *      真顔
 *      謝り
 *      困る
 *      呆れ
 */

const slotBtn = id('face-letter-slot-btn');
let slotResult = [];

slotBtn.onclick = () => {
  //ランダムに指定したのを配列に入れる
  slotResult.push(slotAnswers.contour1[(Math.floor(Math.random() * slotAnswers.contour1.length)) % slotAnswers.contour1.length]);

  slotResult.push(slotAnswers.eye[(Math.floor(Math.random() * slotAnswers.eye.length)) % slotAnswers.eye.length]);

  slotResult.push(slotAnswers.mouth[(Math.floor(Math.random() * slotAnswers.mouth.length)) % slotAnswers.mouth.length]);

  slotResult.push(slotAnswers.eye[(Math.floor(Math.random() * slotAnswers.eye.length)) % slotAnswers.eye.length]);

  slotResult.push(slotAnswers.contour2[(Math.floor(Math.random() * slotAnswers.contour2.length)) % slotAnswers.contour2.length]);

  slotResult.push(slotAnswers.others[(Math.floor(Math.random() * slotAnswers.others.length)) % slotAnswers.others.length]);

  
  const result = slotResult.join(''); //配列に入れられた顔のパーツを足し合わせる
  id('result-area').innerHTML = result; //結果を表示
  faceLetterTxt.value = result; //登録したい顔文字入力欄に自動入力
  slotResult.length = 0; //表示した後に配列の中身をクリア
}





