Methods
----

### Static method

```ruby
class dog {
    static def kind() {
        puts("animal");
    }
}
class anchovy {
    static def kind() {
        puts("fish");
    }
}
```
```ruby
// animal
dog.kind();

// fish
anchovy.kind();
```

### Instance method

```ruby
class greeter {
    def say_hello() {
        puts("Hello World!");
    }
}

class my_first_program {
    @main
    static def main() {
        greeter.new().say_hello();        
    }
}
```