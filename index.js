// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

// Function to return the last two drivers from the passed-in array
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

// Array containing two functions: returnFirstTwoDrivers and returnLastTwoDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to create a fare multiplier function
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

// Function to double the fare
const fareDoubler = createFareMultiplier(2);

// Function to triple the fare
const fareTripler = createFareMultiplier(3);

// Function to select different drivers based on the provided function
function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}