requirejs.config({
  baseUrl:'js/lib',
  paths:{
    app:'../app'
  },
  shim: {
            "Vue": {"exports": "Vue"}
        }
});

var scripts = ['Vue','framework7.min','framework7-vue','vue-resource', 'app/main','app/reusableFunctions','require-vuejs!home','require-vuejs!login','require-vuejs!dashboard','require-vuejs!bizzName','require-vuejs!location','require-vuejs!addProduct','require-vuejs!banner'];
var postData = {
  posts:[]
}
requirejs(scripts, function(Vue,F7,F7Vue,VRs, main) {
  var myApp = new Framework7();
  Vue.use(F7Vue);
  Vue.use(VRs);
  $f7 = Dom7;
   new Vue({
    el: "#app",
    framework7:{
       root: '#app', //Should be same as app el
          animateNavBackIcon: true,
          routes:[
           {
             path:"/home/",
             component:'home-page'
           },
           {
             path:'/banner/',
             component:'banner-component'
           },
           {
             path:"/location/",
             component:'location-page'
           },
           {
             path:"/bizzProfile/",
             component:'bussiness-profile'
           },
           {
             path:"/search/",
             component:'search-component'
           },
           {
             path:"/bizzName/",
             component:'bussiness-name'
           },
           {
             path:"/login/",
             component:'login-page'
           },{
            path:"/picture/",
            component:'profile-picture'
           },{
             path:"/product/",
             component:'add-product-component'
           },{
             path:"/suggestion/",
             component:'suggestion-component'
           },{
             path:"/dashboard/",
             component:'bill-component'
           }
          ],
    },
    mounted:function() {
      if (true) {}
    }
  });
}); 