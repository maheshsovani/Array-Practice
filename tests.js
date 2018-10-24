const assert=require("assert");

const library=require("./library.js");

const {intersectSets,
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
} = library;

//Tests for  create intersected list  //

assert.deepEqual(intersectSets([2],[]) ,[]);
assert.deepEqual(intersectSets([""],[""]) ,[""]);
assert.deepEqual(intersectSets([1,2,3,4],["1","2"]) ,[1,2]);
assert.deepEqual(intersectSets([2,3,4,5],[2,3,4,5]) ,[2,3,4,5]);
assert.deepEqual(intersectSets([2,5,3],[2]) ,[2]);

//Tests for list Partition//

assert.deepEqual(createPartition([],7),[[],[]]);
assert.deepEqual(createPartition([11,23,43,25,21,65],30),[[11,23,25,21],[43,65]]);
assert.deepEqual(createPartition([1,2,3,4,5],0),[[],[1,2,3,4,5]]);

//Tests for rotate list//

assert.deepEqual(rotateElements([1],1),[1]);
assert.deepEqual(rotateElements([1,2,3,4,5,6],0),[1,2,3,4,5,6]);
assert.deepEqual(rotateElements(["name","age","education","time"],2),["education","time","name","age"]);
assert.deepEqual(rotateElements([1,2,"mahesh","name"],3),["name",1,2,"mahesh"]);

//Tests for subset list identification//

assert.equal(isSubset([""],[""]),true);
assert.equal(isSubset([1,2,3,4,5,6],[1,2,3]),true);
assert.equal(isSubset([1,2,3,"mahesh","some"],[1,2,3]),true);
assert.equal(isSubset([1,2,3,4],[5,6,7]),false);

//Tests for zipped list generation //

assert.deepEqual(zip([],[]),[]);
assert.deepEqual(zip([1,2,3,4],[1,2,3,4,5]),[[1,1],[2,2],[3,3],[4,4]]);
assert.deepEqual(zip([1,2],[1,2,3,4,5]),[[1,1],[2,2]]);
assert.deepEqual(zip(["test","for","zip"],[1,2,3,4,5]),[["test",1],["for",2],["zip",3]]);

//Tests for calculateAverage of list element numbers //

assert.equal(calculateAverage([0]),0);
assert.equal(calculateAverage([2,3,4,5,6]),4);
assert.equal(calculateAverage([1,2,0]),1);

//Tests for checking ascending order of list of numbers//

assert.equal(checkAscending([1]),true);
assert.equal(checkAscending([1,2,3,4,5,6]),true);
assert.equal(checkAscending([2,4,1,42,2]),false);

//Tests for checking decending order of list of numbers //

assert.equal(checkDecending([]),true);
assert.equal(checkDecending([1]),true);
assert.equal(checkDecending([5,4,3,2,1]),true);
assert.equal(checkDecending([1,2,3,4,5]),false);

//Tests for difference of list//

assert.deepEqual(differentiateLists([],[]),[]);
assert.deepEqual(differentiateLists([2],[2]),[]);
assert.deepEqual(differentiateLists([""],[""," "]),[" "]);
assert.deepEqual(differentiateLists([1,2,3],[1,2,3,4,5,6]),[4,5,6]);

//Tests for counting number of even elements in given list //

assert.equal(countEvenNumbers([]),0);
assert.equal(countEvenNumbers([0]),1);
assert.equal(countEvenNumbers([-2,4,6,-12,1,3,5]),4);
assert.equal(countEvenNumbers([1]),0);

//Tests for extracting digits of given number into an list//

assert.deepEqual(extractDigits([0]),[0]);
assert.deepEqual(extractDigits([""]),[]);
assert.deepEqual(extractDigits(128912879),[1,2,8,9,1,2,8,7,9]);

//Tests for creating a seperate list of even numbers in an list//

assert.deepEqual(extractEvenNumbers([]),[]);
assert.deepEqual(extractEvenNumbers([1]),[]);
assert.deepEqual(extractEvenNumbers([""]),[""]);
assert.deepEqual(extractEvenNumbers([1,2,3,4,5,6,7,8,9]),[2,4,6,8]);
assert.deepEqual(extractEvenNumbers([1,3,-2,-4,3]),[-2,-4]);

//Tests for creating a seperate list of odd numbers in an list//

assert.deepEqual(extractOddNumbers([]),[]);
assert.deepEqual(extractOddNumbers([""]),[]);
assert.deepEqual(extractOddNumbers([2]),[]);
assert.deepEqual(extractOddNumbers([1,2,3,4,5]),[1,3,5]);
assert.deepEqual(extractOddNumbers([-1,-2,-3,-4,-5]),[-1,-3,-5]);

//Tests for fiding out first occurence of given number in an list//

assert.equal(findFirstOccurence([1],1),1);
assert.equal(findFirstOccurence([1,2,3,4,5],3),3);
assert.equal(findFirstOccurence([-1,-2,-3,-4,-5],-2),2);
assert.equal(findFirstOccurence(["name","is","is","name"],"name"),1);

//Tests for creating a new list of numbers above a certain limit or threshHold//

assert.equal(countAboveThreshHold([],0),0);
assert.equal(countAboveThreshHold([2],1),1);
assert.equal(countAboveThreshHold([1,3,5,6,4,4,5,7],3),6);
assert.equal(countAboveThreshHold([-1,-2,-3,-4,-5],-2),1);

//Tests for finding out greatest number in an list//

assert.equal(findGreatestNumber([2]),2);
assert.equal(findGreatestNumber([1,3,5,7,9]),9);
assert.equal(findGreatestNumber([-1,-2,-3,-4,-5]),-1);

//Tests for finding out the length of elements of list//

assert.deepEqual(mapLengthOfElements([]),[]);
assert.deepEqual(mapLengthOfElements([""]),[0]);
assert.deepEqual(mapLengthOfElements(["  "]),[2]);
assert.deepEqual(mapLengthOfElements(["mahesh","gaurav","tushar","heera"]),[ 6,6,6,5]);

//Tests for creating an arrray of numbers in given list above certain threshHold//

assert.equal(countBelowThreshHold([0],-4),0);
assert.equal(countBelowThreshHold([-1],0),1);
assert.equal(countBelowThreshHold([1,2,3,4,5,6,7],3),2);
assert.equal(countBelowThreshHold([-1,-2,-3,-4,-5],-2),3);

//Tests for finding out the lowest number in an list//

assert.equal(findLowestNumber([0]),0);
assert.equal(findLowestNumber([1,2,3,4,5]),1);
assert.equal(findLowestNumber([-1,-2,-3,-4,-5]),-5);

//Tests for finding out the number of odd elements in an list//

assert.equal(countOddNumbers([2,3,4,5,-2,-4]),2);
assert.equal(countOddNumbers([2]),0);
assert.equal(countOddNumbers([]),0);
assert.equal(countOddNumbers([3]),1);

//Tets for creating a reversed list//

assert.deepEqual(reverseList([]),[]);
assert.deepEqual(reverseList(["mahesh"]),["mahesh"]);
assert.deepEqual(reverseList([1,2,3,4,"test","is"]),["is","test",4,3,2,1]);
assert.deepEqual(reverseList(["mahesh","gaurav","tushar","heera"]),["heera","tushar","gaurav","mahesh"]);

//Tests for printing the fibonacci series in reversed order//

assert.deepEqual(generateReverseFibonacciSeries(0),[0]);
assert.deepEqual(generateReverseFibonacciSeries(),[0]);
assert.deepEqual(generateReverseFibonacciSeries(2),[1,0]);
assert.deepEqual(generateReverseFibonacciSeries(4),[2,1,1,0]);

//Tests for printing the given series of numbers in reverse order//

assert.deepEqual(reverseSeries([]),[]);
assert.deepEqual(reverseSeries([""]),[""]);
assert.deepEqual(reverseSeries([-1]),[-1]);
assert.deepEqual(reverseSeries([-1,2,3,-4]),[-4,3,2,-1]);

//Tests for creating an list of alternate numbers of an list//

assert.deepEqual(selectEverySecondNumber([]),[]);
assert.deepEqual(selectEverySecondNumber([2]),[2]);
assert.deepEqual(selectEverySecondNumber([2,3]),[2]);
assert.deepEqual(selectEverySecondNumber([1,2,3,4,5,6]),[1,3,5]);

//Tests for finding out the sum  of elements of an list//

assert.equal(sumOfListElements([]),0);
assert.equal(sumOfListElements([""]),0);
assert.equal(sumOfListElements([4]),4);
assert.equal(sumOfListElements([-1,-2,-3]),-6);

//Tests for creating a union of two list//

assert.deepEqual(unionOfList([],[]),[]);
assert.deepEqual(unionOfList([2],[]),[2]);
assert.deepEqual(unionOfList([2],[4]),[2,4]);
assert.deepEqual(unionOfList([1,2,3,4,5],[2,3,5,6,7,9]),[1,2,3,4,5,6,7,9]);

//Tests for creating an list of unique elements from given list//

assert.deepEqual(filterUniqueElements([2,2,2,2]),[2]);
assert.deepEqual(filterUniqueElements([1,2,3,3,4,5,3,2,2]),[1,2,3,4,5]);
assert.deepEqual(filterUniqueElements([-3,-6,-4,-6,-3]),[-3,-6,-4]);
