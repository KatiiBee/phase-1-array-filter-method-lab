// Code your solution here

function findMatching(drivers, string){
    return drivers.filter (function(driver){
        return driver.toUpperCase() === string.toUpperCase()
    })
}

const fuzzyMatch = (drivers, string) =>{
    return drivers.filter (driver => driver.startsWith(string))
}

function matchName (drivers, string){
    const result = drivers.filter(driver=>driver.name === string)
    return result
}