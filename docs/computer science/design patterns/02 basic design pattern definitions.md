# Basic Design Pattern Definitions

Created: Jul 20, 2020 11:20 AM

- to better understand the experience of previous programmers
- to have a concise term for discussing related programs and solutions, especially in non-formal daily usages

## Common Design Patterns

- creational
- behavioral
- structural

### Singleton

Singleton means at most one instance of a class could exists at a given time, usually use a exposed static method.

Sometime it could be a substitute for global variable, but it cannot solve the state problems of global variable so it is an anti-pattern.

However, because it is a class so it can inherit from base class or interfaces, and it could changed to some kind of normal class easily in the future.

It might slow down the speed and hold resources because it has be initialized at the beginning and always keep running until the application ends.

### Builder

Instead of creating an object by yourself, you create a builder and let it create the object for you.

Even though it sounds like something useless, in usage it could make the code easier to understand and to add or remove parameters when needed, and also, prevent initialization errors. It should be used when create complicated objects or objects that need to be created in multiple steps.

It is also useful to create sub-classes of the builder for specific and customized usages.

### Iterator

Many programming languages will have that built-in feature. It could let you iterate through the elements in a data structure without knowing how the elements are stored or represented.

### Observer

Also called *Publish-Subscribe Pattern*, this will let objects broadcasts changes in state to other registered objects without needing to know much about them.

An example for this design pattern is the MVC separation. Changes in model will cause the views to redraw themselves.

### Decorator

Or *Wrapping Pattern*, which wraps an object with another one that derived from the same base class. It could modify the behavior by performing some additional processes before or after.

the prototypical implementation:

- Component: abstract class/interface to define the object and the decorator
- Concrete Component: the real class of underlying object
- Decorator: the (typically abstract) class to provide the functionality shared by decorator and wrap the Concrete Component, forward the method call, etc.
- Concrete Decorator: override Decorator class to modify the behavior of wrapped Concrete Components, usually there are more than one Concrete Decorators to modify the Concrete Components accordingly

## Singleton Implementation

> Your application uses a logging class to write debugging messages to the console. How would you implement this logging facility using the singleton pattern?

The easiest thing to do is to initialize the logger inside of the class, and make the constructor private so that no one could initialize it.

```java
public class Logger {
	private static Logger instance = new Logger();
	private Logger() {}
	public static Logger getInstance() { return instance; }
}
```

> Your application uses a singleton, but it is not always necessary, and it is expensive to initialize. How can you improve it?

Alright, even the Logger class could be initialized, you could create the logger instance until `getInstance()` is called, this is called **deferred initialization** or **lazy loading.**

Here are some features of it:

- faster startup time even it could be slow when call `getInstance()` for the first time
- if the singleton is never accessed the time and resources could be saved
- you could still make some workaround so that the user could choose whether to initialize the instance at compile time or running time
- when the environment is recourse-limited the instance initialization might failed while running
- it will increase the complexity of the singleton class especially for multi-threaded system

```java
public class Logger {
	private static Logger instance = null;
	private Logger() {}
	public static Logger getInstance() {
		if (instance==null) {
			instance = new Logger();
		}
		return instance;
	}
}
```

As we said before, it is not safe for multi-threaded system, let's see what else we could do to protect it.

First of all, you could add `synchronized` tag before the `getInstance()` method so that the creation process could be locked. However, we just need to initialize the new logger instance for only once while might need to call `getInstance()` for several times, if make the whole method `synchronized` then the speed will go down. You could make an inner class that performs deferred loading, even it increases the complexity of the code.

```java
public class Logger {
	private static Logger instance = null;
	private Logger() {}
	private static class LoggerHolder {
		public static final Logger instance = new Logger();
	}
	public static Logger getInstance() { return LoggerHolder.instance; }
}
```

## Decorator versus Inheritance

> Why would you use the decorator instead of inheritance?

Inheritance could only modify the behavior at compiling time but decorator could change it dynamically. If you want to do something dynamically when using the interface you have to create an new object every time when changing the behavior.

Also, decorator could be applied in any kinds of combination as long as they don't interfere others (you have to be careful to make them mutually non-interfering when implementing concrete decorator classes).

However, because decorator is more complex than inheritance, when there is no need to modify the behavior dynamically you should stick with inheritance. And decorator generally don't expose new public methods.

## Efficient Observer Updates

> In the observer pattern, what strategies can be the subject use to efficiently update its observers?

Problem: update state too often when updating multiple properties

Practice: turn update off, make the changes, send only one update to all subscribed objects

Problem: how to determine the object has changed

Practice: let the subject pass the information along the notification instead of letting the subscriber to query