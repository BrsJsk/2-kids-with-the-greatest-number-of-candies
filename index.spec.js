const {kidsWithCandies} = require('./index');

test('test case 1', () => {
    const candies = [4, 2, 1, 1, 2];
    const extraCandies = 1

    const expectedResult = [true, false, false, false, false];

    expect(kidsWithCandies(candies, extraCandies)).toStrictEqual(expectedResult);
})

test('test case 2', () => {
    const candies = [2,3,5,1,3];
    const extraCandies = 3

    const expectedResult = [true,true,true,false,true];

    expect(kidsWithCandies(candies, extraCandies)).toStrictEqual(expectedResult);
});

test('test case 3', () => {
    const candies = [12,1,12];
    const extraCandies = 10;

    const expectedResult = [true,false,true];

    expect(kidsWithCandies(candies, extraCandies)).toStrictEqual(expectedResult);
});


