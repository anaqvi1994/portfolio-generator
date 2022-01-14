// console.log('hello node!');

// var message = `hello node`;
// var sum = 5+3;
// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const message = 'Hello Node!';
// message = 'Goodbye Node!';

// const sum = 5 + 3;
// sum += 1;

// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// const personObj = {
//   name: 'Asad',
//   age: 99
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';

// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
// };
// printProfileData(profileDataArgs);

// // Using function expression syntax
// const addNums = function(numOne, numTwo) {
//   return numOne + numTwo;
// };
// console.log(addNums);

// //Using new arrow function syntax
// const addNums = (numOne, numTwo) => {
//     return numOne + numTwo;
// };
// console.log(addNums);

// const printProfileData = profileDataArr => {
//   console.log(profileDataArr);
// };

// const addNums = (numOne, numTwo) => numOne + numTwo;
// console.log(addNums);
// const sum = addNums(5,3); //sum would be 8
// console.log(sum);

// const addNums = (numOne, numTwo) => {
//     console.log(numOne, numTwo);
//     return numOne + numTwo;
// };
// console.log(addNums);

// //Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//   for (let i = 0; i < profileDataArr.length; i++) {
//     console.log(profileDataArr[i]);
//   }
// };
// console.log(printProfileData);
// console.log(profileDataArr);

// let message = "Hello Node!";
// message = "Hello ES6!"
// let sum = 5+3;
// sum +=1;
// console.log(message);
// console.log(sum);

// const message = `hello node!`;
// if (true === true) {
//     const message = `hello es6!`;
//     let sum = 5;
//     sum += 10;
//     console.log(message);
//     console.log(sum);
// }

// console.log(message);
// console.log(sum);

// var is function-scoped, so redeclaring it in a block will cause its value outside the block to change as well:

// var one = 'one: declared outside the block';

// if (true === true) {
//   var one = 'one: declared inside the block'; // notice: we redeclare 'one' here
//   console.log(one); // prints 'one: declared inside the block'
// }

// console.log(one); // also prints 'one: declared inside the block', because the variable was redeclared in the 'if' block. The outer 'var' variable was therefore destroyed and replaced by inner var variable.

// // 'let' is block-scoped, so redeclaring a 'let' variable inside of a block creates a different 'let' variable with the same name whose scope is inside the block:

// let two = 'two: declared outside the block';

// if (true === true) {
//   let two = 'two: declared inside the block';
//   console.log(two); // prints 'two: declared inside the block'
// }

// console.log(two); // prints 'two: declared outside the block', because two declared inside the block is a separate variable. The 'let' variables are unrelated and therefore are unaffected by each other.

// var is function-scoped, so changing its value in a block causes its value in the outer environment to change as well:

// var three = 'three: declared outside the block';

// if (true === true) {
//   three = 'three: changed inside the block'; // notice: we don't redeclare
//   console.log(three); // prints 'three: changed inside the block'
// }

// console.log(three); // also prints 'three: changed inside the block', because the variable has function scope. This means that the value change in the block is reflected throughout the function, i.e., outside the block.

// let is block-scoped, so changing its value in a block does change its value outside the block _if_ the variable is not redeclared in the block:

// let four = 'four: outside the block';

// if (true === true) {
//   four = 'four: inside the block'; // notice: we don't redeclare the variable
//   console.log(four); // prints 'four: inside the block'
// }

// console.log(four); // prints 'four: inside the block', because we didn't redeclare the variable inside the block. That meant we referenced the variable outside the block, and we therefore changed it.

// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach((profileItem) => {
//     console.log(profileItem)
//   });
// };

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const generatePage = () => "Name: Asad, Github: anaqvi1994";
// console.log(generatePage());

// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage(`Asad`, `anaqvi1994`));



// const profileDataArgs = process.argv.slice(2);
// const [name, github] = profileDataArgs;

const inquirer = require ('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);
// fs.writeFile('./index.html', generatePage(name, github), err => {
//   if (err) throw new Error(err);
//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please enter your name!');
              return false;
          }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
      validate: githubInput => {
          if (githubInput) {
              return true;
          } else {
              console.log('Please enter your GitHub Username!');
              return false;
          }
      }
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ]);
};

const promptProject = portfolioData => {
    if (!portfolioData.projects){
        portfolioData.projects = [];
    }
    console.log(`
=================
Add a New Project
=================
`);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: descriptionInput => {
          if (descriptionInput) {
              return true;
          } else {
              console.log('Please describe your project!');
              return false;
          }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)',
      validate: linkInput => {
          if (linkInput) {
              return true;
          } else {
              console.log('Please add your GitHub link!');
              return false;
          }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ]);
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });