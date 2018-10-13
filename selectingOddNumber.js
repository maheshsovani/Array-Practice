const oddNumbersInArray=function(array){
  let oddNumbers=[];
  let answer=0;
  let number=0;
  for (let index=0;index<array.length;index++){
    if ((array[index])% 2 != 0){
      answer = array[index];
      oddNumbers[number] = answer;
      number++;
    }
  }
  return oddNumbers;
}
const main=function(){
  let array=[1,2,3,4,5,6,7,8,9,10];
  console.log(oddNumbersInArray(array));
}
main();
exports.oddNumbersInArray=oddNumbersInArray
