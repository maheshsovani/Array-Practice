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

const main=function(){
  let array=[1,2,8,4,5,6,8,8,9,10];
  let givenNumber=+process.argv[2];
  console.log(findFirstOccurence(array,givenNumber));
}
main();
exports.findFirstOccurence=findFirstOccurence;
