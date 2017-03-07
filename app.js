/**
 * Created by BALASUBRAMANIAM on 07-03-2017.
 */
var mainModule=angular.module('MainModule',['FactoryModule']);

mainModule.value('Options',['Users','Comments','Albums','Posts']);

mainModule.controller('MainCtrl',['$scope','Options','DashBoardFactory',
    function($scope,Options,DashBoardFactory)
{
    $scope.selectedValue="Users";
    $scope.ddOptions=Options;
    $scope.callBack=function()
    {
        console.log($scope.selectedValue);
       var obj = DashBoardFactory.findService($scope.selectedValue);
    }



}]);