<template>
	 <f7-page>
	 	   <center>
         <br><br><br>
         <h4>Enter Bussiness name</h4>
          <p>{{status}}</p>
         <br>
          
          <f7-list form>
              <f7-input type="text" v-model="name" placeholder=""></f7-input>
          </f7-list>
         <br> 
             <h6>Enter Bussiness Slogan</h6>
         <br>
          
          <f7-list form>
              <f7-input type="email" v-model="slogan"  placeholder=""></f7-input>
          </f7-list>
         <br>
         <f7-button @click="registerBussiness">REGISTER</f7-button>
      </center>   
	 </f7-page>
</template>

<script type="text/javascript">
	define(["Vue"], function(Vue) {
		var lol = {name:'',slogan:''}
	    Vue.component('create-name-component', {
       	  template:template,
       	  data:function() {
       	  	return lol
       	  },
       	  methods:{
       	  	 registerBussiness:function() {
       	  	 	 var register = {name:lol.name, slogan:lol.slogan}
       	  	 	  this.$http.post('http://192.168.1.160:8080/createBizz', register).then(response => {
                      this.$f7.views.main.router.load({url: '/createBizImage/'});

                }, response => {
                    
                 });
       	  	 }
       	  }
        });
	});
</script>