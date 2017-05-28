<template>
	<f7-page>
		  <f7-navbar back-link="" sliding :class = "{change:ischange}">
          <f7-nav-right>
          <f7-link back-link></f7-link>
        </f7-nav-right>
      </f7-navbar>
      <br><br><br><br>
        <center><p>Allow Market 1 to access your location. <br> this helps customers to identify how close your bussiness is to them.</p></center>
      <f7-button @click="getLocation">GET BUSSINESS LOCATION</f7-button>
	</f7-page>
</template>

<script type="text/javascript">
var data = {ischange:true}
	define(["Vue"], function(Vue) {
	   Vue.component("location-page", {
         template:template,
         data: function(){
          return data;
         },
         methods:{
         	getLocation:function() {
         		 cordovaFunctions.getBussinessLocation();
             this.$f7.views.main.router.load({url: '/banner/'});
         	}
         }
	   });
	});
</script>