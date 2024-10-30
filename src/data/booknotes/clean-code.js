// src/data/booknotes/clean-code.js
export default {
  title: "Clean Code",
  author: "Robert C. Martin",
  date: "June 15, 2023",
  content: `
    <h2 id="introduction" class="text-2xl font-bold mb-4 mt-8">Introduction</h2>
    <p class="mb-6 leading-relaxed">
      "Clean Code: A Handbook of Agile Software Craftsmanship" by Robert C. Martin is a seminal work in the field of software development. It emphasizes the importance of writing code that is not just functional, but also readable, maintainable, and elegant. This book has profoundly influenced my approach to coding and software design, offering insights that have transformed the way I think about and write code.
    </p>

    <h2 id="key-principles" class="text-2xl font-bold mb-4 mt-12">Key Principles</h2>
    <p class="mb-4 leading-relaxed">
      The book outlines several key principles for writing clean code, each of which contributes to creating software that is easier to understand, maintain, and extend:
    </p>
    <ul class="list-disc pl-6 mb-6 space-y-3">
      <li><strong class="text-gray-800">Meaningful Names:</strong> Choose clear and intention-revealing names for variables, functions, and classes. Good names act as self-documentation.</li>
      <li><strong class="text-gray-800">Functions:</strong> Keep functions small and focused on doing one thing well. This promotes reusability and makes code easier to test and understand.</li>
      <li><strong class="text-gray-800">Comments:</strong> Strive to make your code self-explanatory, using comments only when necessary to clarify intent or complex algorithms. Good code should speak for itself.</li>
      <li><strong class="text-gray-800">Formatting:</strong> Maintain consistent formatting to improve code readability. Consistent style makes it easier for others (and your future self) to navigate the codebase.</li>
      <li><strong class="text-gray-800">Objects and Data Structures:</strong> Use objects to hide internal structure and expose behavior, not data. This promotes encapsulation and reduces dependencies.</li>
      <li><strong class="text-gray-800">Error Handling:</strong> Handle errors gracefully and informatively. Proper error handling improves the robustness and reliability of your code.</li>
      <li><strong class="text-gray-800">Boundaries:</strong> Keep code at boundaries (like third-party APIs) clean and well-tested. This makes it easier to adapt to changes in external dependencies.</li>
      <li><strong class="text-gray-800">Unit Tests:</strong> Write clean, readable, and maintainable tests. Good tests serve as documentation and enable confident refactoring.</li>
    </ul>

    <h2 id="meaningful-names" class="text-2xl font-bold mb-4 mt-12">Meaningful Names</h2>
    <p class="mb-4 leading-relaxed">
      One of the most impactful lessons from the book is the importance of choosing good names. Martin argues that names should be:
    </p>
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>Intention-revealing</li>
      <li>Avoiding disinformation</li>
      <li>Making meaningful distinctions</li>
      <li>Pronounceable</li>
      <li>Searchable</li>
    </ul>
    <p class="mb-6 leading-relaxed">
      He provides examples of how poor naming can lead to confusion and bugs, while good naming can make code self-documenting. For instance, instead of using a name like 'dTV' for a variable, which is cryptic and uninformative, we should use a more descriptive name like 'daysToValidate' or 'daysToVerify'. This immediately conveys the purpose of the variable to anyone reading the code.
    </p>

    <h2 id="functions" class="text-2xl font-bold mb-4 mt-12">Functions</h2>
    <p class="mb-4 leading-relaxed">
      Martin emphasizes that functions should be small and do one thing. He suggests that functions should rarely be more than 20 lines long, and should have a single, clear purpose. This principle has dramatically changed how I structure my code.
    </p>
    <p class="mb-4 leading-relaxed">
      The book introduces the concept of function extraction, where larger functions are broken down into smaller, more focused functions. This approach offers several benefits:
    </p>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Improved readability: Smaller functions are easier to understand at a glance.</li>
      <li>Better testability: Focused functions are easier to test in isolation.</li>
      <li>Increased reusability: Small, single-purpose functions are more likely to be reusable in different contexts.</li>
      <li>Easier maintenance: When each function does one thing, it's easier to modify or replace that functionality without affecting other parts of the code.</li>
    </ul>
    <p class="mb-6 leading-relaxed">
      By adhering to these principles, we create code that is not just functional, but also a pleasure to read and work with. Clean code becomes its own form of documentation, making it easier for developers (including our future selves) to understand and maintain the codebase over time.
    </p>
  `,
};
