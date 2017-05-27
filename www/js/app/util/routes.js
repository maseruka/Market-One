var routes = [
  {
  	path:"/home/",
  	component:'home-page'
  },
  {
    path:"/post/",
    component:'post-page'
  },
  {
  	path:"/event/",
  	component:'post-event'
  },
  {
  	path:"/createAcount/",
  	componet:'create-account'
  }
]

define(function() {
	return routes;
});