<template>
	<f7-page>
		    <f7-navbar back-link="Enter Bussiness Name" sliding :class = "{change:ischange}">
          <f7-nav-right>
          <f7-link @click="createBussiness" icon="fa fa-send"></f7-link>
        </f7-nav-right>
      </f7-navbar>
             <br><br><br><br>
          <f7-list form> 
              <f7-list-item>
                 <f7-input type="text" v-model="name" placeholder="Bussiness Name"/>
                </f7-list-item>
                </f7-list>
	        </f7-page>
</template>

<script type="text/javascript">
      var data = {name:'',admin:'', ischange:true}
	define(["Vue"], function(Vue) {
	   Vue.component("bussiness-name", {
          template:template,
          data:function() {
          	 return data
          },
          methods:{
          	createBussiness:function() {
          		// if (data.name != "") {
          		// 	var uploadData = {name:data.name, admin:localStorage["UserId"]}
          		// 	this.$http.post('http://192.168.1.160:8080/registerBusiness', uploadData).then(response => {
            //          localStorage["RegBuzName"] = true;
            //          localStorage["BuzzID"] = response.body.id;
                      this.$f7.views.main.router.load({url: '/location/'});
            //         }, response => {
                      
            //      });
          		// }
          	}
          }
	   });
	});
</script>