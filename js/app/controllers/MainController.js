function MainController($scope) {
  $scope.contact = {
    name: "Elliot",
    email: "elliot@alderson.com",
    phone: "7654321098"
  };
}

angular
  .module("app")
  .controller("MainController", MainController);
