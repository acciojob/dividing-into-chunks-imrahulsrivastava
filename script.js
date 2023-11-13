const divide = (array, n) => {
  // Write your code here

  let arr = array.split(" ").map(Number);

  let segment = [],
    i = 0;

  while (i < arr.length) {

    let subSegment = [],
      sum = 0;

    while (i < arr.length && sum < n) {

      if (arr[i] + sum <= n) {
        subSegment.push(arr[i]);
        sum += arr[i];
      } else if (arr[i] > n) {
        subSegment.push(arr[i]);
        break;
      } else if (arr[i] + sum > n) {
        break;
      }

      i++;

      if (sum === n) {
        break;
      }
    }

    segment.push(subSegment);
    i++;
  }

  return segment;
};

const arr = prompt("Enter an array of numbers which are space separated: ");
const n = parseInt(prompt("Enter n: "));

alert(JSON.stringify(divide(arr, n)));
