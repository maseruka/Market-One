var googleMapsClient = require('../node_modules/@google/maps').createClient({
  key: 'AIzaSyCo5z2cpqIC9PiY3ahAYniXy-K3jz-VFSc'
});

module.exports = {
 getDistance: (places, returnDistance)=>{
    googleMapsClient.distanceMatrix({
      origins: [
        places.origin.lat+','+places.origin.lng
      ],
      destinations: [
        places.destination.lat+','+places.destination.lng
      ]
    }, function(fail, done) {
      if(fail){
          returnDistance('error');
      }else{
      returnDistance(done.json.rows[0].elements[0].distance.text)
      }
    })
    
    },
 
    
    
    
}