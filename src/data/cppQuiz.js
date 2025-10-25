// data/cppQuiz.js
export const cppQuiz = [
  {
    question: "Who created C++?",
    options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Anders Hejlsberg"],
    answer: 1
  },
  {
    question: "Which file extension is used for C++ source files?",
    options: [".cpp", ".cs", ".java", ".py"],
    answer: 0
  },
  {
    question: "Which operator is used to access members of a pointer to an object?",
    options: [".", "->", "::", "%"],
    answer: 1
  },
  {
    question: "What does STL stand for?",
    options: ["Standard Type Library", "Simple Template Library", "Standard Template Library", "System Tools Library"],
    answer: 2
  },
  {
    question: "Which of the following is NOT a container in STL?",
    options: ["vector", "map", "sort", "set"],
    answer: 2
  },
  {
    question: "How do you write a single-line comment in C++?",
    options: ["/* comment */", "// comment", "# comment", "<!-- comment -->"],
    answer: 1
  },
  {
    question: "Which keyword is used to define a class in C++?",
    options: ["struct", "class", "object", "module"],
    answer: 1
  },
  {
    question: "What is the correct way to declare a constant?",
    options: ["const int x = 5;", "int const x;", "Both A and B", "let x = 5;"],
    answer: 2
  },
  {
    question: "Which header is required for input/output streams?",
    options: ["<stdio.h>", "<iostream>", "<stream.h>", "<io.h>"],
    answer: 1
  },
  {
    question: "What does `new` do in C++?",
    options: ["Allocate memory on heap", "Declare a variable", "Free memory", "Create a macro"],
    answer: 0
  },
  {
    question: "What is RAII in C++?",
    options: [
      "Resource Acquisition Is Initialization",
      "Random Access Is Immutable",
      "Runtime Allocation Is Immediate",
      "Read-After-Initialization"
    ],
    answer: 0
  },
  {
    question: "Which container provides O(1) average time for push/pop at the end?",
    options: ["list", "vector", "map", "set"],
    answer: 1
  },
  {
    question: "Which keyword allows function overloading resolution at runtime via virtual dispatch?",
    options: ["virtual", "override", "dynamic", "static"],
    answer: 0
  },
  {
    question: "What does `std::` represent?",
    options: ["A macro", "The standard namespace", "A class template", "A function library"],
    answer: 1
  },
  {
    question: "Which container stores elements in key-value pairs?",
    options: ["vector", "deque", "map", "stack"],
    answer: 2
  },
  {
    question: "Which operator is for scope resolution?",
    options: ["::", "->", ".", ":"],
    answer: 0
  },
  {
    question: "What is the default access specifier for class members?",
    options: ["public", "private", "protected", "internal"],
    answer: 1
  },
  {
    question: "Which C++ feature eliminates the need for manual memory management?",
    options: ["Pointers", "Smart pointers (e.g. unique_ptr)", "malloc/free", "goto"],
    answer: 1
  },
  {
    question: "Which function is the entry point of a C++ program?",
    options: ["start()", "main()", "init()", "run()"],
    answer: 1
  },
  {
    question: "What does `constexpr` indicate?",
    options: ["A variable stored on heap", "A compile-time constant", "A runtime constant", "A deprecated feature"],
    answer: 1
  },
  {
    question: "Which is used for exception handling in C++?",
    options: ["try/catch/throw", "if/else", "switch/case", "goto/label"],
    answer: 0
  },
  {
    question: "Which algorithm header provides sort?",
    options: ["<vector>", "<algorithm>", "<sort>", "<utility>"],
    answer: 1
  },
  {
    question: "What does `auto` do in C++11 and later?",
    options: [
      "Creates an automatic variable that is local to function",
      "Infers the variable type from initializer",
      "Declares a global variable",
      "Marks a function as automatic"
    ],
    answer: 1
  },
  {
    question: "Which cast is the safest for downcasting polymorphic types?",
    options: ["static_cast", "reinterpret_cast", "const_cast", "dynamic_cast"],
    answer: 3
  },
  {
    question: "What is the typical complexity of accessing an element by index in std::vector?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: 0
  },
  {
    question: "Which C++ standard introduced move semantics?",
    options: ["C++98", "C++03", "C++11", "C++17"],
    answer: 2
  },
  {
    question: "What does `mutable` allow you to do?",
    options: [
      "Change a member inside const methods",
      "Make a method mutable at runtime",
      "Allow multiple inheritance",
      "Mark a class as mutable"
    ],
    answer: 0
  },
  {
    question: "Which of these is NOT a smart pointer?",
    options: ["unique_ptr", "shared_ptr", "weak_ptr", "raw_ptr"],
    answer: 3
  },
  {
    question: "Which keyword prevents a function from being overridden in derived classes?",
    options: ["sealed", "final", "nooverride", "stop"],
    answer: 1
  },
  {
    question: "What is the purpose of `std::move`?",
    options: [
      "Copy an object",
      "Indicate that an object may be moved from",
      "Lock an object for threading",
      "Convert to rvalue reference permanently"
    ],
    answer: 1
  }
];
