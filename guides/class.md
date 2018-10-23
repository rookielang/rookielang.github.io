Class
----

__Class__ is a minimal unit of building blocks of your program.

### Definition Syntax

Defining a new class is very simple in rookie.

<div class="example">
Class definition
</div>
```ruby
class CLASS_NAME {
    def METHOD_NAME(PARAMS) {
        // METHOD_BODY
    }
}
```

The syntax for instantiating class is `new()`, inspired by __Ruby__.

```ruby
a = CLASS_NAME.new();
```


### Inheritance

<div class="example">
Inheritance
</div>
```ruby
class person {
    def say_hello() {
        puts("Hello");
    }
}
class engineer : person {
    def say_hello() {
        puts("HelloWorld");
    }
}
```
```ruby
// Hello
person.new().say_hello();

// HelloWorld
engineer.new().say_hello();
```