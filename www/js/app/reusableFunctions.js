var reusableFunctions = {
	toast: function(string) {
		window.plugins.toast.showLongBottom(string);
	},
  setOptions:function(srcType) {
       var options = {
            // Some common settings are 20, 50, and 100
            quality:100,
            destinationType: Camera.DestinationType.FILE_URI,
            // In this app, dynamically set the picture source, Camera or photo gallery
            sourceType: srcType,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            correctOrientation: true  //Corrects Android orientation quirks
            }
            return options;
  },
	smartSelectProfile:function(div) {
      var options = {
        androidTheme: window.plugins.actionsheet.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
        buttonLabels: ['CAMERA', 'GALLERY'],
        title: 'Upload Profile Picture',
        addCancelButtonWithLabel: 'Cancel',
        addDestructiveButtonWithLabel : 'Cancel',
        destructiveButtonLast: true
      }

      window.plugins.actionsheet.show(options, function(arg) {  
         if (arg == 1) {
            var srcType = Camera.PictureSourceType.CAMERA;
            var options = reusableFunctions.setOptions(srcType);
            navigator.camera.getPicture(function cameraSuccess(imageUri) {
              reusableFunctions.uploadProfileToServer(imageUri, div);
            });
         }else if (arg == 2) {
            var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
            var options = reusableFunctions.setOptions(srcType);
            navigator.camera.getPicture(function cameraSuccess(imageUri) {
             reusableFunctions.uploadProfileToServer(imageUri, div);
            });
         }
      });
	},
   
   smartSelectMemory:function(div) {
        var options = {
        androidTheme: window.plugins.actionsheet.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
        buttonLabels: ['CAMERA', 'GALLERY'],
        title: 'Upload Images',
        addCancelButtonWithLabel: 'Cancel',
        addDestructiveButtonWithLabel : 'Cancel',
        destructiveButtonLast: true
      }

      window.plugins.actionsheet.show(options, function(arg) {
            if (arg == 1) {
            var srcType = Camera.PictureSourceType.CAMERA;
            var options = reusableFunctions.setOptions(srcType);
            navigator.camera.getPicture(function cameraSuccess(imageUri) {
                localStorage["UploadImage"] = imageUri;
                var html = "<img width='100%' src='"+imageUri+"'/>";
               document.getElementById(div).innerHTML = html;
            });
         }else if (arg == 2) {
            var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
            var options = reusableFunctions.setOptions(srcType);
            navigator.camera.getPicture(function cameraSuccess(imageUri) {
                 localStorage["UploadImage"] = imageUri;
                var html = "<img width='100%' src='"+imageUri+"'/>";
               document.getElementById(div).innerHTML = html;
            });
         }
      });
   },

  uploadProfileToServer:function(image, div) {
    var win = function(r) { 
     document.getElementById(div).src = image;
     localStorage["image"] = image;
    }
    var fail = function(error) {
      reusableFunctions.toast("Failed to upload. try gain");
    }
    var options = new FileUploadOptions();
                     options.fileKey = "file";
                     options.mimeType = "image/jpeg";
                     options.trustAllHosts = true;
                     var params = {};
                     params.value1 = "profilePicture";
                     params.value2 = localStorage["ZonasterID"];
     options.params = params;  
     var ft = new FileTransfer();
     ft.upload(image, localStorage["ZURL"]+"uploadImage", win, fail, options);
     console.log("upload starting...................................................");
     },

     downloadSmallImage:function(image, id, div) {
       var fileTransfer = new FileTransfer(); 
           $f7.ajax({ 
           url: cordova.file.externalCacheDirectory+"/"+image+"_small.0",
            method: "GET",
            success: function() {
             var elem2 = document.getElementById(div);
             elem2.src = cordova.file.externalCacheDirectory+"/"+image+"_small.0"; },
           error: function() {
          var url = encodeURI(localStorage["ZURL"]+id+"/"+image+"_small.0");
          fileTransfer.download( url, cordova.file.externalCacheDirectory+"/"+image+"_small.0",
          function(entry) { var elem2 = document.getElementById(div); elem2.src = entry.toURL();},
          function(error) {  var elem2 = document.getElementById(div); elem2.src = "img/logo.png";
          },false );}
          });
     },


     uploadImageToServer:function(image, post, privacy) {
        var win = function(r) {
            var result = {user_id:localStorage["ZonasterID"], post:post, privacy:privacy, image:r.response}
            Zsocket.emit("postMemory", {data:result}, function(res) {
            reusableFunctions.toast("Post sent successfully");
            });
       }
      var fail = function(error) {
       reusableFunctions.toast("Failed to upload. try gain");
      }
       var options = new FileUploadOptions();
                     options.fileKey = "file";
                     options.mimeType = "image/jpeg";
                     options.trustAllHosts = true;
                     var params = {};
                     params.value1 = "postMemory";
                     params.value2 = localStorage["ZonasterID"];
        options.params = params;  
       var ft = new FileTransfer();
        ft.upload(image, localStorage["ZURL"]+"uploadImage", win, fail, options);
       console.log("upload starting...................................................");
     }

}


define(function () {
return reusableFunctions;
});
