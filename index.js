/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
module.exports.kidsWithCandies = (candies, extraCandies) => {
    const largestNumber = Math.max(...candies);
    let items = [];

    for (let i = 0; i < candies.length; i++) {
        items.push(candies[i] + extraCandies >= largestNumber)
    }

    return items;
};