Type
----

__Rookie__ has a runtype typedata and you can access to it.

<div class="example">
Compare type using `is`
</div>
```ruby
def foo(a) {
    if (a is integer) 
       puts ("a is a integer!");
    else if (a is string)
       puts ("a is a string!");
    else
       puts ("IDK");
}
```