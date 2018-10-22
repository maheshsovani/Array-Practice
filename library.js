const intersectSets=function(array1,array2){
  let intersectedArray=[];
  for (element1 of array1)
    for (element2 of array2)
      if(element1==element2 && !intersectedArray.includes(element1)){
        intersectedArray.push(element1);
      }
  return intersectedArray;
}
exports.intersectSets=intersectSets;

const above=function(limit){return function(element){return element>limit}}
const below=function(limit){return function(element){return element<limit}}

const doPartition=function(array,limit){
  let outputArray=[];
  let array1=[];
  let array2=[];
  let abovelimit=above(limit);
  let belowlimit=below(limit);
  array2.push(array.filter(belowlimit));
  array1.push(array.filter(abovelimit));
  return outputArray=array2.concat(array1);
}
exports.doPartition=doPartition;

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
exports.rotateArray=rotateArray;

const isSubsetOf = function(array,isSubsetArray){
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
exports.isSubsetOf=isSubsetOf;

const zippedArray=function(array1,array2){
  let shortLength=Math.min(array1.length,array2.length)
  let zippedArray=[];
  for (let index=0;index<shortLength;index++){
    zippedArray[index]=[array1[index],array2[index]];
  }
  return zippedArray;
}
exports.zippedArray=zippedArray;

const add=function(a,b){return +a+b};

const averageOfArrayElements = function(array){
  let summation = array.reduce(add);
  let answer = summation/array.length;
  return answer;
}
exports.averageOfArrayElements=averageOfArrayElements;

const differentiateArrays = function(array1,array2){
  let differenceArray=[];
  for (element1 of array1){
    if(!array2.includes(element1)){
      differenceArray.push(element1);
    }
  }
  return differenceArray;
}
exports.differentiateArrays = differentiateArrays;

const extractDigits=function(number){
  let outputArray = number.toString().split("");
  return outputArray.map(x=>+x);
}
exports.extractDigits=extractDigits;

const checkEven=function(array){return array.filter(num=>num%2==0)}

const countEvenNumbers=function(array){
  return checkEven(array).length;
}
exports.countEvenNumbers=countEvenNumbers;

const findFirstOccurence=function(array,givenNumber){
  let firstOccurence;
  let number=0;
  let index=0;
  do{ number=array[index]
    firstOccurence=index+1;
    index++;
  }while(number!=givenNumber)
  return firstOccurence;
}
exports.findFirstOccurence=findFirstOccurence;

const countAboveThreshHold=function(array,threshHold){
  let limit = above(threshHold);
  return array.filter(limit).length;
}
exports.countAboveThreshHold=countAboveThreshHold;

const greater=function(number1,number2){return (Math.max(number1,number2))}
const findGreatestNumber=function(array){
  greatestNumber=array.reduce(greater)
  return greatestNumber;
}
exports.findGreatestNumber=findGreatestNumber;

const checkAscending=function(array){
  let isAscending=true;
  for (let index=0;index<array.length;index++){
    if(array[index]>array[index+1]){
      isAscending=false;
    }
  }
  return isAscending;
}
exports.checkAscending=checkAscending;

const checkDecending=function(array){
  let isDecending=true;
  for (let index=0;index<array.length;index++){
    if(array[index+1]>array[index]){
      isDecending=false;
    }
  }
  return isDecending;
}
exports.checkDecending=checkDecending;

const countElementLength=function(array){
  return array.map(element=>element.length);
}
exports.countElementLength=countElementLength;

const countBelowThreshHold=function(array,threshHold){
  let limit = below(threshHold);
  return array.filter(limit).length
}
exports.countBelowThreshHold=countBelowThreshHold;

const lower=function(a,b){return Math.min(a,b)}
const findLowestNumber=function(array){
  return array.reduce(lower);
}
exports.findLowestNumber=findLowestNumber;

const isOdd=function(array){
  return array.filter(number=>number%2 !=0 )}

const countOddNumbers=function(array){
  return isOdd(array).length;
}
exports.countOddNumbers=countOddNumbers;

const reverseArray = function(array){
  return array.reverse();
}
exports.reverseArray=reverseArray;

const reverseFibonacciSeries=function(limit){
  let previousTerm=0;
  let lastSecondTerm=1;
  let currentTerm=0;
  let fibonacciSeries = [0];
  for (let index=limit-1;index>0;index--){
    currentTerm=previousTerm+lastSecondTerm;
    lastSecondTerm=previousTerm;
    previousTerm=currentTerm;
    fibonacciSeries.unshift(currentTerm);
  }
  return(fibonacciSeries);
}
exports.reverseFibonacciSeries=reverseFibonacciSeries;

const reverseSeries = function(array){
  return array.reverse();
}
exports.reverseSeries=reverseSeries;
 
const chooseAlternate=function(state,element){
  let {index,elements} = state;
  if( index%2 == 0 ){
    elements.push(element)
  }
  return {index:index+1,elements:elements}
}
const alternateElement=function(array){
  return array.reduce(chooseAlternate,{index:0,elements:[]}).elements;
}
exports.alternateElement=alternateElement;

const extractEvenNumbers=function(array){
  return checkEven(array);
}
exports.extractEvenNumbers=extractEvenNumbers;

const extractOddNumbers=function(array){
  return isOdd(array);
}
exports.extractOddNumbers=extractOddNumbers;

const sumOfArrayElements = function(array){
  return array.reduce(add,[])
}
exports.sumOfArrayElements=sumOfArrayElements;

const unionOfArray=function(array1,array2){
  let unionArray=[];
  unionArray=array1.concat(array2);
  return filterUniqueElements(unionArray);
}
exports.unionOfArray=unionOfArray;

const filterUniqueElements=function(array){
  let uniqueArray=[];
  for (element of array){
    if(!uniqueArray.includes(element)){
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}
exports.filterUniqueElements=filterUniqueElements;
