const reverseArray = function(array){
  let reversedArray = [];
  let number = 0;
  for (let index=array.length-1 ; index>=0 ; index--){
    reversedArray[number] = array[index];
    number++;
  }
  return reversedArray;
}
const main=function(){
  let array=["mahesh","aaa",3,4,5,"ttt",7,8,"yyy","zzz"];
  console.log(reverseArray(array));
}
main();
exports.reverseArray=reverseArray;
