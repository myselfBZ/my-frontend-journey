export const data = [
    {
      id: "1",
      question: "What are the key differences between functional and object-oriented programming paradigms?",
      answer: "Functional programming emphasizes the use of pure functions, immutability, and statelessness, while object-oriented programming is centered around encapsulating data and behavior into objects. In functional programming, state changes are avoided, whereas in OOP, managing and modifying state through methods is common."
    },
    {
      id: "2",
      question: "How does JavaScript's event loop work in the context of asynchronous programming?",
      answer: "JavaScript uses a single-threaded event loop to handle asynchronous operations. When an asynchronous task like a setTimeout or fetch request is triggered, it is moved to the task queue and executed only after the call stack is clear. The event loop constantly checks the call stack and the task queue to decide what to execute next, allowing JavaScript to perform non-blocking I/O."
    },
    {
      id: "3",
      question: "What are the benefits of using a component-based architecture in modern frontend frameworks like React?",
      answer: "Component-based architecture promotes modularity, reusability, and maintainability in frontend development. By breaking the UI into isolated, self-contained pieces, developers can build complex interfaces more easily, manage state at a granular level, and reuse components across multiple parts of an application or even in different projects."
    },
    {
      id: "4",
      question: "Why is indexing important in relational databases and how does it affect query performance?",
      answer: "Indexing improves the speed of data retrieval operations by allowing the database to find rows faster without scanning the entire table. It works like a lookup table for the database engine. However, excessive indexing can slow down write operations like INSERT and UPDATE, since indexes need to be updated whenever the underlying data changes."
    }
]