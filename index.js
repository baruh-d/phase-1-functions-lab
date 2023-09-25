// Code your solution in this file!
function distanceFromHqInBlocks(distanceCovered) {
    //returns the number of blocks given a value
    let distanceInBlocks;
    if (distanceCovered >= 42) {
      distanceInBlocks = distanceCovered - 42;
    } else 
        distanceInBlocks = 42 - distanceCovered;
  
    return distanceInBlocks;
}
  
function distanceFromHqInFeet(distanceCovered) {
 //returns the number of blocks given a value
    let distanceInFeet;
    if (distanceCovered >= 42) {
      distanceInFeet = distanceFromHqInBlocks(distanceCovered) * 264;
    } else 
        distanceInFeet = distanceFromHqInBlocks(distanceCovered) * 264;
  
    return distanceInFeet;
}
  
function distanceTravelledInFeet(start, end) {
    let feetTravelled = distanceFromHqInFeet(end) - distanceFromHqInFeet(start);
  
    return feetTravelled;
}
  
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distanceTravelled = distanceTravelledInFeet(start, destination);
    let ans;
    if (distanceTravelled < 400) {
      ans = 0;
    } else if (distanceTravelled > 400 && distanceTravelled < 2000) {
      let f = distanceTravelled - 400;
  
      ans = f * 0.02;
    } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
      ans = 25;
    } else {
      ans = "cannot travel that far";
    }
    return ans;
  }