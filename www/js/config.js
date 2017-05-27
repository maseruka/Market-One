requirejs.config({
	baseUrl:'js/lib',
	paths:{
		app:'../app'
	},
	shim: {
            "Vue": {"exports": "Vue"}
        }
});

var scripts = ['jquery','Vue','framework7.min','framework7-vue','socket.io.min',
    'underscore','vue-resource', 'vee-validate.min','app/model/sigupWithGoogle',
    'app/model/uploadProfileToServer', 'require-vuejs!homePage','require-vuejs!signUpLogin','require-vuejs!input'];


 var data = {
   name:true,
   category:false,
   fullnames:localStorage["fullnames"],
   username:localStorage["username"]
}
var Zsocket = null;
requirejs(scripts, function($,Vue, F7, F7Vue, io, _, rq, Validate, reusableFunctions, uploadToServer) { 
  var myApp = new Framework7(); 
  Vue.use(F7Vue);
  Vue.use(Validate);
  $f7 = Dom7;
   new Vue({
          el: "#app",
          data:data,
          framework7: {
          root: '#app', //Should be same as app el
          animateNavBackIcon: true,
          routes:[{
             path:'/createBuz/',
             component:'login-signup'
          }],
          material: !Framework7.prototype.device.ios,
          fastClicks:false,
          pushState: true,
          materialRipple:false
         },
          methods: {
          onF7Init: function () {  
            /*if (!localStorage["isloggsedIn"]) {
           	    if (localStorage["isregister"]) {
                   if (localStorage["isuploadedProfile"]) {
                    this.$f7.views.main.router.load({url: '/suggestion/'});
                   }else{
                   	 this.$f7.views.main.router.load({url: '/picture/'});
                   }
           	    }else{
                   this.$f7.views.main.router.load({url: '/login/'});
           	    }
           	 	
           }else{ */
           	 	this.$f7.views.main.router.load({url: '/index/'});
          /* }*/
        }
     },
     created:function() {
            	 
     }
    });
});