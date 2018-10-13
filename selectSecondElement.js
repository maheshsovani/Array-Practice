const alternateElement=function(array){
  let alternateElementArray = [];
  let number = 0;
  for (let index=0 ; index<array.length ; index+=2 ){
    alternateElementArray[number] = array[index];
    number++;
  }
  return alternateElementArray;
}

const main=function(){
  let array=[1,2,3,4,5,6,7,8,9,10];
  console.log(alternateElement(array));
}
main();
exports.alternateElement=alternateElement;
