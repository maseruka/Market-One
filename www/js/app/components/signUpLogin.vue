<template>
	<f7-page no-navbar>
      <center>
         <br><br><br>
         <h4>Login or Sign Up now</h4>
         <br><br>
         <f7-button>Facebook</f7-button><br>
         or
         <br>
         <f7-button @click="loginSignUpWithGoogle">Google+</f7-button>
      </center> 
	</f7-page>
</template>

 <script>
      define(["Vue"], function(Vue) {
           Vue.component('login-signup',{
             template:template,
             methods:{
                loginSignUpWithGoogle:function() {
                  signupWithGoogle.callGoogle();
                }
             }
           });
        });
    </script>