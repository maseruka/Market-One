<template>
	 <f7-page>
	 	  <f7-navbar back-link="Add a Product"></f7-navbar>
	 	   <br><br><br><br>
	 	  <center>Add a product name</center>
	 	  <br>
           <f7-list form>
             <f7-list-item>
               <f7-input type="text" v-model="name" placeholder="Name"/>
               </f7-list-item>
               </f7-list>
               <br>
               <center>Price Range</center>
               <f7-list form>
             <f7-list-item>
               <f7-input type="text" v-model="from" placeholder="From"/>
               </f7-list-item>
               </f7-list>

               <f7-list form>
             <f7-list-item>
               <f7-input type="text" v-model="to" placeholder="To"/>
               </f7-list-item>
               </f7-list>
               
               <f7-button @click="addProduct">Add Product </f7-button>
	        </f7-page>
</template>

<script type="text/javascript">
	 define(["Vue"], function(Vue) {
	 	 var product = {name:'', from:'',to:'', BuzzID:localStorage["BuzzID"]}
	 	Vue.component('add-product-component',{
            template:template,
            methods:{
               addProduct:function() {
               	  this.$http.post('http://192.168.1.160:8080/addProduct', product).then(response => {
                        this.$f7.views.main.router.load({url: '/home/'});
                    }, response => {
                      
                    });
               }
            }
	 	});
	 });
</script>