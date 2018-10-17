const checkDecending=function(array){
  let isDecending=true;
  for (let index=0;index<array.length;index++){
    if(array[index+1]>array[index]){
      isDecending=false;
    }
  }
  return isDecending;
}

const main=function(array){
  array=[1,2,3,5]
  console.log(checkDecending(array))
}
//main();
exports.checkDecending=checkDecending;
