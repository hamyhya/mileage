var time, distance1, distance2, distance3, finalDistance
function diff_hours(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime())/ 1000;
  
  return Math.abs(diff);
  
 }


dt1 = new Date("October 13, 2014 08:10:00");
dt2 = new Date("October 13, 2014 08:20:00");
time = diff_hours(dt1, dt2)
console.log(time)
if(time >= 0){
    distance1 = 6 * 5

    if(time >=300){
        distance2 = 8 * 10
        
        if(time >=900){
            var speedUp = (time - 900) / 60
            for(i = 9; i < speedUp; i++){

            } 
        }
    }

    finalDistance = distance1 + distance2
    console.log(finalDistance)
}




