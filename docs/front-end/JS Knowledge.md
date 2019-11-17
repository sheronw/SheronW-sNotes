# JS Knowledge

## Function

### this & arrowfunction

https://frontarm.com/james-k-nelson/when-to-use-arrow-functions/
太长不看版：js function中的this与这个function本身有关，即使它被包在object内；然而arrow function的this由外部决定，所以这里要用arrow functinon……之前一定是在哪里看到这个知识点，然而忘了。
补充：可以使用bind函数将某个函数中的this与某个对象绑定

## Declaration

## var or let?

`var` is function scoped while `let` is block scoped

so when you declar `var` in an if statement, you could get this variable even outside of the block(but not outside of this function), but `let` cannot.

also, `var` got decleared at the top of each function(even the value assignment is still given at the same line)

