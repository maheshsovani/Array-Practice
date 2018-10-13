const greatestNumberInArray=function(array){
  let  greatestNumber=array[0];
  for (let index=1;index<array.length;index++){
    if ((array[index])>+greatestNumber){
      greatestNumber=array[index];
    }
  }
  return greatestNumber;
}
const main = function(){
  let array=[1,2,3,4,5,6,7,8,9,10];
  console.log( greatestNumberInArray(array) );
}
main();
exports.greatestNumber=greatestNumberInArray;

