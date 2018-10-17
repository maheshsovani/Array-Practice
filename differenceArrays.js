const differenceBetweenArrays=function(array1,array2){
  differeneceArray=[];
  for (let index=0;index<array2.length;index++){
    for (let index2=0;index2<array1.length;index2++){
    if(array2[index]==array1[index2]){
      differenceArray.push(array2[index]);
    }
  }
  return differenceArray;
}
}
const main=function(){
  array1=[1,2,2,1,4,2,2,3];
  array2=[1,2,3,4,5]
  console.log(differenceBetweenArrays(array1,array2))
}
main();
//exports.filterUniqueElements=filterUniqueElements;
