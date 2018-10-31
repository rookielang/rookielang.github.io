var presets = {
    fibo: `// Find more examples at 'PLAYGROUND'
class example_fibo {
    @main
    static def main() {
        person = {
            name  : "Jinwoo",
            age   : 24,
            hobby : ["Game", "AVR", "eBay"]
        };

        for (k, v in person) {
            puts(``{{k}}: {{v}}``);
        }
    }
}`,

    string: `class example_string {
    @main
    static def main() {
        a = "hello ";
        b = "world!";
        hello_world = a.append(b);

        for (i=0;i<hello_world.length();i++)
            print(hello_world[i]);
    }
}`,


    object: `class example_object {
    @main
    static def main() {
        f = foo.new();
        f.v = 1234;
        f.say_hello();

        f = foo.new();
        f.v = 5678;
        f.say_hello();
    }
}

class foo {
    def say_hello() {
        hello = "hello";

        for (i=0;i<hello.length();i++)
            print(hello[i]);

        print(this.v);
    }
}
`

}

var change_example = function(id) {
    editor.setValue(presets[id], -1);
}