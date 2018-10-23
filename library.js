const checkPresence = function(dataSet){
  const isExist = function(element){
    let outputList  =  [];
    if(dataSet.includes(element)){
      outputList.push(element);
    }
    return outputList;
  }
  return isExist;
}

const intersectSets = function(set1,set2){
  let checkIntersection  =  checkPresence(set1);
  return set2.filter(checkIntersection);
}

const aboveThreshold  =  function(threshold){
  const checkAbove = function(element){
    return element>threshold;
  }
  return checkAbove;
}

const belowThreshold  =  function(threshold){
  const checkBelow = function(element){
    return element < threshold;
  }
  return checkBelow;
}

const classifyList =  function(threshold){
  const seperateList = function(list,element){
    if(element < threshold){
      list[0].push(element);
      return list;
    }
    list[1].push(element);
    return list;
  }
  return seperateList;
}

const doPartition = function(list,limit){
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

const isSubsetOf=function(set1,set2){
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

const extractDigits = function(number){
  let digits  =  number.toString().split("");
  return digits.map(x => +x);
}

const checkEven = function(list){return list.filter(num =>num%2 == 0)}

const countEvenNumbers = function(list){
  return checkEven(list).length;
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

const mapLengthOfElements  =  function(list){
  return list.map(element => element.length);
}

const countBelowThreshHold = function(list,threshHold){
  let limit  =  belowThreshold(threshHold);
  return list.filter(limit).length;
}

const lowerThanLimit = function(a,b){return Math.min(a,b)}
const findLowestNumber = function(list){
  return list.reduce(lowerThanLimit);
}

const isOdd = function(list){
  return list.filter(number => number%2 != 0 )}

const countOddNumbers = function(list){
  return isOdd(list).length;
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
  return checkEven(numbers);
}

const extractOddNumbers = function(list){
  return isOdd(list);
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


exports.intersectSets = intersectSets;
exports.doPartition = doPartition;
exports.rotateList = rotateElements;
exports.isSubsetOf = isSubsetOf;
exports.zippedList = zip;
exports.calculateAverage = calculateAverage;
exports.differentiateLists  =  differentiateLists;
exports.extractDigits = extractDigits;
exports.countEvenNumbers = countEvenNumbers;
exports.findFirstOccurence = findFirstOccurence;
exports.countAboveThreshHold = countAboveThreshHold;
exports.findGreatestNumber = findGreatestNumber;
exports.checkAscending = checkAscending;
exports.checkDecending = checkDecending;
exports.mapLengthOfElements = mapLengthOfElements;
exports.countBelowThreshHold = countBelowThreshHold;
exports.findLowestNumber = findLowestNumber;
exports.countOddNumbers = countOddNumbers;
exports.reverseList = reverseList;
exports.generateReverseFibonacciSeries = generateReverseFibonacciSeries;
exports.reverseSeries = reverseSeries;
exports.alternateElement = selectEverySecondNumber;
exports.extractEvenNumbers = extractEvenNumbers;
exports.extractOddNumbers = extractOddNumbers;
exports.sumOfListElements = sumOfListElements;
exports.unionOfList = unionOfList;
exports.filterUniqueElements = filterUniqueElements;
