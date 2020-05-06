const {diffTime} = require('./src/function')

dt1 = new Date("May 6, 2020 10:12:00");
dt2 = new Date("May 6, 2020 12:00:00");
console.log('Waktu yang ditempuh: ' +diffTime(dt1, dt2) +' Detik')

var time = diffTime(dt1, dt2)
var finalDistance
if(time >= 0){
    finalDistance = 6 * 5 * 60

    if(time >300){
        finalDistance = (6*5*60) + (8*10*60)
        
        if(time >900){
            var speedUp = (time - 900) / 600
            for(i = 0; i < speedUp; i++){
                finalDistance += (8+i)*10*60
            } 
        }
    }

    console.log('Jarak yang ditempuh: ' +finalDistance / 1000 +' KM')
}