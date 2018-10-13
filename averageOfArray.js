const averageOfNumbers=function(sum,numbersCount){
  average=Math.floor(sum/numbersCount);
  return average;
}

const sumOfArrayNumbers = function(array){
  let sum=0;
  for (let index=0;index<array.length;index++){
    sum+=array[index];
  }
  return sum;
}

const averageOfNumber = function(array){
  let numbersCount=array.length;
  sum = sumOfArrayNumbers(array);
  answer=averageOfNumbers(sum,numbersCount);
  return answer;
}

const main=function(){
  let array=[1,2,3,4,5,6,7,8,9,10];
}
main();
exports.averageOfNumber=averageOfNumber;
