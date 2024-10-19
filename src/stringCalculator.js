function add(numbers) {
  // Check for empty string
  if (numbers === "") {
      return 0;
  }

  let numArray;

  if (numbers.startsWith("//")) {
      const delimiterSection = numbers.slice(2).split("\n")[0];
      const delimiters = delimiterSection.match(/(\[.*?\])/g) ? 
          delimiterSection.match(/(\[.*?\])/g).map(d => d.slice(1, -1)) : 
          [delimiterSection];
      const regex = new RegExp(delimiters.join('|'), 'g');
      numArray = numbers.slice(delimiterSection.length + 3).split(regex);
  } else {
      numArray = numbers.split(/[,|\n]/);
  }

  // Check for negative numbers and calculate sum
  const negatives = [];
  const sum = numArray.reduce((acc, num) => {
      const number = Number(num);
      if (number < 0) {
          negatives.push(number);
      }
      // Only add numbers less than or equal to 1000 to the sum
      if (number <= 1000) {
          acc += number;
      }
      return acc;
  }, 0);

  // Throw error if there are negative numbers
  if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return sum; // Return the final sum
}

module.exports = { add };
