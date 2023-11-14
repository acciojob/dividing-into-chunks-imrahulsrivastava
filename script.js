const divide = (arr, n) => {
  // Write your code here

  const segments = [];
  let i = 0;

  while (i < arr.length) {
    const temp = subSegment(arr, i, n);
    segments.push(temp);
    i += temp.length;
  }

  return segments;
};

const subSegment = (arr, index, maxSum) => {
  let subSegment = [],
    sum = 0;
  subSegment.push(arr[index]);
  sum += arr[index];
  index++;

  while (index < arr.length && sum + arr[index] <= maxSum) {
    subSegment.push(arr[index]);
    sum += arr[index];
    index++;
    if (sum === maxSum) break;
  }

  return subSegment;
};

// Do not change the code below

let str = prompt(
  "Enter an array of numbers which are space separated: "
).trim();
const n = parseInt(prompt("Enter n: "));

const arr = str.split(" ").map(Number);
alert(JSON.stringify(divide(arr, n)));
