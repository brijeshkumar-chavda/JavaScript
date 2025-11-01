# Prototype base inheritance VS Class base inheritance

| Topic                       | Prototype-base Inheritance                                                                                                                                                                                                                                                         | Class-base Inheritance                                                                                                                                                                                                                                                                                                                      |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Syntax and language feature | It is typically associated with languages that have prototype-based object systems, such as JavaScript. In prototype inheritance, objects are linked together through prototypes, and objects can directly inherit properties and methods from other objects.                      | It is typically associated with languages that have class-based object systems, such as Java or C++. Class-based inheritance involves defining classes and creating objects based on those classes. Objects are instances of classes, and inheritance is achieved through class hierarchies and the concept of subclasses and superclasses. |
| Object Creation             | In prototype-based languages like JavaScript, objects can be created directly from existing objects or prototypes. New objects inherit properties and methods from their prototypes, and any modifications to the prototype are reflected in all the objects that inherit from it. | In class-based languages, objects are created by instantiating a class using the new keyword. Objects inherit properties and methods from their class, and modifications to the class do not affect already instantiated objects.                                                                                                           |
| Class like syntax           | Prototype-based languages like JavaScript often provide syntactic sugar, such as constructor functions or the class keyword introduced in ES6, to emulate class-like syntax. However, under the hood, the inheritance mechanism is still based on prototypes.                      | Class-based languages provide explicit syntax for defining classes, constructors, methods, and inheritance relationships. Classes serve as blueprints for creating objects, and inheritance is explicitly declared using keywords like extends or implements.                                                                               |

# Summary

Prototype-base Inheritance

- Creating sport car by modifying the normal car.
- Building new house by referring to the existing house.

Class-base Inheritance

- Creating sport car from the designee.
- Creating new house from the architecture's designee.
