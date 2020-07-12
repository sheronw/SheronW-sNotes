# JS Knowledge

## Data Structure

The built-in `shift()` is not the most efficient method. Sometimes you just need a pointer and clean up the memory periodically.

## Object

Could use this to implement one simple Set. (Also a built-in Set in ES6)

`.hasOwnProperty("x")` checks if this object has a certain property x

`delete obj["x"]/ obj.x` deletes this property & data

## Function

### this & arrowfunction

[太长不看版](https://frontarm.com/james-k-nelson/when-to-use-arrow-functions/)：js function中的this与这个function本身有关，即使它被包在object内；然而arrow function的this由外部决定，所以这里要用arrow functinon……之前一定是在哪里看到这个知识点，然而忘了。
补充：可以使用bind函数将某个函数中的this与某个对象绑定

<script src="https://gist.github.com/sheronw/2ce2ecb7d06c85e0cc96c512fcff17c0.js"></script>

## Declaration

### for...in or for...of?

<script src="https://gist.github.com/sheronw/62f6e9c8fb3bf43d092a949629ddeb3f.js"></script>

### var or let?

`var` is function scoped while `let` is block scoped

so when you declar `var` in an if statement, you could get this variable even outside of the block(but not outside of this function), but `let` cannot.

also, `var` got decleared at the top of each function(even the value assignment is still given at the same line)

<script src="https://gist.github.com/sheronw/b88c63dc45139626f2f4277cf62b2bba.js"></script>

## Value & Type

### check null

```javascript
null == null // true
null === null // true
null == undefined // true
```

When using double equal to check, the value might be `undefined` or `null`, so it is better to use triple equal when you really need `null`.

However, in generall we don't really need to distinct them, as they are both falsy values, a more common and easier way is to check its value is false or not, see [this article](https://medium.com/javascript-in-plain-english/how-to-check-for-null-in-javascript-dffab64d8ed5)：

<script src="https://gist.github.com/djD-REK/aac9da6754225d006cd62d8b40df40cb.js"></script>

