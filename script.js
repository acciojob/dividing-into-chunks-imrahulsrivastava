const arr = [1, 2, 3, 4, 1, 0, 2, 2];

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

