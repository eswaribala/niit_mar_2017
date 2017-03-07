/**
 * Created by BALASUBRAMANIAM on 07-03-2017.
 */
var factoryModule=angular.module('FactoryModule',['ServiceModule']);

factoryModule.factory('DashBoardFactory',['$injector',function($injector)
{
  var obj={};
  obj.findService=function(option)
  {
      obj={};
      angular.module('ServiceModule')['_invokeQueue'].
          forEach(function(value)
      {
              //console.log(value[2][0]);

             if(value[2][0]==option+'Service') {
                 console.log(value[2][0]);
                 console.log(option);
                 //console.log('Match found....');
                obj=$injector.get(value[2][0]);

             }

      });

      return obj;
  }
 return obj;

}]);

