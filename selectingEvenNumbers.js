const evenNumbersInArray=function(array){
  let evenNumbers=[];
  let answer=0;
  let number=0;
  for (let index=0;index<array.length;index++){
    if ((array[index])% 2 == 0){
      answer = array[index];
      evenNumbers[number] = answer;
      number++;
    }
  }
  return evenNumbers;
}

let main=function(){
  let array=[1,2,3,4,5,6,7,8,9,10];
  console.log(evenNumbersInArray(array));
}
exports.evenNumbersInArray=evenNumbersInArray;
