const assert=require("assert");

const library=require("./library.js");

const {intersectSets,doPartition,rotateArray,isSubsetOf,zippedArray,averageOfArrayElements,checkAscending,checkDecending,
differentiateArrays,countEvenNumbers,extractDigits,findGreatestNumber,countElementLength,countBelowThreshHold,findLowestNumber,
countOddNumbers,reverseArray,reverseFibonacciSeries,reverseSeries,sumOfArrayElements,unionOfArray,filterUniqueElements, findFirstOccurence,countAboveThreshHold,alternateElement,extractOddNumbers,extractEvenNumbers } = library;

//Tests for  create intersected array  //

assert.deepEqual(intersectSets([2],[]) ,[]);
assert.deepEqual(intersectSets([""],[""]) ,[""]);
assert.deepEqual(intersectSets([1,2,3,4],["1","2"]) ,[1,2]);
assert.deepEqual(intersectSets([2,3,4,5],[2,3,4,5]) ,[2,3,4,5]);
assert.deepEqual(intersectSets([2,5,3],[2]) ,[2]);

//Tests for array Partition//

assert.deepEqual(doPartition([],7),[[],[]]);
assert.deepEqual(doPartition([11,23,43,25,21,65],30),[[11,23,25,21],[43,65]]);
assert.deepEqual(doPartition([1,2,3,4,5],0),[[],[1,2,3,4,5]]);

//Tests for rotate array//

//assert.deepEqual(rotateArray([],0),[]);
assert.deepEqual(rotateArray([1],1),[1]);
assert.deepEqual(rotateArray([1,2,3,4,5,6],0),[1,2,3,4,5,6]);
assert.deepEqual(rotateArray(["name","age","education","time"],2),["education","time","name","age"]);
assert.deepEqual(rotateArray([1,2,"mahesh","name"],3),["name",1,2,"mahesh"]);

//Tests for subset array identification//

assert.equal(isSubsetOf([],[]),false);
assert.equal(isSubsetOf([1,2],[]),false);
assert.equal(isSubsetOf([""],[""]),true);
assert.equal(isSubsetOf([1,2,3,4,5,6],[1,2,3]),true);
assert.equal(isSubsetOf([1,2,3,"mahesh","some"],[1,2,3]),true);
assert.equal(isSubsetOf([1,2,3,4],[5,6,7]),false);

//Tests for zipped array generation //

assert.deepEqual(zippedArray([],[]),[]);
assert.deepEqual(zippedArray([1,2,3,4],[1,2,3,4,5]),[[1,1],[2,2],[3,3],[4,4]]);
assert.deepEqual(zippedArray([1,2],[1,2,3,4,5]),[[1,1],[2,2]]);
assert.deepEqual(zippedArray(["test","for","zip"],[1,2,3,4,5]),[["test",1],["for",2],["zip",3]]);

//Tests for averageOfArrayElements of array element numbers //

assert.equal(averageOfArrayElements([0]),0);
assert.equal(averageOfArrayElements([2,3,4,5,6]),4);
assert.equal(averageOfArrayElements([1,2,0]),1);

//Tests for checking ascending order of array of numbers//

//assert.equal(checkAscending([]),true);
assert.equal(checkAscending([1]),true);
assert.equal(checkAscending([1,2,3,4,5,6]),true);
assert.equal(checkAscending([2,4,1,42,2]),false);

//Tests for checking decending order of array of numbers //

assert.equal(checkDecending([]),true);
assert.equal(checkDecending([1]),true);
assert.equal(checkDecending([5,4,3,2,1]),true);
assert.equal(checkDecending([1,2,3,4,5]),false);

//Tests for difference of array//

assert.deepEqual(differentiateArrays([],[]),[]);
assert.deepEqual(differentiateArrays([2],[2]),[]);

//Tests for counting number of even elements in given array //

assert.equal(countEvenNumbers([]),0);
assert.equal(countEvenNumbers([0]),1);
assert.equal(countEvenNumbers([-2,4,6,-12,1,3,5]),4);
assert.equal(countEvenNumbers([1]),0);

//Tests for extracting digits of given number into an array//

assert.deepEqual(extractDigits([0]),[0]);
assert.deepEqual(extractDigits([""]),[]);
assert.deepEqual(extractDigits(128912879),[1,2,8,9,1,2,8,7,9]);

//Tests for creating a seperate array of even numbers in an array//

assert.deepEqual(extractEvenNumbers([]),[]);
assert.deepEqual(extractEvenNumbers([1]),[]);
assert.deepEqual(extractEvenNumbers([""]),[""]);
assert.deepEqual(extractEvenNumbers([1,2,3,4,5,6,7,8,9]),[2,4,6,8]);
assert.deepEqual(extractEvenNumbers([1,3,-2,-4,3]),[-2,-4]);

//Tests for creating a seperate array of odd numbers in an array//

assert.deepEqual(extractOddNumbers([]),[]);
assert.deepEqual(extractOddNumbers([""]),[]);
assert.deepEqual(extractOddNumbers([2]),[]);
assert.deepEqual(extractOddNumbers([1,2,3,4,5]),[1,3,5]);
assert.deepEqual(extractOddNumbers([-1,-2,-3,-4,-5]),[-1,-3,-5]);

//Tests for fiding out first occurence of given number in an array//

assert.equal(findFirstOccurence([1],1),1);
assert.equal(findFirstOccurence([1,2,3,4,5],3),3);
assert.equal(findFirstOccurence([-1,-2,-3,-4,-5],-2),2);
assert.equal(findFirstOccurence(["name","is","is","name"],"name"),1);

//Tests for creating a new array of numbers above a certain limit or threshHold//

assert.equal(countAboveThreshHold([],0),0);
assert.equal(countAboveThreshHold([2],1),1);
assert.equal(countAboveThreshHold([1,3,5,6,4,4,5,7],3),6);
assert.equal(countAboveThreshHold([-1,-2,-3,-4,-5],-2),1);

//Tests for finding out greatest number in an array//

assert.equal(findGreatestNumber([2]),2);
assert.equal(findGreatestNumber([1,3,5,7,9]),9);
assert.equal(findGreatestNumber([-1,-2,-3,-4,-5]),-1);

//Tests for finding out the length of elements of array//

assert.deepEqual(countElementLength([]),[]);
assert.deepEqual(countElementLength([""]),[0]);
assert.deepEqual(countElementLength(["  "]),[2]);
assert.deepEqual(countElementLength(["mahesh","gaurav","tushar","heera"]),[ 6,6,6,5]);

//Tests for creating an arrray of numbers in given array above certain threshHold//

assert.equal(countBelowThreshHold([0],-4),0);
assert.equal(countBelowThreshHold([-1],0),1);
assert.equal(countBelowThreshHold([1,2,3,4,5,6,7],3),2);
assert.equal(countBelowThreshHold([-1,-2,-3,-4,-5],-2),3);

//Tests for finding out the lowest number in an array//

assert.equal(findLowestNumber([0]),0);
//assert.equal(findLowestNumber([]), );
assert.equal(findLowestNumber([1,2,3,4,5]),1);
assert.equal(findLowestNumber([-1,-2,-3,-4,-5]),-5);

//Tests for finding out the number of odd elements in an array//

assert.equal(countOddNumbers([2,3,4,5,-2,-4]),2);
assert.equal(countOddNumbers([2]),0);
assert.equal(countOddNumbers([]),0);
assert.equal(countOddNumbers([3]),1);

//Tets for creating a reversed array//

assert.deepEqual(reverseArray([]),[]);
assert.deepEqual(reverseArray(["mahesh"]),["mahesh"]);
assert.deepEqual(reverseArray([1,2,3,4,"test","is"]),["is","test",4,3,2,1]);
assert.deepEqual(reverseArray(["mahesh","gaurav","tushar","heera"]),["heera","tushar","gaurav","mahesh"]);

//Tests for printing the fibonacci series in reversed order//

assert.deepEqual(reverseFibonacciSeries(0),[0]);
assert.deepEqual(reverseFibonacciSeries(),[0]);
assert.deepEqual(reverseFibonacciSeries(2),[1,0]);
assert.deepEqual(reverseFibonacciSeries(4),[2,1,1,0]);

//Tests for printing the given series of numbers in reverse order//

assert.deepEqual(reverseSeries([]),[]);
assert.deepEqual(reverseSeries([""]),[""]);
assert.deepEqual(reverseSeries([-1]),[-1]);
assert.deepEqual(reverseSeries([-1,2,3,-4]),[-4,3,2,-1]);

//Tests for creating an array of alternate numbers of an array//

assert.deepEqual(alternateElement([]),[]);
assert.deepEqual(alternateElement([2]),[2]);
assert.deepEqual(alternateElement([2,3]),[2]);
assert.deepEqual(alternateElement([1,2,3,4,5,6]),[1,3,5]);

//Tests for finding out the sum  of elements of an array//

assert.equal(sumOfArrayElements([]),0);
assert.equal(sumOfArrayElements([""]),0);
assert.equal(sumOfArrayElements([4]),4);
assert.equal(sumOfArrayElements([-1,-2,-3]),-6);

//Tests for creating a union of two array//

assert.deepEqual(unionOfArray([],[]),[]);
assert.deepEqual(unionOfArray([2],[]),[2]);
assert.deepEqual(unionOfArray([2],[4]),[2,4]);
assert.deepEqual(unionOfArray([1,2,3,4,5],[2,3,5,6,7,9]),[1,2,3,4,5,6,7,9]);

//Tests for creating an array of unique elements from given array//

//assert.deepEqual(filterUniqueElements([]),[]);
assert.deepEqual(filterUniqueElements([2,2,2,2]),[2]);
assert.deepEqual(filterUniqueElements([1,2,3,3,4,5,3,2,2]),[1,2,3,4,5]);
assert.deepEqual(filterUniqueElements([-3,-6,-4,-6,-3]),[-3,-6,-4]);
