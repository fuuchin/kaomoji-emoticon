const DaysKamoji = [
  { kaomoji: '(__)...。oo○゜', title: '爆睡'},
  { kaomoji: 'ー(^^)＝(^^)＝(^^)ー', title: '肩を組む'},
  { kaomoji: '(^^)- - - - - -(^^)', title: 'テレパシー'},
  { kaomoji: '(^^)￣_|--------------------匚(^^)', title: '糸電話'},
  { kaomoji: '(￣^￣゜)   ///   (｀へ´)', title: '縁を切る'},
  { kaomoji: '(^^)ーU*Uー(^^)', title: 'カンパーイ'},
  { kaomoji: '(^)o  _|_  o(^)', title: 'パーティション会食'},
  { kaomoji: 'ー(^^)ー  ー(^^)ー  ー(^^)ー', title: 'ソーシャルディスタンスを取りましょう'},
  { kaomoji: '(^^)(^^)(^^)(^^)(^^)(^^)(^^)', title: '密です'},
  { kaomoji: '((((((((((^^ マテエ   ((((((((((^^ ニゲロ', title: '鬼ごっこ'},
  { kaomoji: 'TV 囗  (^) オッ ジュウドウ スゲエ', title: 'オリンピックを見る'}
];

todayKamoji = () => {
  const dayNum = new Date().getDate();
  const index = dayNum % DaysKamoji.length;
  const result = DaysKamoji[index];
  return result;
}

const kaomojiTitle = id('kaomoji-title');
const kaomojiResult = id('today-kaomoji');

kaomojiTitle.innerHTML = todayKamoji().title;
kaomojiResult.innerHTML = todayKamoji().kaomoji;
