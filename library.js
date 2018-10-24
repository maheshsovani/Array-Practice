const checkPresence = function(dataSet){
  const isPresent = function(element){
    let outputList  =  [];
    if(dataSet.includes(element)){
      outputList.push(element);
    }
    return outputList;
  }
  return isPresent;
}

const intersectSets = function(set1,set2){
  let checkIntersection  =  checkPresence(set1);
  return set2.filter(checkIntersection);
}

const aboveThreshold  =  function(threshold){
  const checkAbove = function(number){
    return number > threshold;
  }
  return checkAbove;
}

const belowThreshold  =  function(threshold){
  const checkBelow = function(number){
    return number < threshold;
  }
  return checkBelow;
}

const classifyList =  function(threshold){
  const seperateList = function(list,number){
    if(number < threshold){
      list[0].push(number);
      return list;
    }
    list[1].push(number);
    return list;
  }
  return seperateList;
}

const createPartition = function(list,limit){
  let setThreshold  =  classifyList(limit);
  let partition = list.reduce(setThreshold,[[],[]]);
  return partition;
}

const rotateElements = function(list,number){
  let  rotatedList = list.slice(number,list.length).concat(list.slice(0,number));
  return rotatedList;
}

const checkSubset=function(list){
  const hasElement = function(element){
    if(list.includes(element)){
      return true;
    }
  }
  return hasElement;
}

const isSubset=function(set1,set2){
  let callSub = checkSubset(set1);
  if(set2.length == set2.filter(callSub).length){
    return true;
  }
  return false;
}

const zip = function(dataSet1,dataSet2){
  let shortLength = Math.min(dataSet1.length,dataSet2.length)
  let zippedList = [];
  for (let index = 0;index<shortLength;index++){
    zippedList[index] = [dataSet1[index],dataSet2[index]];
  }
  return zippedList;
}

const add = function(a,b){return +a+b};

const calculateAverage = function(numbers){
  let summation  =  numbers.reduce(add);
  let answer  =  summation/numbers.length;
  return answer;
}

const checkDifference = function(set){
  const isContain = function(element){
    return !set.includes(element);
  }
  return isContain
}

const differentiateLists  =  function(list1,list2){
  let checkDiff = checkDifference(list1);
  let differenceList = list2.filter(checkDiff);
  return filterUniqueElements(differenceList);
}

const convertToNumber=function(string){return +string;};

const extractDigits = function(number){
  let digits  =  number.toString().split("");
  return digits.map(convertToNumber);
}

const isEven = function (number){return number%2 == 0};

const extractEven = function(list){return list.filter(isEven)}

const countEvenNumbers = function(list){
  return extractEven(list).length;
}

const checkOccurence = function(status,element){
  let {index,number,occurence} = status;
  if (element  ===  number){
    status.occurence.push(status.index+1);
  }
  return {index:index+1,number:number,occurence:occurence};
} 

const findFirstOccurence = function(list,number){
  let status = {index:0,number:number,occurence:[]};
  firstOccurence  =  list.reduce(checkOccurence,status).occurence[0];
  return firstOccurence;
}

const countAboveThreshHold = function(list,threshold){
  let limit  =  aboveThreshold(threshold);
  return list.filter(limit).length;
}

const findGreater = function(number1,number2){return Math.max(number1,number2)}
const findGreatestNumber = function(list){
  greatestNumber = list.reduce(findGreater);
  return greatestNumber;
}

const checkAscending = function(list){
  let isAscending = true;
  for (let index = 0;index<list.length;index++){
    if(list[index]>list[index+1]){
      isAscending = false;
    }
  }
  return isAscending;
}

const checkDecending = function(list){
  let isDecending = true;
  for (let index = 0;index<list.length;index++){
    if(list[index+1]>list[index]){
      isDecending = false;
    }
  }
  return isDecending;
}

const mapLength = function(string){ return string.length };
const mapLengthOfElements  =  function(list){
  return list.map(mapLength);
}

const countBelowThreshHold = function(list,threshHold){
  let limit  =  belowThreshold(threshHold);
  return list.filter(limit).length;
}

const lowerThanLimit = function(a,b){return Math.min(a,b)}
const findLowestNumber = function(list){
  return list.reduce(lowerThanLimit);
}

const isOdd=function(number){ return number%2 !=0}
const checkOdd = function(list){
  return list.filter( isOdd )}

const countOddNumbers = function(list){
  return checkOdd(list).length;
}

const reverseList  =  function(list){
  return list.reverse();
}

const generateReverseFibonacciSeries = function(limit){
  let previousTerm = 0;
  let lastSecondTerm = 1;
  let currentTerm = 0;
  let fibonacciSeries  =  [0];
  for (let index = limit-1;index>0;index--){
    currentTerm = previousTerm+lastSecondTerm;
    lastSecondTerm = previousTerm;
    previousTerm = currentTerm;
    fibonacciSeries.unshift(currentTerm);
  }
  return(fibonacciSeries);
}

const reverseSeries  =  function(list){
  return list.reverse();
}

const chooseAlternateNumber = function(state,element){
  let {index,elements}  =  state;
  if( index%2  ==  0 ){
    elements.push(element);
  }
  return {index:index+1,elements:elements};
}

const selectEverySecondNumber = function(numbers){
  return numbers.reduce(chooseAlternateNumber,{index:0,elements:[]}).elements;
}

const extractEvenNumbers = function(numbers){
  return extractEven(numbers);
}

const extractOddNumbers = function(list){
  return checkOdd(list);
}

const sumOfListElements  =  function(list){
  return list.reduce(add,[]);
}

const unionOfList = function(list1,list2){
  let unionList = list1.concat(list2);
  return filterUniqueElements(unionList);
}

const filterUniques = function(list,element){
  if(!list.includes(element)){
    list.push(element);
  }
  return list;
}

const filterUniqueElements = function(list){
  return list.reduce(filterUniques,[]);
}

module.exports = {intersectSets,
  createPartition,
  rotateElements,
  isSubset,
  zip,
  calculateAverage,
  checkAscending,
  checkDecending,
  differentiateLists,
  countEvenNumbers,
  extractDigits,
  findGreatestNumber,
  mapLengthOfElements,
  countBelowThreshHold,
  findLowestNumber,
  countOddNumbers,
  reverseList,
  generateReverseFibonacciSeries,
  reverseSeries,
  sumOfListElements,
  unionOfList,
  filterUniqueElements,
  findFirstOccurence,
  countAboveThreshHold,
  selectEverySecondNumber,
  extractOddNumbers,
  extractEvenNumbers 
};
