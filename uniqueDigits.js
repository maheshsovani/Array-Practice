const filterUniqueElements=function(array){
  let uniqueArray=[];
  for (element of array){
    if(!uniqueArray.includes(element)){
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}
const main=function(){
  array=[1,2,3,4,5,6,4,3,5,2];
  console.log(filterUniqueElements(array))
}
//main();
exports.filterUniqueElements=filterUniqueElements;
