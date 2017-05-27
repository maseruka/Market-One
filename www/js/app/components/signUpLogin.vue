<template>
	<f7-page no-navbar>
      <center>
         <br><br><br>
         <h4>Enter your Email Address</h4>
          <p>{{status}}</p>
         <br><br>
          
          <f7-list form>
              <f7-input type="email" v-model="email"  placeholder=""></f7-input>
          </f7-list>
         <br>
         <f7-button @click="loginSignUpWithGoogle">Login</f7-button>
      </center> 
	</f7-page>
</template>

 <script>
      define(["Vue"], function(Vue) {
            var data = {email:'',status:''}
           Vue.component('login-signup',{
             template:template,
              data:function() {
                 return data
              },
             methods:{
                loginSignUpWithGoogle:function() {
                  var login = {email:data.email}
                  this.$http.post('http://192.168.1.160:8080/login', login).then(response => {

                   // get status
                  response.status;

                  // get status text
                  response.statusText;

                 // get 'Expires' header
                 response.headers.get('Expires');

                 // get body data
                 this.someData = response.body;
                    if (response.body != "Available") {
                         this.$f7.views.main.router.load({url: '/dashboard/'});
                    }else{
                        this.$f7.views.main.router.load({url: '/dashboard/'});
                    }
                    alert(response.body);

                }, response => {
                    alert("no");
                 });
                }
             }
           });
        });
    </script>