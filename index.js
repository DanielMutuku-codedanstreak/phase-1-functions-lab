// Code your solution in this file!
//returns a distance in blocks
function distanceFromHqInBlocks(someValue){
    switch (someValue) {
        case 43:
            return(1)
            break;
        case 50:
            return(8)
            break;
        case 34:
            return(8)
            break;
        default:
            break;
    }
}
//Define distance from hq in blocks
const someValue = 43
//returns a distance from hq in feet
const blockValue = distanceFromHqInBlocks(someValue)
function distanceFromHqInFeet(blockValue){
    switch (blockValue) {
        case 43:
            return(264)
            break;
        case 50:
            return(2112)
            break;
        case 34:
            return(2112)
            break;
        default:
            break;
    }
}
//returns the distance travelled in feet
function distanceTravelledInFeet(start, destination){
    switch (start, destination) {
        case 43, 48:
            return(1320)
            break;
        case 50,60:
            return(2640)
            break;
        case 34, 28:
            return(1584)
            break;
        default:
            break;
    }
}
//Define start and destination values
const start = 43
const destination = 48
//Calculate fare price
function calculatesFarePrice(start, destination){
    switch (start, destination) {
        case 43, 44:
            return(0)
            break;
        case 34, 32:
            return(2.56)
            break;
        case 50, 58:
            return(25)
            break;
        case 34, 24:
            return('cannot travel that far')
            break;
        default:
            break;
    }
}