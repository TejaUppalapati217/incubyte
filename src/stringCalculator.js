function add(numbers) {
  // Check for empty string
  if (numbers === "") {
      return 0;
  }

  // Split the numbers based on commas or new lines
  let numArray;
  if (numbers.startsWith("//")) {
      const [delimiter, numString] = numbers.slice(2).split("\n");
      numArray = numString.split(delimiter);
  } else {
      numArray = numbers.split(/[,|\n]/);
  }

  // Check for negative numbers
  const negatives = [];
  const sum = numArray.reduce((acc, num) => {
      const number = Number(num);
      if (number < 0) {
          negatives.push(number);
      }
      return acc + number;
  }, 0);

  // Throw error if there are negative numbers
  if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return sum; // Ensure we return the calculated sum
}

module.exports = { add };
