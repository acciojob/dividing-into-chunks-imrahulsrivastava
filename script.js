const divide = (array, n) => {
  // Write your code here

  let arr = array.split(" ").map(Number);

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
  let subSegment = [];
  let sum = 0;
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

const arr = prompt("Enter an array of numbers which are space separated: ");
const n = parseInt(prompt("Enter n: "));

alert(JSON.stringify(divide(arr, n)));
