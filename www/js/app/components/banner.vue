    <template>
        <f7-page login-screen name="picture">
        <f7-login-screen-title :class = "{word:ischange}"><br><br>Upload a photo of your bussiness</f7-login-screen-title>
        <f7-list form>
          <f7-list-item> 
                  <div class="center">

                      <img :class="'img-thumbnail col-xs-4 posterPicture awo'" id="banner" src="img/d.jpg"@click="uploadProfilePicture">
                      <span :class="'cameraProfile'" @click="uploadProfilePicture"><i :class="'fa fa-camera pos'"></i></span>
                  </div>
          </f7-list-item>
          </f7-list>
        <f7-list> 
          <f7-list-label>
            <p><a href="index.html" :class="'btn btn-sm col-xs-4 bg-teal color-white wid'">Finish</a></p>
          </f7-list-label>
        </f7-list>
      </f7-page>
    </template>
    
    <script>
    var data = {ischange:true}
      define(["Vue"], function(Vue) { 
          Vue.component("banner-component", {
              template: template,
              data: function(){
                return data;
              },
               methods:{
                uploadProfilePicture:function() {
                   reusableFunctions.smartSelectProfile("banner")
                }
              }
          });
        });
    </script>