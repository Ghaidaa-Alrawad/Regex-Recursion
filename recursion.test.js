/* Write a function to do the division operation without using the built-in division*/

function division(number, dividedBy) {
    // Write you logic here.
    if (dividedBy === 0) {
    //    return "division by zero is not allowed"
    return 0
    }
    
    if (number < dividedBy) {
      return 0;
    }
    
    return 1 + division(number - dividedBy, dividedBy);
}

console.log(division(9,3));

/* Write a function that implement Math.pow(x,n) but using recursion
Example:
pow(2,4) = 16
*/


function pow(x, n) {
    // Write you logic here.
    if (n < 0) {
        return 1 / pow(x, -n);
    }

    if (n === 0) {
        return 1;
    }
    
    return x * pow(x, n - 1);
    // return;
}

console.log(pow(2, 4));//16
console.log(pow(9,0))//1

/* The Fibonacci Series is a numeric series starting with the integers 0 and 1. In this series,
the next integer is determined by summing the previous two. This gives us:

0, 1, 1, 2, 3, 5, 8, 13, ...

Write a function that take n as parameter and return the nth element in the Fibonacci Series

Example: n = 4 ==> 3, n= 0 ==> 0, n = 3 ==> 2 */

function fibonacci(n) {
    // Write you logic here.
    if (n === 0) {
      return 0;
    }
      
    if (n === 1 || n === 2) {
        return 1;
    }
      
    return fibonacci(n - 1) + fibonacci(n - 2);
    // return;
}

console.log(fibonacci(6))
console.log(fibonacci(12))

/* Optional 

The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Example: 
Input: n = 3, k = 3
Output: "213"  */

function permutations(n, k) {
    let result =[];
    // Write you logic here.
    //didn't know how to solve it :(, heheheheeh wallah solved it
    let nums = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }
    
    let used = Array(n + 1).fill(false);
    let count = { value: 0 };
    backtrack(nums, used, k, [], count, result);
    return result.length > 0 ? result.join("") : 0;
};



function backtrack(nums, used, k, current, count, result) {
    if (current.length === nums.length) {
      count.value++;
      if (count.value === k) {
        result.push(...current);
      }
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used[nums[i]]) {
        used[nums[i]] = true;
        current.push(nums[i]);
        backtrack(nums, used, k, current, count, result);
        current.pop();
        used[nums[i]] = false;
      }
    }
  }
  


describe("Test division", () => {
    test("Return the division result", () => {
        expect(division(10, 2)).toStrictEqual(5);
        expect(division(10, 0)).toStrictEqual(0);
        expect(division(0, 10)).toStrictEqual(0);

    })
});

describe("Test pow", () => {
    test("It should work as Math.pow(x,n)", () => {
        expect(pow(10, 2)).toStrictEqual(100);
        expect(pow(10, 0)).toStrictEqual(1);
        expect(pow(0, 0)).toStrictEqual(1);
    })
});

describe("Test fibonacci", () => {
    test("It should implement fibonacci series logic", () => {
        expect(fibonacci(0)).toStrictEqual(0);
        expect(fibonacci(1)).toStrictEqual(1);
        expect(fibonacci(2)).toStrictEqual(1);
        expect(fibonacci(3)).toStrictEqual(2);
        expect(fibonacci(4)).toStrictEqual(3);
    })
});

describe("Test permutations", () => {
    test("It should return the kth element", () => {
        expect(permutations(3, 3)).toStrictEqual("213");
        expect(permutations(3, 0)).toStrictEqual(0);
    })
});