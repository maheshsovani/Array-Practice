const filterUniqueElements=require("./uniqueDigits.js").filterUniqueElements
const unionOfArray=function(array1,array2){
  let unionArray=[];
  unionArray=array1.concat(array2);
  return filterUniqueElements(unionArray);
}

const main=function(){
  array1=[2,12,3,2,12,3];
  array2=[1,2,3,4,2,2,3,1];
  unionOfArray(array1,array2);
}
//main();
exports.unionOfArray=unionOfArray;
