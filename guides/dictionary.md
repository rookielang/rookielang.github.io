Dictionary
----

__Dictionary__ is a `key-value` storage.

```ruby
person = {
    name: "Jinwoo",
    age : 24
};

puts (dic.to_string());
```

### Nested initilization

You can put dictionaries and arrays inside the dictionary.

```ruby
person = {
    name  : "Jinwoo", 
    skills: ["C", "Ruby", "HTML"],
    inventory: {
        hamberger: 10,
        sword    : 1
    }
};
```