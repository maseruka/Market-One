<template>
	<f7-page>
		 <f7-navbar back-link="Dashboard" sliding :class = "{change:ischange}">
          <f7-nav-right>
          <f7-link @click="createBussiness" icon="icon-plus"></f7-link>
        </f7-nav-right>
      </f7-navbar>
      <f7-fab color="pink" @click="addProducts" v-show="fab">
       <f7-icon icon="icon-plus"></f7-icon>
     </f7-fab>
      <div v-show="hide">
      	  <br><br><br><br><br><br><br><br><br>
      	  <center>
      	  	  <p><h3>Register your Bussiness to let customers find you.</h3><br><p><strong> Tap on the icon above. --> <i class="fa fa-bars"></i></strong></p></p>
      	  </center>
      </div>
	</f7-page>
</template>

<script type="text/javascript">
	define(["Vue"], function(Vue) {
		var data ={hide:true,fab:true, ischange:true}
	   Vue.component("bill-component", {
         template:template,
         data:function() {
         	return data
         },
         methods:{
         	createBussiness:function() {
         		  if (localStorage["RegBuzName"]) {
         		  	 if (localStorage["islocated"]) {
                        this.$f7.views.main.router.load({url: '/banner/'});
         		  }else{
         		     this.$f7.views.main.router.load({url: '/location/'});	
         		  }
         		}else{
                   this.$f7.views.main.router.load({url: '/bizzName/'});
         		}
         	},
         	addProducts:function() {
         	  this.$f7.views.main.router.load({url: '/product/'});
         	}
         }
	   });
	});
</script>