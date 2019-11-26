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

## Composition VS Inheritance?

### Problem of Inheritance

Sometimes a parent class cannot handle everything. If we want to divided those children into catagories, one for each feature, then there will be so many subclasses which is not good for the maintainability and readability.

### Why use composition 

We could use composition, interface or delegation to solve the problem above.

First of all, we could try to create interfaces for every features, and let the certain class implement these features. The problems is that all methods in interfaces are abstract methods and we still need to implement all the methods one by one in each class.

How to solve this problem? We could use composition and delegation.

We could create implementation classes for all those interfaces and composite those implementation classes into each child class, for example, as a private variable.

### Composition or Inheritance?

As the example above, using composition instead of inheritance requires more granular codes. Then it is not good for maintainability and readability.

So if the system is stable and the inheritance relationship is shallow, then we could still use inheritance. And some certain design patterns requires the usage of inheritance.

## MVC VS DDD

### Model, View, Controller

The def is not strict, for example, in back end we have repository(data), service(logic), controller(expose interface).

#### Anemic Domain Model

process oriented

separate data and logic

e.x. use userservice class to control data in userBo class

### Domain Driven Design

Still in three parts: model, view, controller, but in service part, there is one service class and there is one domain class, and we put both data and logic into domain class.

#### Rich Domain Model

put data and logic in the same class, i.e. OOP

### Why use anemic?

history, easy, simple(logics are mainly included into SQL queries)

But for complex systems is better to use DDD.