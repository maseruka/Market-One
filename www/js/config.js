requirejs.config({
	baseUrl:'js/lib',
	paths:{
		app:'../app'
	},
	shim: {
            "Vue": {"exports": "Vue"}
        }
});

var scripts = ['Vue','framework7.min','framework7-vue','vue-resource','require-vuejs!homePage',
   'require-vuejs!signUpLogin','require-vuejs!input','require-vuejs!dashboard','require-vuejs!createName'];


 var data = {
   name:true,
   category:false,
   fullnames:localStorage["fullnames"],
   username:localStorage["username"]
}
var Zsocket = null;
requirejs(scripts, function(Vue,F7,F7Vue, VRs) { 
  var myApp = new Framework7(); 
  Vue.use(F7Vue);
  Vue.use(VRs)
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
          },{
            path:'/dashboard',
            component:'dashboard-component'
          },{
            path:'/createName',
            component:'create-name-component'
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