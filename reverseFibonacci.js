const reverseFibonacciSeries=function(limit){
  let previousTerm=0;
  let lastSecondTerm=1;
  let currentTerm=0;
  let reverseFibonacci =[];
  reverseFibonacci[limit-1]=0;
  do{
    currentTerm=previousTerm+lastSecondTerm;
    lastSecondTerm=previousTerm;
    previousTerm=currentTerm;
    reverseFibonacci[limit-2]=currentTerm;
    limit--;
  }
  while(limit-1>0)
  return reverseFibonacci;
}

const main= function(){
  let limit=+process.argv[2];
  let result = reverseFibonacciSeries(limit);
  console.log(result);
}
main();
exports.reverseFibonacciSeries=reverseFibonacciSeries;
