(function () {
    "use strict";

    angular.module(AppName).component("workflowTutorialPage", {
        bindings: {},
        templateUrl: "/scripts/components/views/workflowTutorialPage.html",
        controller: function (requestService, $scope, $window, $filter, $uibModal, $serverModel) { //put BLING in front of the injected params EXCEPT for requestService
            var vm = this;

            vm.tutorialBtn = {};
            vm.launchTutorialModal = _launchTutorialModal;
            vm.$onInit = _init;

            function _init() {
                vm.roles = $serverModel.roles;
            }

            function _launchTutorialModal(step) {
                switch (step) {
                    case "start here":
                        vm.tutorialBtn = "start here";
                        break;
                    case "step 2":
                        vm.tutorialBtn = "step 2";
                        break;
                    case "step 3":
                        vm.tutorialBtn = "step 3";
                        break;
                    case "step 4":
                        vm.tutorialBtn = "step 4";
                        break;
                    case "final step":
                        vm.tutorialBtn = "final step";
                        break;
                }

                var modalInstance = $uibModal.open({
                    animation: vm.animationsEnabled,
                    component: 'workflowTutorialModalPage',
                    size: 'md',
                    resolve: {
                        item: function () { return vm.tutorialBtn; },//u need to pass this to the modal when ur just submitting POST
                        roleItem: function () { return vm.roles; }
                    }
                });
            }
        }
    })
})();
