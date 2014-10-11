function solution(){
  return {
    fibo: function(limit, prev, curr){
      var fiboSeq = [];
      for (curr = curr; curr < limit; curr = prev + curr){
        prev = curr - prev;
        fiboSeq.push(curr);
      }
      return fiboSeq;
    },

    filterEvens: function(index){
      var evens = [];
      fiboSeq.forEach(function(value, index){
        if (value % 2 === 0){
          evens.push(value);
        }
      });
      return evens;
    },

    sum: function(evens){
      sumEvens = 0;
      evens.forEach(function(value, index){
        sumEvens += sumEvens
      });
      return sumEvens;
    }
  }
}

console.log(solution().fibo(100, 1, 2));
console.log(solution().filterEvens(fiboSeq));  // this is wrong. fiboSeq is undefined

var car = solution().fibo(100, 1, 2);
var boon =  solution().filterEvents(car); 
var bigoby = solution().sum(boon);
console.log(bigoby); //should print the proper answer to sum?



function test(){
    return {
        add: function(a,b){ return a + b; },
        
        // here, lets define a function add three, which adds 3 numbers. instead of using "+" we use the previously defined add function.
        addthree: function(a, b, c ){ return this.add(this.add(a,b), c) },  // does this make sense? its basically ((a+b) + c)
    }
}
