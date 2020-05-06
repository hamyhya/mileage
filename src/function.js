const milleage = {
    diffTime: (dt1, dt2) => {
        var diff =(dt2.getTime() - dt1.getTime())/ 1000;
  
        return Math.abs(diff);
    }

    
}

module.exports = milleage