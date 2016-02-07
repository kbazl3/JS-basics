//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here
  var inner = outer();

//Once you do that, invoke inner.

  //Code Here

inner();

//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here

var inner = callFriend();
console.log(inner("435-215-9248"));

//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

function makeCounter() {
    var j = 1;
    function plusOne() {
        return j++;
    }
    return plusOne;
}

  //Code Here
  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4



//Next Problem



/*
  Write a function named codeLove that returns the string 'I love code'. Write a second function named codeFriend 
  that accepts the first function as it's first parameter. The second function should return a new third function.
   Store the third function in a variable, codeEcho which, when invoked, invokes the first, original function that 
   was passed in, but will only ever do so once (returns null after first invocation).
*/

  //Code Here

  function codeLove() { //declare function name
    return "I love code"; //return this string
  }

  function codeFriend(param) { //declare second function, set paramater
    var counter = 1; //declace the counter variable and set it to 1

    return function() { //the second function/codefriend will return this function
      if (counter > 1) { //
        return null
      } else {
        counter++; //incremtent counter
        return param; //return param/codeLove
      }
    }
  }

  var codeEcho = codeFriend(codeLove()); //codeEcho now represents 



//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' 
  that accepts two parameters. The first parameter will be an 
  anonymous function and the second parameter, 'N', will be a 
  number. Now, in 'fnCounter', allow the anonymous function to 
  be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/

function fnCounter(anonFunc, num) {
  var counter = 1;
  return function() {
    if (counter <= num) {
      counter++;
      return anonFunc();
    } else {
      return "STOP";
    }
  }
} 



//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) { //function counter is going to loop 5 times.
      setTimeout( function timer(i) { //set i as parameter
          console.log( i );
      }, i*1000, i ); //set
    }
  };

  Above you have a function named counter. Examine the function 
  (without running the code) then below write what you expect to 
  happen when the funciton is invoked. *Hint: setTimeout calls a 
  function or evaluates an expression after a specified number of milliseconds.

    //Answer Here


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here


  Fix the counter function so that it works the way you expect 
  it to work. (logging 1 then 2 then 3, etc) (Note: No unit test for this one because of the timeout)
*/

    //Code Here



//Next Problem



/*
  Make the following code work
  */

  var fn = function(num) {
  return function(){
    return num;
  };
}

var funcArray = [];
for (var i = 0; i < 6; i++) {
  funcArray.push(fn(i));
}

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  //*Hint: Don't let this fool you. Break down what's really happening here.

