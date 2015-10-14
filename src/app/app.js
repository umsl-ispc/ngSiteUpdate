angular.module( 'ispc', [
    'templates-app',
    'templates-common',
    'ui.router',
    'ui.bootstrap',
    'ui.utils.masks',
    'ui.utils.masks.helpers',
    'angularMoment',
    'ispc.home',
    'ispc.home.events',
    'ispc.test',
    'ispc.links',
    'ispc.contacts',
    'ispc.ContactsFactory',
    'ngMaterial',
    'ui.grid',
    'ngAnimate'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/home' );
})

.config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .dark()
            .primaryPalette('grey',{
                'default': '800',
                'hue-1': '500',
                'hue-2': '200',
                'hue-3': '50'
            })
            .accentPalette('red',{
                'default': '800'
            })
            .backgroundPalette('blue-grey', {
                'default': '900',
                'hue-1': '500',
                'hue-2': '200',
                'hue-3': '50'
            })
            .warnPalette('deep-purple', {
                'default': '700'
            })

        ;
    })

.run( function run () {
})

.controller( 'AppCtrl',[ '$scope', '$location' ,function AppCtrl ( $scope, $location ) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        if ( angular.isDefined( toState.data.pageTitle ) ) {
            $scope.pageTitle = toState.data.pageTitle;
            $scope.$broadcast('stateChanged');

        }
    });
}])

.controller('NavCtrl',[
        '$scope',
        '$mdSidenav',

        function($scope, $mdSidenav){
            $scope.snapOpts = {
                tapToClose: true,
                touchToDrag: true
            };
            $scope.openLeftMenu = function() {
                console.log("whoop");
                $mdSidenav('left').toggle();
            };
            $scope.$on('stateChanged', function(){
                $mdSidenav('left').close();
            });

    }])

;

