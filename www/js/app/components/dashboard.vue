<template>
  <f7-page>
        <f7-navbar title="Dashboard">
         <f7-nav-right>
            <f7-link @click="createBussiness" icon="fa fa-pencil"></f7-link>
         </f7-nav-right>
</f7-navbar>
  </f7-page>
</template>

<script type="text/javascript">
   define(["Vue"], function(Vue) {
     var lol = {"name":''}
     Vue.component('dashboard-component',{
       template:template,
       data:function() {
         return lol
       },
       methods:{
         createBussiness:function() {
             this.$f7.views.main.router.load({url: '/createName/'});
         }
       }
     });
   });
</script>