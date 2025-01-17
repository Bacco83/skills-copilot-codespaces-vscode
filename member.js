function skillsMember() {
  return {
    Restrict: 'E',
    templateUrl: 'member.html',
    controller: 'MemberController',
    controllerAs: 'memberCtrl',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}