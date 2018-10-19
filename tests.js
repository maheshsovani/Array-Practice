const assert=require("assert");

const library=require("./library.js");

const {createIntersectedArray,doPartition,rotateArray,isSubsetOf,zippedArray,averageOfArrayElements,checkAscending,checkDecending,
differentiateArrays,countEvenNumbers,extractDigits,findGreatestNumber,countElementLength,countBelowThreshHold,findLowestNumber,
countOddNumbers,reverseArray,reverseFibonacciSeries,reverseSeries,sumOfArrayElements,unionOfArray,filterUniqueElements,
findFirstOccurence,countAboveThreshHold,alternateElement,extractOddNumbers,extractEvenNumbers } = library;

//Tests for  create intersected array  //

array1=[1,2,3,4,1,3,4,5,2,4];
array2=[1,2,3,4,5];
assert.deepEqual(createIntersectedArray(array1,array2),[1,2,3,4,5]);

array3=[-3,-6,-4,-6,-3];
array4=[-3,-6,13,23,13,-4];
assert.deepEqual(createIntersectedArray(array3,array4),[-3,-6,-4]);

array5=[2,3,4,5,5,5,2];
array6=[2,5,2,3,4];
assert.deepEqual(createIntersectedArray(array5,array6),[2,3,4,5]);

array7=[2];
array8=[2,5,3,2];
assert.deepEqual(createIntersectedArray(array7,array8),[2]);

array9=[2];
array10=[];
assert.deepEqual(createIntersectedArray(array9,array10),[]);

//Tests for array Partition//

array1=[1,2,3,243,23,23,765,23,8723,345,42,43];
assert.deepEqual(doPartition(array1,300),[[1,2,3,243,23,23,23,42,43],[765,8723,345]]);

array2=[2,4,5,6,3,2,45,6,2,2,4];
assert.deepEqual(doPartition(array2,5),[[2,4,3,2,2,2,4],[5,6,45,6]]);

array3=[2,3,4,5,5,5,2,3,5,2,3,5];
assert.deepEqual(doPartition(array3,4),[[2,3,2,3,2,3],[4,5,5,5,5,5]]);

array4=[];
assert.deepEqual(doPartition(array4,7),[[],[]]);

array5=[2,3,4,5,5,5,2,3,5,2,3,5];
assert.deepEqual(doPartition(array5,0),[[],[2,3,4,5,5,5,2,3,5,2,3,5]]);

//Tests for rotate array//

array1 = [1];
number = 1;
assert.deepEqual(rotateArray(array1,number),[1]);

array2 = [1,1,34,12,121,432,12,];
number = 4;
assert.deepEqual(rotateArray(array2,number),[121,432,12,1,1,34,12]);

array3 = [1,3,2,4,3,2,1,42,2];
number = 2;
assert.deepEqual(rotateArray(array3,number),[2,4,3,2,1,42,2,1,3]);

array4 = [1,2,3,4,5,6];
number = 0;
assert.deepEqual(rotateArray(array4,number),[1,2,3,4,5,6]);

array5 = [];
number = 0;
assert.deepEqual(rotateArray(array5,number),[]);

//Tests for subset array identification//

array=[1,2,3,4,5,6];
subsetArray=[1,2,3];
assert.equal(isSubsetOf(array,subsetArray),true);

array=[1,2];
subsetArray=[];
assert.equal(isSubsetOf(array,subsetArray),false);

array=[-26,-34,-56,12,34,2,4];
subsetArray=[1,5,97,2];
assert.equal(isSubsetOf(array,subsetArray),false);

array=[];
subsetArray=[];
assert.equal(isSubsetOf(array,subsetArray),false);

//Tests for zipped array generation //

array1=[1,2,3,4];
array2=[1,2,3,4,5];
assert.deepEqual(zippedArray(array1,array2),[[1,1],[2,2],[3,3],[4,4]]);

array3=[];
array4=[];
assert.deepEqual(zippedArray(array3,array4),[]);

array5=[2,3,4,5,5,5,2];
array6=[2,55,22,2];
assert.deepEqual(zippedArray(array5,array6),[[2,2],[3,55],[4,22],[5,2]]);

array7=[1];
array8=[2,5];
assert.deepEqual(zippedArray(array7,array8),[[1,2]]);

//Tests for averageOfArrayElements of array element numbers //

array1=[0];
assert.equal(averageOfArrayElements(array1),0);

array2=[2,3,4,5,6,7,8,9];
assert.equal(averageOfArrayElements(array2),5.5);

array3=[4,14,-2,-6,-5];
assert.equal(averageOfArrayElements(array3),1);

//Tests for checking ascending order of array of numbers//

array=[1,2,3,4,5,6];
assert.equal(checkAscending(array),true);

array=[2,3,42,322,466,34332,329022];
assert.equal(checkAscending(array),true);

array=[1];
assert.equal(checkAscending(array),true);

array=[];
assert.equal(checkAscending(array),true);

//Tests for checking decending order of array of numbers //

array=[90,43,21,20,18,10];
assert.equal(checkDecending(array),true);

array=[2,3,42,322,466,34332,329022];
assert.equal(checkDecending(array),false);

array=[1];
assert.equal(checkDecending(array),true);

array=[];
assert.equal(checkDecending(array),true);

//Tests for difference of array//

array1=[1,2,3,4,1,3,45,2,4,221,12];
array2=[4,2,5,2,5,3,2];
assert.deepEqual(differentiateArrays(array1,array2),[1,1,45,221,12]);

array3=[-3,-6,-4,-6,-3,12,123,312];
array4=[-3,-6,-4,-6,-3,12,123,312];
assert.deepEqual(differentiateArrays(array3,array4),[]);

array5=[2,3,4,5,5,5,2,131,12345,543];
array6=[2,3,4,5,131,12345];
assert.deepEqual(differentiateArrays(array5,array6),[543]);

array7=[];
array8=[];
assert.deepEqual(differentiateArrays(array7,array8),[]);

array9=[2];
array10=[2];
assert.deepEqual(differentiateArrays(array9,array10),[]);

//Tests for counting number of even elements in given array //

array1=[1,2,3,4,5,6,7,8,9];
assert.equal(countEvenNumbers(array1),4);

array2=[-1,-2,-3,-4,-5];
assert.equal(countEvenNumbers(array2),2);

array3=[2,3,4,5,-2,-4];
assert.equal(countEvenNumbers(array3),4);

array4=[0];
assert.equal(countEvenNumbers(array4),1);

array5=[];
assert.equal(countEvenNumbers(array5),0);

//Tests for extracting digits of given number into an array//
number1=128912879;
assert.deepEqual(extractDigits(number1),[1,2,8,9,1,2,8,7,9]);

number2=27362837;
assert.deepEqual(extractDigits(number2),[2,7,3,6,2,8,3,7]);

number3=15362735;
assert.deepEqual(extractDigits(number3),[1,5,3,6,2,7,3,5]);

number4=0;
assert.deepEqual(extractDigits(number4),[0]);

number5="";
assert.deepEqual(extractDigits(number5),[]);

//Tests for creating a seperate array of even numbers in an array//

array1=[1,2,3,4,5,6,7,8,9];
assert.deepEqual(extractEvenNumbers(array1),[2,4,6,8]);

array2=[-1,-2,-3,-4,-5];
assert.deepEqual(extractEvenNumbers(array2),[-2,-4]);

array3=[2,3,4,5,-2,-4];
assert.deepEqual(extractEvenNumbers(array3),[2,4,-2,-4]);

array4=[1];
assert.deepEqual(extractEvenNumbers(array4),[]);

array5=[];
assert.deepEqual(extractEvenNumbers(array5),[]);

//Tests for creating a seperate array of odd numbers in an array//

array1=[1,2,3,4,5,6,7,8,9];
assert.deepEqual(extractOddNumbers(array1),[1,3,5,7,9]);

array2=[-1,-2,-3,-4,-5];
assert.deepEqual(extractOddNumbers(array2),[-1,-3,-5]);

array3=[2,3,4,5,-2,-4];
assert.deepEqual(extractOddNumbers(array3),[3,5]);

array4=[2]
assert.deepEqual(extractOddNumbers(array4),[]);

array5=[]
assert.deepEqual(extractOddNumbers(array5),[]);

//Tests for fiding out first occurence of given number in an array//

array1=[1,2,3,4,5,6,7,8,9];
assert.equal(findFirstOccurence(array1,3),3);

array2=[-1,-2,-3,-4,-5];
assert.equal(findFirstOccurence(array2,-2),2);

array3=[2,3,4,5,-2,-4];
assert.equal(findFirstOccurence(array3,5),4);

//Tests for creating a new array of numbers above a certain limit or threshHold//

array1=[1,2,3,4,5,6,7,8,9];
assert.equal(countAboveThreshHold(array1,3),6);

array2=[-1,-2,-3,-4,-5];
assert.equal(countAboveThreshHold(array2,-2),1);

array3=[2,3,4,5,-2,-4];
assert.equal(countAboveThreshHold(array3,-4),5);

array4=[2];
assert.equal(countAboveThreshHold(array4,1),1);

array5=[];
assert.equal(countAboveThreshHold(array5,0),0);

//Tests for finding out greatest number in an array//

array1=[1,2,3,4,5,6,7,8,9];
assert.equal(findGreatestNumber(array1),9);

array2=[-1,-2,-3,-4,-5];
assert.equal(findGreatestNumber(array2),-1);

array3=[2,3,4,5,-2,-4];
assert.equal(findGreatestNumber(array3),5);

array4=[2];
assert.equal(findGreatestNumber(array4),2);

//Tests for finding out the length of elements of array//

array1=["mahesh","gaurav","tushar","heera","sai","swapnil"];
assert.deepEqual(countElementLength(array1),[ 6,6,6,5,3,7]);

array2=[""];
assert.deepEqual(countElementLength(array2),[0]);

array3=["   ","dhruv","sayali","jayanth"," ","swamiji"];
assert.deepEqual(countElementLength(array3),[3,5,6,7,1,7]);

array4=[" "];
assert.deepEqual(countElementLength(array4),[1]);

array5=[];
assert.deepEqual(countElementLength(array5),[]);
//Tests for creating an arrray of numbers in given array above certain threshHold//

array1=[1,2,3,4,5,6,7,8,9];
assert.equal(countBelowThreshHold(array1,3),2);

array2=[-1,-2,-3,-4,-5];
assert.equal(countBelowThreshHold(array2,-2),3);

array3=[2,3,4,5,-2,-4];
assert.equal(countBelowThreshHold(array3,-4),0);

array4=[-1];
assert.equal(countBelowThreshHold(array4,0),1);

array5=[0];
assert.equal(countBelowThreshHold(array5,-4),0);

//Tests for finding out the lowest number in an array//

array1=[1,2,3,4,5,6,7,8,9];
assert.equal(findLowestNumber(array1),1);

array2=[-1,-2,-3,-4,-5];
assert.equal(findLowestNumber(array2),-5);

array3=[2,3,4,5,-2,-4];
assert.equal(findLowestNumber(array3),-4);

array4=[0];
assert.equal(findLowestNumber(array4),0);

//Tests for finding out the number of odd elements in an array//

array1=[1,2,3,4,5,6,7,8,9];
assert.deepEqual(countOddNumbers(array1),5);

array2=[-1,-2,-3,-4,-5];
assert.deepEqual(countOddNumbers(array2),3);

array3=[2,3,4,5,-2,-4];
assert.deepEqual(countOddNumbers(array3),2);

array4=[2];
assert.deepEqual(countOddNumbers(array4),0);

array5=[3];
assert.deepEqual(countOddNumbers(array5),1);

//Tets for creating a reversed array//

array1=["mahesh","gaurav","tushar","heera","sai","swapnil"];
assert.deepEqual(reverseArray(array1),["swapnil","sai","heera","tushar","gaurav","mahesh"]);

array2=["mahesh"];
assert.deepEqual(reverseArray(array2),["mahesh"]);

array3=["   ","dhruv","sayali","jayanth"," ","swamiji"];
assert.deepEqual(reverseArray(array3),["swamiji"," ","jayanth","sayali","dhruv","   "]);

array4=[];
assert.deepEqual(reverseArray(array4),[]);

//Tests for printing the fibonacci series in reversed order//

assert.deepEqual(reverseFibonacciSeries(2),[1,0]);

assert.deepEqual(reverseFibonacciSeries(5),[3,2,1,1,0]);

assert.deepEqual(reverseFibonacciSeries(),[0]);

assert.deepEqual(reverseFibonacciSeries(0),[0]);

assert.deepEqual(reverseFibonacciSeries(4),[2,1,1,0]);

//Tests for printing the given series of numbers in reverse order//

array1=[1,2,3,4,5,6,7,8,9,10];
assert.deepEqual(reverseSeries(array1),[10,9,8,7,6,5,4,3,2,1]);

array2=[-1,-2,-3,-4,-5,-6,-7];
assert.deepEqual(reverseSeries(array2),[-7,-6,-5,-4,-3,-2,-1]);

array3=[-1,2,3,-4];
assert.deepEqual(reverseSeries(array3),[-4,3,2,-1]);

array4=[];
assert.deepEqual(reverseSeries(array4),[]);

array5=[-1];
assert.deepEqual(reverseSeries(array5),[-1]);

//Tests for creating an array of alternate numbers of an array//

array1=[1,2,3,4,5,6,7,8,9,10];
assert.deepEqual(alternateElement(array1),[1,3,5,7,9]);

array2=[-1,-2,-3,-4,-5,-6,-7];
assert.deepEqual(alternateElement(array2),[-1,-3,-5,-7]);

array3=[-1,2,3,-4];
assert.deepEqual(alternateElement(array3),[-1,3]);

array4=[2,3];
assert.deepEqual(alternateElement(array4),[2]);

array5=[2];
assert.deepEqual(alternateElement(array5),[2]);

//Tests for finding out the sum  of elements of an array//

array1=[-1,-2,-3];
assert.equal(sumOfArrayElements(array1),-6);

array2=[2,3,4,5,6,7,8,9];
assert.equal(sumOfArrayElements(array2),44);

array3=[4,14,-2,-6,-5];
assert.equal(sumOfArrayElements(array3),5);

array4=[4];
assert.equal(sumOfArrayElements(array4),4);

array5=[4,-4];
assert.equal(sumOfArrayElements(array5),0);

//Tests for creating a union of two array//

array1=[1,2,3,243,23,23];
array2=[765,23,8723,345,42,43];
assert.deepEqual(unionOfArray(array1,array2),[1,2,3,243,23,765,8723,345,42,43]);

array3=[2,4,5,6,3,2,45,6,2,2,4];
array4=[3,4,2,1,3,4,4,211,3232];
assert.deepEqual(unionOfArray(array3,array4),[2,4,5,6,3,45,1,211,3232]);

array5=[2,3,4,5,5,5,2,3,5,2,3,5];
array6=[4,2,2,3,1,3,1,5,567,2132];
assert.deepEqual(unionOfArray(array5,array6),[2,3,4,5,1,567,2132]);

array7=[];
array8=[];
assert.deepEqual(unionOfArray(array7,array8),[]);

array9=[2];
array10=[];
assert.deepEqual(unionOfArray(array9,array10),[2]);

//Tests for creating an array of unique elements from given array//

array1=[1,2,3,4,1,3,4,5,2,4];
assert.deepEqual(filterUniqueElements(array1),[1,2,3,4,5]);

array2=[-3,-6,-4,-6,-3];
assert.deepEqual(filterUniqueElements(array2),[-3,-6,-4]);

array3=[2,3,4,5,5,5,2];
assert.deepEqual(filterUniqueElements(array3),[2,3,4,5]);

array4=[2,2,2,2];
assert.deepEqual(filterUniqueElements(array4),[2]);

array5=[];
assert.deepEqual(filterUniqueElements(array5),[]);
