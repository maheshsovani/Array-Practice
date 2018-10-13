const lengthOfElements=function(array){
  let lengthArray=[];
  let index=0;
  while(index<array.length){
    lengthArray[index] = array[index].length;
    index++;
  }
  return lengthArray;
}

const main=function(){
  let array=["mahesh","gaurav","tushar","heera","sai","swapnil"];
  console.log(lengthOfElements(array));
}
main();
exports.lengthOfElements=lengthOfElements;
