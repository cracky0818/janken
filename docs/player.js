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
  let result = GU;
  return result;
}

function action(oppornent){
let result = actionAgainstOmoteUra2();
return result;
}
