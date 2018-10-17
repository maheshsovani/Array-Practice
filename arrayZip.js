const arrayZip=function(array1,array2){
  let shortLength=Math.min(array1.length,array2.length)
  let zippedArray=[];
  for (let index=0;index<shortLength;index++){
      zippedArray[index]=[array1[index],array2[index]]
  }
  return zippedArray;
}

const main=function(){
  array1=[2,1]
  array2=[3]
  console.log(arrayZip(array1,array2))
}
//main();
exports.arrayZip=arrayZip;
