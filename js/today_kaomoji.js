const DaysKamoji = [ // 今日の顔文字の結果一覧の配列
  { kaomoji: '(__)...。oo○゜', title: '爆睡'},
  { kaomoji: 'ー(^^)＝(^^)＝(^^)ー', title: '肩を組む'},
  { kaomoji: '(^^)- - - - - -(^^)', title: 'テレパシー'},
  { kaomoji: '(^^)o￣_|--------------------匚o(^^)', title: '糸電話'},
  { kaomoji: '(￣^￣゜)   |||   (｀へ´)', title: '縁を切る'},
  { kaomoji: '(^^)ーU*Uー(^^)', title: 'カンパーイ'},
  { kaomoji: '(^)o  _|_  o(^)', title: 'パーティション会食'},
  { kaomoji: 'ー(^^)ー  ー(^^)ー  ー(^^)ー', title: 'ソーシャルディスタンスを取りましょう'},
  { kaomoji: '(^^)(^^)(^^)(^^)(^^)(^^)(^^)', title: '密です'},
  { kaomoji: '((((((((((^^ マテエ   ((((((((((^^ ニゲロ', title: '鬼ごっこ'},
  { kaomoji: 'TV 囗  (^) オッ ジュウドウ スゲエ', title: 'オリンピックを見る'},
  { kaomoji: '耳(^^)o | (^^)コソコソ(^^) 囗(^^)目', title: '壁に耳あり障子に目あり'}
];

todayKamoji = () => {
  const dayNum = new Date().getDate(); // 日付を取得
  const index = dayNum % DaysKamoji.length; // 日付の値を配列の長さで割る
  const result = DaysKamoji[index]; // index番目の顔文字にすることでその日の今日の顔文字はずっと決まった顔文字になる
  return result;
}

const kaomojiTitle = id('kaomoji-title');
const kaomojiResult = id('today-kaomoji');

const today = new Date();
const year = today.getFullYear(); // 年を取得(2021年)
const month = today.getMonth() + 1; // 月は0から数えてしまうので1を足す
const day = today.getDate(); // 日にちを取得
const dayofweek = today.getDay(); // 曜日を取得(0~6で 0は日曜日、6は土曜日)

dateExpression = () => {
  const dayname = ['日', '月', '火', '水', '木', '金', '土']; // 曜日は番号で取得するので配列が必要
  const result = (`${year}年${month}月${day}日(${dayname[dayofweek]})`);
  return result;
}

const todayArea = id('today');
todayArea.innerHTML = dateExpression(); // 今日の日付

let titleKaomoji = todayKamoji().title
let resultKaomoji = todayKamoji().kaomoji;


// 特定の日だけに特定の顔文字
// その日にしか見れない貴重な顔文字
if (month === 1 && day === 1) { // 1月1日には元旦の顔文字
  titleKaomoji = '元日';
  resultKaomoji = '__○__  |(^^)| Happy new year!!';
}

if ((month === 2 && day === 2) || (month === 2 && day === 3) || (month === 2 && day === 4)) {
  titleKaomoji = '鬼は外、福は内。節分';
  resultKaomoji = '(^^)／゜:::.. (鬼)';
}

if (month === 3 && day === 14) {
  titleKaomoji = 'ホワイトデーではなく円周率の日 円周率を100桁暗記';
  resultKaomoji = 'φ(..) 3.141592653589793238462643383279502884197169399375105820974944592307816406・・・';
}

if (month === 4 && day === 1) {
  titleKaomoji = 'エイプリルフール';
  resultKaomoji = '実は君のこと嫌い(^^) (^^)噓はばれとるぞ 今日はエイプリルフールじゃ';
}

if (month === 8 && day === 31) {
  titleKaomoji = '宿題の山';
  resultKaomoji = '三三三  φ(TT;)';
}

if (month === 12 && (day === 24 || day == 25)) {
  titleKaomoji = 'クリスマス';
  resultKaomoji = '☆<br>／＼<br>／||＼<br>／_||_＼<br>__||__<br>(^^) |　||　| (^^)'; // ツリー
}

// 表示
kaomojiTitle.innerHTML = titleKaomoji;
kaomojiResult.innerHTML = resultKaomoji;
