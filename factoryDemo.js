/**
 * Created by BALASUBRAMANIAM on 07-03-2017.
 */
var factoryModule=angular.module('FactoryModule',['ServiceModule']);

factoryModule.factory('DashBoardFactory',[function()
{
  var obj={};
  obj.findService=function(option)
  {
      angular.module('ServiceModule')['_invokeQueue'].
          forEach(function(value)
      {
              console.log(value);
      });


  }
 return obj;

}]);

