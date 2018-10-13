const reverseSeries = function(array){
  let reversedArray = [];
  let number = 0;
  for (let index=array.length-1 ; index>=0 ; index--){
    reversedArray[number] = array[index];
    number++;
  }
  return reversedArray;
}

const main=function(){
  let array=[1,2,3,4,5,6,7,8,9,10];
  console.log(reverseSeries(array));
}
main();
exports.reverseSeries=reverseSeries;
