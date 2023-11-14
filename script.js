const divide = (array, n) => {
  const segments = [];
  let i = 0;

  while (i < array.length) {
    const temp = subSegment(array, i, n);
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
arr = arr.split(" ").map(Number);
const n = parseInt(prompt("Enter n: "));

alert(JSON.stringify(divide(arr, n)));
