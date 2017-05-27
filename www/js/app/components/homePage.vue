<template>
	<f7-page>
		 <f7-navbar title="Market 1" theme="">
              <f7-nav-right>
                <f7-button bg="white" color="black" @click="loginSignup">Check in</f7-button>
              </f7-nav-right>
         </f7-navbar>
         <f7-subnavbar>
         	 <f7-searchbar cancel-link="Cancel" placeholder="Search in items" :clear-button="true"></f7-searchbar>
         </f7-subnavbar>
         <f7-list>
             <f7-list-item title="Item 1"></f7-list-item>
            <f7-list-item title="Item 2"></f7-list-item>
         </f7-list>
	</f7-page>
</template>

 <script>
      define(["Vue"], function(Vue) {
           var data2 = {
              posts:[]
           }
          Vue.component("home-page", {
              template: template,
              data: function() {
                  return data2
              },
              methods:{ 
                 loginSignup:function() {
                 	if (localStorage["isLoggedIn"]) {

                 	}else{
                 		this.$f7.views.main.router.load({url: '/createBuz/'});
                 	}
                 }
              },
              mounted:function() {
               
              }
          });
        });
    </script>