---
layout: default
title:  "C++ Integration guide"
description: Lean how to embed & extend with rookie.
---

__Rookie__ provides C++ APIs to access entire language features such as AST and debugging.

Compling
----

<div class="example">
Compile with default compiler
</div>
```cpp
auto src = "a = 1;";
auto b = binding::default_binding();
auto c = compiler::default_compiler(b);

auto out = c.compile(src);
if (out.errors.empty()) {
    printf("Success without error");
}
else {
    for (auto &err : out.errors)
        printf("%s\n", err.message.c_str());
}
```

Extending your code
----

### Extend functions

<div class="example">
Extend a function
</div>
```cpp
b.function(L"myadd", [](value &a, value &b){
    return a + b;
});
```
```ruby
// 5
print( myadd(1, 4) );
```

### Extend classes

<div class="example">
Extend a class
</div>
```cpp
class mymath : rkobject<mymath> {
public:
    static void import(binding &b) {
        auto type = type_builder(L"mymath");

        method(type, L"add", &mymath::add);

        b.add_type(type);
    }

    value add(value &a, value &b) {
        return a + b;
    }
}

b.import<mymath>();
```
```ruby
m = mymath.new();

// 5
print( m.add(1, 5) );
```


Embedding
----

<div class="example">
Run
</div>
```cpp
runner(*out.p, b).execute();
```

Reflection
----

<div class="example">
Extend a class
</div>
```cpp
```
