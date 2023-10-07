
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
  // result() takes a second parameter, if not specified the first item in the array is used as the accumulator  
  console.log(
    "accumulator:", acc,
    "current value:", curr,
    "total:", acc + curr
  );
  return acc + curr;
});  //second parameter comes after the curly bracket
console.log(sum);


let sum2 = nums.reduce((acc, curr) => {
  // when the second parameter in result() is specified it is used as the accumulator
  console.log(
    "accumulator:", acc,
    "current value:", curr,
    "total:", acc + curr
  );
  return acc + curr;
}, 10);  //second parameter, in this case 10, comes after the curly bracket
console.log(sum2);




let sum3 = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum3);



const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property

let totalExperience = teamMembers.reduce((arr, curr) => arr + curr.yrsExperience, 0);
console.log(totalExperience);


// Grouping by a property, and totaling it too

let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {})
console.log(experienceByProfession);