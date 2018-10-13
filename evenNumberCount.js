const evenNumbersCount=function(array){
  let number=0;
  for (let index=0;index<array.length;index++){
    if ((array[index])% 2 == 0){
      number++;
    }
  }
  return number;
}
const main=function(){
  let array=[1,2,3,4,5,6,7,9,10];
  console.log(evenNumbersCount(array));
}
main()
exports.evenNumbersCounter=evenNumbersCount;
