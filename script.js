const divide = (array, n) => {
  // Write your code here

  n = parseInt(n);

  let segment = [],
    i = 0;

  while (i < arr.length) {
    let temp = subArray(arr, i, n);
    segment.push(temp[0]);
    i = temp[1];
  }

  return segment;
};

function subArray(arr, index, maxSum) {
  let subArray = [],
    sum = 0;

  while (index < arr.length) {
    if (arr[index] + sum > maxSum) {
      break;
    }
    subArray.push(arr[index]);
    sum += arr[index];
    index++;
  }

  return [subArray, index];
}

const arr = prompt("Enter an array of numbers which are space separated: ");
const n = parseInt(prompt("Enter n: "));

alert(JSON.stringify(divide(arr, n)));
