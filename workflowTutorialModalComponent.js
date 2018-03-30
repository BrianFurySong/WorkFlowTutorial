(function () {
    "use strict";

    angular.module(AppName).component("workflowTutorialModalPage", {
        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        templateUrl: "/scripts/components/views/workflowTutorialModalPage.html",
        controller: function (requestService, $scope, $window, $filter, $uibModal, $anchorScroll, $location) {
            var vm = this;
            vm.tutorialBtn = {};
            vm.roles = [];
            vm.$onInit = _init; 

            function _init() {
                vm.tutorialBtn = vm.resolve.item;
                vm.roles = vm.resolve.roleItem;
                if (vm.tutorialBtn === "start here") {
                    vm.startHere = true;
                    _showRoles();
                }

                if (vm.tutorialBtn === "step 2") {
                    vm.stepTwo = true;
                    _showRoles();
                }

                if (vm.tutorialBtn === "step 3") {
                    vm.stepThree = true;
                    _showRoles();
                }

                if (vm.tutorialBtn === "step 4") {
                    vm.stepFour = true;
                    _showRoles();
                }

                if (vm.tutorialBtn === "final step") {
                    vm.finalStep = true;
                    _showRoles();
                }

            }

            function _showRoles() {
                if (vm.roles == "Admin") {
                    vm.broker = true;
                    vm.client = true;
                } else if (vm.roles.indexOf("Broker") >= 0) {
                    vm.broker = true;
                } else {
                    vm.client = true;
                }
            }
        }
    })
})();
