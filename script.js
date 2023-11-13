const divide = (array, n) => {
  let arr = array.split(" ").map(Number);
  n = parseInt(n);

  let segment = [],
    temp = [],
    sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] > n) {
      segment.push(temp);
      temp = [];
      sum = 0;
    }

    sum += arr[i];
    temp.push(arr[i]);
  }

  if (temp.length > 0) {
    segment.push(temp);
  }

  return segment;
};

const arr = prompt("Enter an array of numbers which are space separated: ");
const n = parseInt(prompt("Enter n: "));

alert(JSON.stringify(divide(arr, n)));
