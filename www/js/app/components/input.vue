<template>
	 <f7-list-item>
  	  <f7-input type="email"  placeholder="exmple@xxx.com"></f7-input>
     </f7-list-item>
     
</template>

<script>
      define(["Vue"], function(Vue) {
           Vue.component('input-component', {
		  	     template:template,
             data:{
               name:''
             }
           });
        });
    </script>