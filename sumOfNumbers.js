const sumOfArrayElements = function(array){
  let sum = 0;
  for (let index = 0;index < array.length; index++){
    sum += array[index]
  }
  return sum;
}

const main=function(){
  let array = [1,2,3,4,5,6,7,8,9,10];
  console.log ( sumOfArrayElements(array) );
}
main();
exports.sumOfArrayElements=sumOfArrayElements;
