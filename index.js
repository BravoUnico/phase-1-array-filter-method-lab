function findMatching(drivers, name) {
     return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch( drivers, match) {
    return drivers.filter(driver => driver.substring(0,2) === match  ) 
    
}

let matchName = function(drivers, match) {
    return drivers.filter((driver) => match ===driver.name )
}