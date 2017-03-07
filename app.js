/**
 * Created by BALASUBRAMANIAM on 07-03-2017.
 */
var mainModule=angular.module('MainModule',['FactoryModule']);

mainModule.value('Options',['Users','Comments','Albums','Posts']);

mainModule.controller('MainCtrl',['$scope','Options','DashBoardFactory',
    function($scope,Options,DashBoardFactory)
{
    $scope.selectedValue="";
    $scope.ddOptions=Options;
    $scope.callBack=function()
    {
        console.log($scope.selectedValue);
       var obj = DashBoardFactory.findService($scope.selectedValue);
        //console.log(obj);
        angular.forEach(obj, function(res)
        {
            //console.log(res);
            //immediate invocation
            res().then(function(output)
            {
                console.log(output);
                 switch($scope.selectedValue)
                 {
                     case 'Users':
                         $scope.usersResult=output.data;
                         break;
                     case 'Comments':
                         $scope.commentsResult=output.data;
                         break;
                     case 'Albums':
                         $scope.albumsResult=output.data;
                         break;
                     case 'Posts':
                         $scope.postsResult=output.data;
                         break;
                 }

            });

        });


    }



}]);