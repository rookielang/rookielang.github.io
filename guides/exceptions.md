Exceptions
----

### Throw

Unlike other languages, only __exception__ objects can be thrown. This clarify users what to catch and handle it.

<div class="example">
Throwing an exception
</div>
```ruby
throw exception.new("error");
```

### Try~Catch

<div class="example">
Catching an exception
</div>
```ruby
try {
    throw exception.new("error"); 
}
catch (e) {
    puts (e);
}
```