Primitive vs Non-Primitive Data Types in JavaScript
1. Primitive Data Types

Primitive data types are immutable values stored directly in memory.

This means:

they store the actual value
copying creates a completely new independent value
they are compared by value



Types of Primitive Data Types

JavaScript has 7 primitive data types:

String
Number
Boolean
Undefined
Null
BigInt
Symbol



Characteristics of Primitive Types
1. Immutable
let str = "hello";

str[0] = "H";

console.log(str); // hello

Strings cannot be modified directly.

2. Stored by Value

Each variable stores its own copy.

3. Compared by Value
console.log(10 === 10); // true
console.log("abc" === "abc"); // true
Non-Primitive (Reference) Data Types

Non-primitive data types are objects that are stored by reference.

Examples
Object
Array
Function
Date
Map
Set

Everything except primitives is an object in JavaScript.

Example
let obj1 = {
    name: "Abhinav"
};

let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name); // Rahul
Explanation

obj2 stores the reference/address of obj1.

Both variables point to the same object in heap memory.

Characteristics of Non-Primitive Types
1. Mutable
const arr = [1,2,3];

arr.push(4);

console.log(arr); // [1,2,3,4]

Object contents can be modified.

2. Stored by Reference

Variables store memory addresses.

3. Compared by Reference
console.log([] === []); // false
console.log({} === {}); // false

Because both objects have different memory references.

Memory Concept (Important Interview Point)
Primitive → Stack Memory

Stores actual value directly.