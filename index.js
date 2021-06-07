const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(factor){
    return function(fare){
        return fare*factor
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(drivers, choice){
    switch (choice){
        case returnFirstTwoDrivers:
            return returnFirstTwoDrivers(drivers)
        case returnLastTwoDrivers:
            return returnLastTwoDrivers(drivers)
    }
}