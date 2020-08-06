/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
module.exports.kidsWithCandies = (candies, extraCandies) => {
    const largestNumber = Math.max(...candies);

    return candies.map(candie => candie + extraCandies >= largestNumber);
};