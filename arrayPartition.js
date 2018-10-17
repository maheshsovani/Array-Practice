const arrayPartition=function(array,number){
  let partitionedArray=[[],[]];
  for (let index=0;index<array.length;index++){
    partitionedArray[1].push(array[index])
    if(array[index]<number){
      partitionedArray[0].push(array[index]);
      partitionedArray[1].pop(array[index]);
    }
  }
  return partitionedArray;
}
const main=function(){
  array=[1,2,95,4,5,3,7,8,9]
  number=5;
  console.log(arrayPartition(array,number))
}
main();
exports.arrayPartition=arrayPartition;
