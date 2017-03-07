/**
 * Created by BALASUBRAMANIAM on 07-03-2017.
 */
var serviceModule=angular.module('ServiceModule',[]);

serviceModule.service('UsersService',['$http',function($http)
{

      var UserCollection=function()
      {
           return $http({
               method: 'GET',
               dataType: "jsonp",
               headers: {
                   'Content-Type': 'application/x-www-form-urlencoded'

               },
               url: 'http://jsonplaceholder.typicode.com/users'
           }).then(function (response)
           {
               return response;
           });
      }

     return{
         userObj:UserCollection
     }




}]);






serviceModule.service('CommentsService',['$http',function($http)
{
    var CommentsCollection=function()
    {
        return $http({
            method: 'GET',
            dataType: "jsonp",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'

            },
            url: 'http://jsonplaceholder.typicode.com/comments'
        }).then(function (response)
        {
            return response;
        });
    }

    return{
        commentsObj:CommentsCollection
    }


}]);
serviceModule.service('AlbumsService',['$http',function($http)
{
    var AlbumsCollection=function()
    {
        return $http({
            method: 'GET',
            dataType: "jsonp",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'

            },
            url: 'http://jsonplaceholder.typicode.com/albums'
        }).then(function (response)
        {
            //console.log(response);
            return response;
        });
    }

    return{
        albumsObj:AlbumsCollection
    }

}]);
serviceModule.service('PostsService',['$http',function($http)
{
    var PostsCollection=function()
    {
        return $http({
            method: 'GET',
            dataType: "jsonp",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'

            },
            url: 'http://jsonplaceholder.typicode.com/posts'
        }).then(function (response)
        {
            return response;
        });
    }

    return{
        postsObj:PostsCollection
    }

}]);


serviceModule.provider('source',function()
{
    var Logo='';
    var Banner='';
    this.setLogo=function(newLogo)
    {
        Logo=newLogo;
    }
    this.setBanner=function(newBanner)
    {
        Banner=newBanner;
    }
    this.$get=function()
    {
        return{
            logo:Logo,
            banner:Banner

        }
    }

});

//Register the provider
serviceModule.config(function(sourceProvider)
{
 sourceProvider.setLogo('images/logo.png');
 sourceProvider.setBanner('images/banner.jpg');

});


