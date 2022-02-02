// Code your solution in this file!
const returnFirstTwoDrivers = array => {
    const newArray = array.slice(0, 2);
    return newArray;
}

const returnLastTwoDrivers = array => {
    const newArray = array.slice(array.length - 2);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = num => function(fare){
    return fare * num;
}

const fareDoubler = fare => fare * 2;

const fareTripler = fare => fare * 3;

const selectDifferentDrivers = (drivers, functionPassed) => {
    return functionPassed(drivers);
}