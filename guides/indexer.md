Indexer
----

<div class="example">
Indexer
</div>
```ruby
class foo {
    def __getitem__ (key) {
        /* ... */
    }
    def __setitem__ (key, value) {
        /* ... */
    }
}
```
```ruby
f = foo.new();

f["a"] = 1234;
print(f["a"]);
```
