String Interpolation
----

String literals enclosed with back-ticks(`) may include embedded expressions.

<div class="example">
String interpolation
</div>
```ruby
name = "jinwoo";
puts (`Hello, my name is {% raw %}{{name}}{% endraw %}.`);
```

<div class="callout callout--warning">
    <p><strong>Partially implemented</strong> Currently only `ident` expression can be accepted in interploation.</p>
</div>