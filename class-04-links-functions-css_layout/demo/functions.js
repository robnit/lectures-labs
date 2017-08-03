'use strict';

/* parts of a function */
function myFunction ( parameter ) {
    console.log( 'I am inside of a function!' );

    if ( parameter ) {
        alert( 'this function was given the arguments: ' + parameter );
    } else {
        alert( 'You didn\'t give me anything ):' );
    }

    return 'myFunction is done with this : ' + parameter;
}

// no name function
var anonymousFunction = function ( text) {
    console.log( 'anon function says' + text );
    return 'anon function says' + text;
};

// no params
function empty () {
    console.log( 'I take nothing' );
    return 'empty function is done';
}

// no statements
function lazy ( importantParameter ) {}

// no return 
function returnNothing ( todo1, todo2 ) {
    console.log( 'I have two parameters' + todo1, todo2 );
    console.log( 'but will not give anything back' );
}


/* function declaration vs expression */

// declaredFun();
// funExpression();

function declaredFun () {
    alert( 'I was declared and can be called anywhere in the file!' );
}

var funExpression = function () {
    alert( 'I was a function expression and can only be called after I\'m created!' );
}


/* scope */

function alphabet () {
    var letters = ['a','b','c'];
    console.log( 'inside of the alphabet function: ' + letters );
}

// alphabet();
// console.log( 'outside of the alphabet function: ' + letters );