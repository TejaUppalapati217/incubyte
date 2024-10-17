function add(numbers) {
  if (numbers.startsWith("//")) {
      const [delimiter, nums] = numbers.slice(2).split('\n');
      return nums.split(delimiter).reduce((sum, num) => sum + parseInt(num), 0);
  }
  if (numbers === "") {
      return 0;
  }
  return numbers.split(/[\n,]/).reduce((sum, num) => sum + parseInt(num), 0);
}
