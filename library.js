const checkPresence=function(array){
  return function(element){
    let newArray = [];
    if(array.includes(element)){
      newArray.push(element);
    }
    return newArray;
  }
}

const intersectSets=function(array1,array2){
  let checkIntersection = checkPresence(array1);
  return array2.filter(checkIntersection);
}
exports.intersectSets=intersectSets;

const aboveThresh = function(limit){
  return function(element){
    return element>limit;
  }
}

const belowThresh = function(limit){
  return function(element){
    return element<limit;
  }
}

const doPartition=function(array,limit){
  let outputArray=[];
  let array1=[];
  let array2=[];
  let abovelimit=aboveThresh(limit);
  let belowlimit=belowThresh(limit);
  array2.push(array.filter(belowlimit));
  array1.push(array.filter(abovelimit));
  return outputArray=array2.concat(array1);
}
exports.doPartition=doPartition;

const rotateArray=function(array,number){
  return rotatedArray =array.slice(number,array.length).concat(array.slice(0,number));
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

const checkDifference=function(firstArray){
  return function(element){
    return !firstArray.includes(element);
  }
}

const differentiateArrays = function(array1,array2){
  let checkDiff=checkDifference(array1);
  let differenceArray=array2.filter(checkDiff);
  return filterUniqueElements(differenceArray);
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

const checkOccurence=function(object,element){
  let {index,number,occurence}=object;
  if (element === number){
    object.occurence.push(object.index+1);
  }
  return  {index:index+1,number:number,occurence:occurence}
} 
const findFirstOccurence=function(array,number){
  firstOccurence = array.reduce(checkOccurence,{index:0,number:number,occurence:[]}).occurence[0];
  return firstOccurence;
}
exports.findFirstOccurence=findFirstOccurence;

const countAboveThreshHold=function(array,threshHold){
  let limit = aboveThresh(threshHold);
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
  let limit = belowThresh(threshHold);
  return array.filter(limit).length
}
exports.countBelowThreshHold=countBelowThreshHold;

const lowerThanLimit=function(a,b){return Math.min(a,b)}
const findLowestNumber=function(array){
  return array.reduce(lowerThanLimit);
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
