# Object-Oriented Programming

## Features

- Encapsulation
- Abstract
- Inheritance
- Polymorphism

## Procedure Oriented or Object Orented?

### Procedure Oriented?

Early languages such as C. Linear. Which is not suitable for large-scale non-linear develpment.

You could still use oop thoughts in procedure oriented languages.

### Why OOP better?

Good for handling non-linear complicated tasks.

It is easier for human-being to abstract the really demand or world to classes, instead of linear tasks in computers. So it is easier to implement certain features.

Also, high maintainability, readability, extensibility, flexibility, simplicity, reusability, testability, etc.

## Fake OOP

- too many getter, setter(encapsulation NG)
- unsuitable global variables or methods
- big classes such as Constants or Utils(no abstraction)
- separate data and method in class(one exception is, anaemic model is widely used in web develpment)

## Abstraction or Interface?

### Abstraction(is-a)

- could only be created by interitance(keyword: extends)
- including both abstract method and real method
- all abstract methods have to be implemented by children

### Interface(has-a/behaves like)

- could only have abstract methods(no implementation or vars)
- all methods have to be implemented by children
- keyword: implements

### Why we need abstraction?

Reusabiilty

In general, we could implement the abstraction class function using ordinary class, however, there are some problems about that, for example:

- Children may forgot to implement some certain method
- we could initiate a empty ancestor class
- an empty method will affect the readability of the code

### Why we need interface?

- decoupling 解耦
- extensability

## Program to an interface, not an implementation

Separate implementation and interface, only give out stable interface and leave the implementations that might change(decoupling). (Interface Design first)

- never give of details in the name of the method
- encapsulate the implementation of the details
- define interface for classes

Notice: if a system is designed to be stablized and no need to maintain, then we don't really need to waste time ensuring the extensability.

