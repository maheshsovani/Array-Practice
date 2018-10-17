const extractDigits=function(number){
  let numberString=''+number;
  let index=0;
  array=numberString.split("");
  while(index<array.length){
  for (number of array){
    array[index]=parseInt(number);
    index++;
  }
}
    return array;
}
const main=function(){
  number=process.argv[2];
  console.log(extractDigits(number));
}
//main();
exports.extractDigits=extractDigits;
