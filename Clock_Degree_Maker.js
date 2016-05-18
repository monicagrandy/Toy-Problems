//given an hour and minute input, calculate the angle of the two hands on an analog clock

var clockDegreeMaker = function(hour, minutes) {
  
  if (hour === 12) {
    hour = 0;
  }   
  var hoursDegrees = (hour * 30) + (minutes/2)  
  var minutesDegrees = 360/60 * minutes
  var angle = Math.abs(hoursDegrees - minutesDegrees)
  
  if(angle > 180){
    angle = 360 - angle
  }
  
  return angle
}