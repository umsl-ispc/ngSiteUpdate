/**
 * Created by nskv2c on 10/14/2015.
 */
angular.module('ispc.contacts', [
    'ui.router'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'contacts', {
            url: '/contact',
            views: {
                "main": {
                    controller: 'ContactsCtrl',
                    templateUrl: 'contacts/contacts.tpl.html'
                }
            },
            data:{ pageTitle: 'Contact' }
        });
    })
.controller('ContactsCtrl',[
        '$scope',
        function($scope){

        }
    ]);