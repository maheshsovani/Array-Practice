const lowestNumberInArray=function(array){
  let lowestNumber=array[0];
  for (let index=1;index<array.length;index++){
    if (array[index]<lowestNumber){
      lowestNumber = array[index];
    }
  }
  return lowestNumber;
}
const main=function(){
  let array=[10,389,89,41,19,09,9];
  console.log( lowestNumberInArray(array) );
}
main();
exports.lowestNumberInArray=lowestNumberInArray;
