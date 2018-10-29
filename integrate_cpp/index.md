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
b.function(L"myadd", [](value_cref a, value_cref b){
    return a + b;
});
```
```ruby
// 5
print( myadd(1, 4) );
```

Please remember that `value_cref` means __const value &__. Every parameter is immutable.

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

    value add(value_cref a, value_cref b) {
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

Conversion between Rookie and C++
----

<div class="example">
Primitive type conversion
</div>
```cpp
int   cpp_v = rk2int(v);
value rk_v  = int2rk(1234);
```

<div class="example">
Object conversion
</div>
```cpp
rkstring cpp_v = rk2obj(v, rkstring*);
value    rk_v  = obj2rk(cpp_v, string);
```

|TYPE        |Rookie → C++  |C++ → Rookie  |
|------------|--------------|--------------|
|integer     |rk2int        |int2rk        |
|std::string |rk2str        |str2rk        |
|wchar_t*    |rk2cstr       |cstr2rk       |
|object      |rk2ptr        |ptr2rk        |

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

### Compile time reflection

`astr` class provides __AST__ level reflection methods.

<div class="example">
Reflection
</div>
```cpp
for (auto &method : astr::all_methods(root))
    printf("%S\n", method.name.c_str());
```
