// Code your solution in this file!
//returns a distance in blocks
function distanceFromHqInBlocks(someValue){
    const hqBlock = 42
    let diffBlock = Math.abs(hqBlock - someValue)//calculate number of blocks
    return(diffBlock)
}
//Define distance from hq in blocks
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)
//returns a distance from hq in feet
function distanceFromHqInFeet(someValue){
    const hqBlock = 42
    let diffBlock = Math.abs(hqBlock - someValue)//calculate number of blocks
    const blockFeet = (diffBlock * 264)//calculate feet value
    return blockFeet
}
//returns the distance travelled in feet
function distanceTravelledInFeet(start, destination){
    let travelPassenger = Math.abs(start - destination)//calculate travel in blocks
    let travelPassengerFeet = (travelPassenger * 264)
    return travelPassengerFeet
}
//Define start and destination values
distanceTravelledInFeet(43, 48)
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)
//Calculate fare price
function calculatesFarePrice(start, destination){
    const blockDistance = Math.abs(start -destination)
    const feetDistance = (blockDistance * 264)
    const distancePay = (feetDistance - 400)
    let fare;
    if(feetDistance <= 400 && feetDistance >= 0){
        fare = 0 
        return fare
    }else if(feetDistance > 400 && feetDistance <= 2000){
        fare = (distancePay * 0.02)
        return fare
    }else if(feetDistance > 2000 && feetDistance < 2500){
        fare = 25
        return fare
    }else{
        return('cannot travel that far')
    }
}
calculatesFarePrice(43, 44)
calculatesFarePrice(34, 32)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 24)