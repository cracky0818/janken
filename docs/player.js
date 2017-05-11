function action(oppornent){
  return 0;
}

const GU = 0;
const CHOKI = 1;
const PA = 2;

let matches = 0;

function action(){
  return GU;
}
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
let result = actionAgainstOmoteUra2();
return result;
}
