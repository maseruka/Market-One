<template>
	 <f7-list-item>
  	  <f7-label>Write your Moment</f7-label>
  	  <f7-input type="textarea" placeholder="Textarea"></f7-input>
     </f7-list-item>
</template>

<script>
      define(["Vue"], function(Vue) {
           Vue.component('input-component', {
		  	template:template
           });
        });
    </script>