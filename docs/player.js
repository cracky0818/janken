function action(oppornent){
  return 0;
}

const GU = 0;
const CHOKI = 1;
const PA = 2;

let matches = 0;

// チョキ大好きマンに勝つ方法
function actionAgainstChokiDaisukiman(){
  return GU;
}

// 表か裏マンに勝つ方法
function actionAgainstOmoteUra(){
  matches = matches + 1;
  const isEven = matches % 2 == 0;
  let result = PA;
  if(isEven){
    result = GU;
  }
  return result;
}

// 帰ってきた表か裏マンに勝つ方法
function actionAgainstOmoteUra2(){
  matches = matches + 1;
  const isEven = matches % 3 == 0;
  let result = GU;
  if(isEven){
    result = CHOKI;
  }
  return result;
}

function action(oppornent){
console.log(oppornent);
let result = GU;
if(oppornent == "fighter::choki-lover"){
  result = actionAgainstChokiDaisukiman();
} else if(oppornent == "fighter::odd-even")  {
  result = actionAgainstOmoteUra();
} else {
  result = actionAgainstOmoteUra2();
}
return result;
}
