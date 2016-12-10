angular.module("mainApp").controller("mainController",['$scope','$log','$uibModal',function($scope,$log,$uibModal){
	var self = this;
	var currentUser = "";

	self.loggedIn = function(){
		return currentUser != "";
	}

	self.open = function(modalType){
		if(modalType=="basket"){
			var modalInstance = $uibModal.open({
		    	animation: true,
		    	templateUrl: modalType + ".html",//'loginModal.html',
		     	controller: modalType +'ModalInstanceCtrl as instanceCtrl',  //'modalInstanceCtrl as instanceCtrl',
		     	size: 'lg',
		     	keyboard: false,
		     	backdrop: 'static'
		    });

		}else{
			var modalInstance = $uibModal.open({
		    	animation: true,
		     	keyboard: false,
		     	backdrop: 'static',		    
		    	templateUrl: modalType + ".html",//'loginModal.html',
		     	controller: modalType +'ModalInstanceCtrl as instanceCtrl',  //'modalInstanceCtrl as instanceCtrl',
		     	size: 'lg'
		    });

		};

	  };	

}]);


angular.module('mainApp').controller('loginModalInstanceCtrl',["$uibModalInstance","$log","$location",function ($uibModalInstance,$log,$location) {
  var self = this;

    self.ok = function () {
  		self.error = "";
  		$uibModalInstance.close(self.userInfo);
  	},function(errResponse){
  		self.error = errResponse;
  	};


  self.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };


}]);


angular.module('mainApp').controller('registerModalInstanceCtrl',["$uibModalInstance","$log",function ($uibModalInstance,$log) {
  var self = this;
  self.ok = function () {
  		self.error = "";
  		$uibModalInstance.close(self.userInfo);
  	},function(errResponse){
  		self.error = errResponse;
  	};


  self.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}]);

