<template>
	<f7-page name="login"><br><br><br><br>
		 <f7-block-title :class="{center:iscenter, word:big}">Login or Regester with <br><br></f7-block-title><br><br>
     <f7-block-title :class="{center:iscenter}"><button class="btn fb"><span class="fa fa-facebook"></span> Facebook</button></f7-block-title>
     <f7-block-title :class="{center:iscenter}">Or</f7-block-title>
     <f7-block-title :class="{center:iscenter}"><button class="btn go"><span class="fa fa-google-plus"></span> Google+</button></f7-block-title>
		 <br><br>
		 <f7-list form>
             <f7-list-item>
               <f7-label>ENTER YOUR EMAIL ADDRESS</f7-label>
               <f7-input type="email" v-model="email" placeholder="example@xxx.com"/>
             </f7-list-item>
              	  <f7-button @click="sendEmail">Submit</f7-button>
		 </f7-list>
	</f7-page>
</template>

<script type="text/javascript">
     var data = {
      email:'',
      iscenter: true,
      big:true

    }
	define(["Vue"],function(Vue) {
	   Vue.component('login-page',{
          template:template,
          data:function() {
          	return data
          },
          methods:{
          	 sendEmail:function() {
              console.log('ll');
          	 	// this.$http.post('http://192.168.1.160:8080/login', {email:data.email}).then(response => {
             //         localStorage["isloggedIn"] = true;
             //          localStorage["UserId"] = response.body.id;
                      this.$f7.views.main.router.load({url: '/dashboard/'});
                // }, response => {
                    
                //  });
          	 }
          }
	   });
	});
</script>