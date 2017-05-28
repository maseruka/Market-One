<template>
	 <f7-page name="home" navbar-fixed toolbar-fixed>
		 <f7-navbar title="Market One" sliding  :class = "{change:ischange}">
          <f7-nav-right>
           <f7-button @click="login">Check In</f7-button>
          </f7-nav-right>
         </f7-navbar>
         <f7-toolbar tabbar >
         	  <f7-searchbar  :class = "{change:ischange}" cancel-link="" v-model="searchMe" placeholder="Search for Products" :clear-button="true"></f7-searchbar>
         </f7-toolbar>
         <f7-list media-list v-show="showPosts">
         <f7-list-item title="Item 1" subtitle="Subtitle 1" text="Item 1 Text" v-for="item in items" :key="item"></f7-list-item>
        </f7-list>
        <f7-list media-list v-show="showSearch">
         <f7-list-item title="Item 1" subtitle="Subtitle 1" text="Item 1 Text" v-for="item in lists" :key="item"></f7-list-item>
        </f7-list>

        <div v-show="noPosts">
        	 <br><br><br><br><center><strong>No Search Found.</strong></center>
        </div>

        <div v-show="loading">
        	<br><br><br><br><center><strong>Loading.....</strong></center>
        </div>

        <div v-show="noData">
        	<br><br><br><br><center><strong>No Internet Connection</strong></center>
        </div>
	 </f7-page>
</template>
<script type="text/javascript">
	define(["Vue"], function(Vue) {
		var data = {
           items:[],
           lists:[],
           showPosts:true,
           showSearch:false,
           searchMe:'',
           noPosts:false,
           loading:false,
           noData:false,
           ischange:true
		}
		Vue.component("home-page", {
		 template:template,
		 data:function() {
		 	return data
		 },
		 methods:{
		 	login:function() {
		 		if (localStorage["isloggedIn"]) {
		 			this.$f7.views.main.router.load({url: '/dashboard/'});
		 		}else{
		 			this.$f7.views.main.router.load({url: '/login/'});
		 		}
		 	}
		 },
		 watch:{
              searchMe:function(val) {
              	          data.lists = [];
              	         data.showPosts=false;
                         data.showSearch=false;
                         data.searchMe='';
                         data.noPosts=false;
                         data.loading=true;
                        data.noData=false;
              	  var seraches = {longitude:localStorage["longitude"],latitude:localStorage["latitude"], search:val}
              	 this.$http.get('http://192.168.1.160:8080/Search', seraches).then(response => {
                         if (response.body.length > 0) {
                               data.showPosts=false;
                               data.showSearch=true;
                               data.searchMe='';
                               data.noPosts=false;
                               data.loading=false,
                               data.noData=false;
                               for (var i = 0; i < response.body.length+1; i++) {
                               	   data.lists.push(response.body[i]);
                               }
                         }else{
                           data.showPosts=false;
                       data.showSearch=false;
                       data.searchMe='';
                       data.noPosts=true;
                       data.loading=false;
                       data.noData=false;
                         }
                    }, response => {
                         data.showPosts=false;
                       data.showSearch=false;
                       data.searchMe='';
                      data.noPosts=false;
                       data.loading=false;
                      data.noData=true;
                     });
              }
		 },
		 created:function() {
		 	  
		 }
		});
	});
</script>