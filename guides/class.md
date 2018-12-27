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
    FIELD = 1;
    
    def METHOD_NAME(PARAMS) {
        # METHOD_BODY
    }
}
```

The syntax for instantiating class is `new()`, inspired by __Ruby__.

```ruby
a = CLASS_NAME.new();
```

### Field

<div class="example">
Field
</div>
```ruby
class character {
    MaxLength = 16;

    def set_name(name) {
        if (name.length() >= MaxLength)
          puts ("ERROR!");
    }
}
```

### Property

__Property__ is a instance variable and must be started with `@`.

<div class="example">
Property
</div>
```ruby
class person {
    # `age` and `@age` have different meanings!
    def set_age(age) {
        @age = age;
    }
    def print_age() {
        print(@age);
    }
}
```

```ruby
a = person.new();
a.set_age(51);
a.print_age(); # 51
```

__Properties__ are also can be accessed outside of the class. In this time, you should not use `@` before it's name.
```ruby
a.age = 22;
a.print_age(); # 22
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
# Hello
person.new().say_hello();

# HelloWorld
engineer.new().say_hello();
```
