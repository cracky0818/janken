function action(oppornent){
  return 0;
}

const GU = 0;
const CHOKI = 1;
const PA = 2;

function action(){
  return GU;
}

let counter = 0;
function action(oppornent){
  counter = counter + 1;
  const isEven = counter % 3 == 0;
  let myAction = GU;
  if(isEven){
    myAction = CHOKI;
  }
  return myAction;
}