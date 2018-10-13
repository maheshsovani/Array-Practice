const numbersAboveThreshHold=function(array,threshHold){
  let numbersAbove=0;
  for (let index=0;index<array.length;index++){
    if (array[index]>threshHold){
      numbersAbove++;
    }
  }
  return numbersAbove;
}
const main=function(){
  let array=[1,2,3,4,5,6,7,8,9,10];
  let threshHold=+process.argv[2];
  console.log( numbersAboveThreshHold(array,threshHold) );
}
main();
exports.numbersAboveThreshHold=numbersAboveThreshHold;
