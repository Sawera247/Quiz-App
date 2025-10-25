// data/jsQuiz.js
export const jsQuiz = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<scripting>", "<javascript>", "<script>"],
    answer: 3
  },
  {
    question: "What is the correct syntax for referring to an external script?",
    options: [
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    answer: 0
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    options: [
      "Both the <head> and <body> section",
      "The <head> section only",
      "The <body> section only",
      "Before the <html> tag"
    ],
    answer: 0
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "alert('Hello World');",
      "msgBox('Hello World');",
      "msg('Hello World');",
      "alertBox('Hello World');"
    ],
    answer: 0
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "def myFunction()",
      "create myFunction()"
    ],
    answer: 1
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: [
      "call myFunction()",
      "call function myFunction()",
      "myFunction()",
      "run myFunction()"
    ],
    answer: 2
  },
  {
    question: "How to write an IF statement in JavaScript?",
    options: [
      "if i = 5 then",
      "if (i == 5)",
      "if i == 5 then",
      "if i = 5"
    ],
    answer: 1
  },
  {
    question: "How does a WHILE loop start?",
    options: [
      "while (i <= 10; i++)",
      "while i = 1 to 10",
      "while (i <= 10)",
      "loop while i <= 10"
    ],
    answer: 2
  },
  {
    question: "How can you add a comment in JavaScript?",
    options: [
      "'This is a comment",
      "// This is a comment",
      "<!-- This is a comment -->",
      "# This is a comment"
    ],
    answer: 1
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["x", "-", "=", "*"],
    answer: 2
  },
  {
    question: "What will `typeof null` return?",
    options: ["'null'", "'object'", "'undefined'", "'string'"],
    answer: 1
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = (1:'red', 2:'green')",
      "var colors = ['red', 'green']",
      "var colors = 'red', 'green'",
      "var colors = {red, green}"
    ],
    answer: 1
  },
  {
    question: "How do you round the number 7.25 to the nearest integer?",
    options: [
      "Math.rnd(7.25)",
      "round(7.25)",
      "Math.round(7.25)",
      "rnd(7.25)"
    ],
    answer: 2
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    options: [
      "top(x, y)",
      "Math.ceil(x, y)",
      "Math.max(x, y)",
      "Math.high(x, y)"
    ],
    answer: 2
  },
  {
    question: "Which event occurs when the user clicks an HTML element?",
    options: ["onmouseclick", "onchange", "onclick", "onmouseover"],
    answer: 2
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: [
      "v carName;",
      "variable carName;",
      "var carName;",
      "dim carName;"
    ],
    answer: 2
  },
  {
    question: "What is the correct JavaScript syntax to change content of this HTML: <p id='demo'>?",
    options: [
      "document.getElement('p').innerHTML = 'Hello';",
      "document.getElementById('demo').innerHTML = 'Hello';",
      "#demo.innerHTML = 'Hello';",
      "getElement('demo').innerHTML = 'Hello';"
    ],
    answer: 1
  },
  {
    question: "How do you write a JavaScript object?",
    options: [
      "var obj = {name:'Ali', age:20}",
      "var obj = (name:'Ali', age:20)",
      "var obj = ['name','Ali','age',20]",
      "var obj = name='Ali', age=20"
    ],
    answer: 0
  },
  {
    question: "Which operator is used to compare values and type?",
    options: ["==", "===", "!=", "="],
    answer: 1
  },
  {
    question: "Which keyword is used to create a class in JavaScript?",
    options: ["object", "function", "class", "method"],
    answer: 2
  },
  {
    question: "Which method converts JSON to a JavaScript object?",
    options: [
      "JSON.convert()",
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.toObject()"
    ],
    answer: 1
  },
  {
    question: "Which symbol is used for comments in multi-line?",
    options: [
      "// comment //",
      "# comment",
      "/* comment */",
      "<!-- comment -->"
    ],
    answer: 2
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Desktop Oriented Mode",
      "Digital Object Model"
    ],
    answer: 0
  },
  {
    question: "Which built-in method joins array elements into a string?",
    options: ["concat()", "join()", "pop()", "push()"],
    answer: 1
  },
  {
    question: "Which keyword is used to define a constant?",
    options: ["const", "constant", "var", "let"],
    answer: 0
  },
  {
    question: "Which function converts a string to an integer?",
    options: ["parseInt()", "int()", "Number()", "toInt()"],
    answer: 0
  },
  {
    question: "What does 'this' keyword refer to in an object method?",
    options: [
      "The method itself",
      "The object it belongs to",
      "The parent class",
      "The global scope"
    ],
    answer: 1
  },
  {
    question: "What is the output of '2' + 2 in JavaScript?",
    options: ["4", "22", "Error", "NaN"],
    answer: 1
  },
  {
    question: "How do you write an arrow function in JavaScript?",
    options: [
      "() => {}",
      "function => {}",
      "=> function() {}",
      "function() -> {}"
    ],
    answer: 0
  },
  {
    question: "Which method removes the last element from an array?",
    options: ["shift()", "pop()", "slice()", "splice()"],
    answer: 1
  }
];
