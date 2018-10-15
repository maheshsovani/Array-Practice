const createIntersectedArray=function(array1,array2){
  let intersectedArray=[];
  for (element1 of array1)
    for (element2 of array2)
      if(element1==element2 && !intersectedArray.includes(element1)){
        intersectedArray.push(element1)
      }
  return intersectedArray;
}
const main=function(){
  array1=[1,2,3,4,5,6,7]
  array2=[3,1,2,1,97,3]
  console.log(createIntersectedArray(array1,array2))
}
main();
