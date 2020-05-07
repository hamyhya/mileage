const {diffTime} = require('./src/function')

dt1 = new Date("May 6, 2020 10:12:00");
dt2 = new Date("May 6, 2020 12:00:00");
console.log('Waktu yang ditempuh: ' +diffTime(dt1, dt2) +' Detik')

var time = diffTime(dt1, dt2)
var finalDistance
if(time < 300){
    finalDistance = 6*5*60 //jarak 5 menit pertama

}else if(time >900){
    finalDistance = (8*10*60) 

    var speedUp = (time - 900) / 600
    for(i = 0; i < speedUp; i++){
         
        finalDistance += (8+i)*10*60 //jarak setiap kelipatan 10 menit setelah 15 menit
        
    }
}else if(time < 900){
    finalDistance = (8*10*60) + (6*5*60) //jarak setelah 5 menit
} 

console.log('Jarak yang ditempuh: ' +finalDistance / 1000 +' KM')