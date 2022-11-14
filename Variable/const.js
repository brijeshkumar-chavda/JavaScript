// Topic: const keyword

// # What is const?
// - It is keyword which use to create variable.

// # Why use const?
// - When we create a variable using var and let we can change it's value.
// - But when we create a variable using const we can't change it's value.
// - Think as a you are creating CONSTANT (Which never change).

// # How to use const?
const pi = 3.14;

// NOTE:
// ## Const need to initialize when you declare const.
// const pi;
// pi = 3.14; // ERROR

// ## Const can't be redeclare.
// const pi = 3.14;
// const pi = 3.145; // ERROR

// ## Const can't be reassign.
// const pi = 3.14;
// pi = 3.145; // ERROR

// ## Const have Block scope. 
{
    const pi = 3.14;
}