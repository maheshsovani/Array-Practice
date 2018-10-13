const numbersBelowThreshHold=function(array,threshHold){
  let numbersBelow=0;
  for (let index=0;index<array.length;index++){
    if ((array[index])<threshHold){
      numbersBelow++;
    }
  }
  return numbersBelow;
}
const main=function(){
  let array=[1,2,3,4,5,6,7,8,9,10];
  let threshHold=+process.argv[2];
  console.log( numbersBelowThreshHold(array,threshHold) );
}
main();
exports.numbersBelowThreshHold=numbersBelowThreshHold;
