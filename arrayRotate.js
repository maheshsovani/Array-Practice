const rotateArray=function(array,number){
  let rotatedArray=[];
  for (let index=number;index<array.length;index++){
    rotatedArray.push(array[index])
  }
  for (let index1=0;index1<number;index1++){
    rotatedArray.push(array[index1])
  }
  return rotatedArray;
}

const  main = function(){
  array=[1,2,3,4,5,6,7]
  number=3
  console.log(rotateArray(array,number));
}
//main();
exports.rotateArray=rotateArray;
