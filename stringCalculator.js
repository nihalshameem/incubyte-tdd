const add = (numbers) => {
    if (numbers === "") return 0;
    const normalized = numbers.replace(/\n/g, ",");
    const numArray = normalized.split(",").map((num) => parseInt(num, 10));
    return numArray.reduce((sum, num) => sum + num, 0);
};

module.exports = add;
