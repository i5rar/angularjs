(function () {
    'user strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {

        $scope.lunchList = "";
        $scope.lunchMessage = "";
        $scope.myMessage = "First Assignment By Israr Khan @ i5rar";
        $scope.messageStyle = "text-success bg-success";

        $scope.checkLunch = function () {
        
            var lunchItems = $scope.lunchList.split(',').filter(isValidLunchItem);

            if (lunchItems.length === 0) {
                $scope.lunchMessage = "Please enter data first!";
                $scope.messageStyle = "text-danger bg-danger text-capitalize";
                return;                               
            }

            if (lunchItems.length  > 3) {
                $scope.lunchMessage =  "Too much!";
                $scope.messageStyle = "text-success bg-warning";
                return;                               
            }

            if (lunchItems.length  <= 3) {
                $scope.lunchMessage =  "Enjoy!";
                $scope.messageStyle = "text-success bg-success";
                return;                               
            }          

        };

       function isValidLunchItem(item) {
           return item.replace(/\s+/g, '').length > 0;
       }

    };

})();