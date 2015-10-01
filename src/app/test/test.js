angular.module('ispc.test',[
    'ui.router'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'test', {
            url: '/test',
            views: {
                "main": {
                    controller: 'TestCtrl',
                    templateUrl: 'test/test.tpl.html'
                }
            },
            data:{ pageTitle: 'Test' }
        });
    })

    .controller('TestCtrl',[
        '$scope',
        function($scope){


        }
    ])


;