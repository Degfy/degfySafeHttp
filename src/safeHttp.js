// safeHttp

angular.module('degfyTrans',['ng']);

function degfySafeHttpProvider(){

    this.$get = function($http){

    };
};

angular
.module('degfyTrans')
.provider('degfySafeHttp',degfySafeHttpProvider);