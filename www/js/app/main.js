var cordovaFunctions = {
	getBussinessLocation: function(callback){ localStorage["islocated"] = true;
		    navigator.geolocation.getCurrentPosition(onSuccess, onError, {enableHighAccuracy: true });
	         function onSuccess(position) {
	            var cordinates = {latitude:position.coords.latitude, longitude:position.coords.longitude, business_ID:localStorage["BuzzID"]};
                   $f7.ajax({
                   	 url:'http://192.168.1.160:8080/addLocation',
                   	 method:'POST',
                   	 data:cordinates,
                   	 success:function() {
                   	    localStorage["islocated"] = true;
                   	 },
                   	 error:function() {
                   	 	localStorage["islocated"] = true;
                   	 }
                   })
	          }
	      function onError() {
	        localStorage["islocated"] = true;
	      }
	}
}
define(function () {
return cordovaFunctions;
});
