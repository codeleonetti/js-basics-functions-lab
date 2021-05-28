// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  // need to figure out distance  264 feet for 1 block
   return Math.abs(block - 42);

}

function distanceFromHqInFeet(block){
    //return distanceFromHqInBlocks(block) * 264;
    return distanceTravelledInFeet(block, 42)
    
}

function distanceTravelledInFeet(start, end){
    return Math.abs(start - end) * 264;  
}



function calculatesFarePrice(start, end){
    let feetTravelled = distanceTravelledInFeet(start, end);
    let chargeableFeet = feetTravelled - 400;
    if (feetTravelled <= 400)
    {
        return 0;
    }
    else if (feetTravelled <= 2000 )
    {
        return .02 * chargeableFeet;
    }
    else if (feetTravelled <= 2500)
    {
        return 25;
    }
    else
    {
        return "cannot travel that far"
    }

    
}
