const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here

  let sum = 0,
    segments = [],
    subSegment = [];

  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] <= n) {
      subSegment.push(arr[i]);
      sum += arr[i];
    } else {
      segments.push(subSegment);
      subSegment = [arr[i]];
      sum = arr[i];
    }
  }

  segments.push(subSegment);

  return segments;
};

// Do not change the code below
