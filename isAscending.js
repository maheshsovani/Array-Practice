const checkAscending=function(array){
  let isAscending=true;
  for (let index=0;index<array.length;index++){
    if(array[index]>array[index+1]){
      isAscending=false;
    }
  }
  return isAscending;
}

const main=function(array){
  array=[1,2,3,4,5]
  console.log(checkAscending(array))
}
//main();
exports.checkAscending=checkAscending;
