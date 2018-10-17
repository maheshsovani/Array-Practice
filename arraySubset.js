const isSubset = function(array,isSubsetArray){
  let count=0;
  for(element of isSubsetArray){
    if(array.includes(element)){
      count++;
    }
      if(count==isSubsetArray.length){
        return true;
    }
  }
  return false;
}

const main=function(){
  array=[1,2,3,4,5,6];
  isSubsetArray=[2,4,6];
  console.log(isSubset(array,isSubsetArray));
}
main();
exports.isSubsetArray=isSubset;
