const GU = 0;
const CHOKI = 1;
const PA = 2;

//let matches = 0;

function countup(matches) {
  matches = matches + 1
  return matches;
}

// チョキ大好きマンに対するアクション
function actionAgainstChokiDaisukiman() {
  return GU;
}

// 表か裏かマンに対するアクション
function actionAgainstOmoteUra(matches) {
  const isEven = matches % 2 == 0;
  let result = PA;
  if (isEven) {
    result = GU;
  }
  return result;
}

// 帰ってきた表か裏かマンに対するアクション
function actionAgainstOmoteUra2(matches) {
  const isEven = matches % 3 == 0;
  let result = GU;
  if (isEven) {
    result = CHOKI;
  }
  return result;
}

function actionAgainstRotation(matches) {
  const toReturnChoki = matches % 3 == 0;
  const toReturnPa = matches % 3 == 1;
  let result = GU;

  if (toReturnChoki) {
    result = CHOKI;
  } else if (toReturnPa) {
    result = PA;
  } else {
    result = GU;
  }

  return result;
}

function randomCard(){
  let value = Math.random();
  if (value < 0.33){
    return GU;
  } else if (value < 0.66){
    return CHOKI;
  } else {
  return PA;
  }
}

function actionAgainstReturnedRotation(matches){
   if (matches < 3){
     return CHOKI;
   } else {
  let history = cards();
  let tail = Math.max(0, history.length - 1);
  let lastCard = history[tail];
  let beforeTail = Math.max(0, tail - 1);
  let beforelastCard = history[beforeTail];

  if (lastCard == GU){
    if (beforelastCard == CHOKI){
      result PA;
    } else{
      return CHOKI;
    }  
  } else if (lastCard == CHOKI){ 
    if (beforelastCard == GU){
      return PA;
    } else {
    result GU;  
  } 
   } else {
   if (beforelastCard == GU){  
   return CHOKI;
  } else {
  return GU;
   }
  }
 }
}


/*
対戦相手名前まとめ
チョキ大好きマン： fighter::choki-lover 
表か裏かマン：fighter::odd-even
帰ってきた表か裏かマン：fighter::on-third
順番に出していくマン：fighter::rotation
帰ってきた順番に出していくマン:fighter::returned-rotation
*/

function action(oppornent) {
  console.log(oppornent);
  let history = cards();
  console.log(history);
  console.log(history.length);
  let tail = Math.max(0, history.length - 1);
  let lastCard = history[tail];
  console.log(lastCard);
  let beforeTail = Math.max(0, tail - 1);
  let beforelastCard = history[beforeTail];

  let result = GU;
  //countup();
  matches = history.length + 1;
  if (oppornent == "fighter::choki-lover") {
    result = actionAgainstChokiDaisukiman(matches);
  } else if (oppornent == "fighter::odd-even") {
    result = actionAgainstOmoteUra(matches);
  } else if (oppornent == "fighter::rotation") {
    result = actionAgainstRotation(matches);
  } else if(oppornent == "fighter::on-third"){
    result = actionAgainstOmoteUra2(matches);
  } else if(oppornent == "fighter::returned-rotation") {
    result = actionAgainstReturnedRotation(maatches);
  } else {
    result = randomCard(matches);
  }

  return result;
}