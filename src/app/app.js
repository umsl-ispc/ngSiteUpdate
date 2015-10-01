angular.module( 'ispc', [
    'templates-app',
    'templates-common',
    'ui.router',
    'ui.bootstrap',
    'ui.utils.masks',
    'ui.utils.masks.helpers',
    'angularMoment',
    'ispc.home',
    'ispc.test',
    'ngMaterial',
    'ngAnimate',
    'snap'

])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl',[ '$scope', '$location' ,function AppCtrl ( $scope, $location ) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        if ( angular.isDefined( toState.data.pageTitle ) ) {
            $scope.pageTitle = toState.data.pageTitle;
        }
    });
}])

.controller('NavCtrl',[
        '$scope',
        'snapRemote',
        function($scope, snapRemote){
            var mySnapper;
            snapRemote.getSnapper().then(function(theSnapper){
                mySnapper = theSnapper;
            });
            $scope.snapOpts = {
                tapToClose: true,
                touchToDrag: true
            };
            $scope.showNav = function () {
                snapRemote.getSnapper().then(function(theSnapper){
                    theSnapper.open();
                });
                console.log('click');
                if (mySnapper.state().state =="left"){
                    console.log("its left");
                    mySnapper.close();
                } else{
                    console.log(mySnapper.state());
                    mySnapper.open('left');
                }
            };
    }])

;

