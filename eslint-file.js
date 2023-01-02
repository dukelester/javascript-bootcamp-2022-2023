const number = '78';
console.log(number);

const length = 89;
console.log(length);
const nums = [34, 56, 89, 120, 12, 10];

const sortNumbers = (num1, num2) => {
  if (num1 <= num2) {
    return num2;
  }
  return num1;
};
console.log(nums.sort(sortNumbers));
