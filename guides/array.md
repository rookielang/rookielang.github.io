Array
----

```ruby
ary = [1, 2, "hello", "world"];

puts (ary);
```

Accessing to non-existing index is illegal in __rookie__.
```ruby
ary = [1, 2, 3];

# Throws an exception
puts (ary[999]);
```

__Concat__<br>
__Arrays__ can be concatenated using `+` operator.
```ruby
ary = [1, 2, 3] + [4, 5, 6];

# Should be 
# [1, 2, 3, 4, 5 ,6]
puts (ary);
```