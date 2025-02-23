# Incubyte TDD Project

This project is a demonstration of Test-Driven Development (TDD) practices using Node.js.

## Project Structure

- `stringCalculator.js`: Contains the implementation of the string calculator.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `README.md`: Project documentation.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/incubyte-tdd.git
    cd incubyte-tdd
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

To use the string calculator, you can import the `add` function from [stringCalculator.js](http://_vscodecontentref_/1):

```javascript
const add = require('./stringCalculator');

console.log(add("1,2,3")); // Output: 6