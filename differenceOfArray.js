const differenceOfArrays = function(array1,array2){
  let differenceArray=[];
  for (let index=0;index<array1.length;index++){
      if(!array2.includes(array1[index])){
        differenceArray.push(array1[index]);
      }
  }
   return differenceArray;
}
const main = function(){
  array1=[1,2,4,4,6,3,3,6,8]
  array2=[2,4,6,3,2,4]
  console.log(differenceOfArrays(array1,array2));
}
//main();
exports.differenceOfArrays = differenceOfArrays;
