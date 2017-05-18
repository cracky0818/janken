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
  const isEven = matches % 2 == 0;
  let result = PA;
  if(isEven){
    result = GU;
  }
  return result;
}

// 帰ってきた表か裏マンに勝つ方法
function actionAgainstOmoteUra2(){
  const isEven = matches % 3 == 0;
  let result = GU;
  if(isEven){
    result = CHOKI;
  }
  return result;
}

// 順番に出していくマン
function actionAgainstRotation(){
  const toReturnChoki = matches % 3 == 0;
  const toReturnPa = matches % 3 == 1;
  let result = GU;
  if(toReturnChoki){
    result = CHOKI;
  } else if(toReturnPa){
      result = PA;
  } else {
  result = GU;
  }
  return result;
  }

function action(oppornent){
console.log(oppornent);
matches = matches + 1;
let result = GU;
if(oppornent == "fighter::choki-lover"){
  result = actionAgainstChokiDaisukiman();
} else if(oppornent == "fighter::odd-even")  {
  result = actionAgainstOmoteUra();
} else if(oppornent == "fighter::rotation"){
    result = actionAgainstRotation();
} else {
  result = actionAgainstOmoteUra2();
 }
return result;
}

