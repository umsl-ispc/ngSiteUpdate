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
        'ContactsFactory',
        function($scope, fireTruck){
            $scope.theContacts = fireTruck.getContacts();


            $scope.getName = function (contact) {
                var retName = '';
                if(contact.title){
                    retName += contact.title;
                    retName += ' ';
                }
                retName += (contact.firstName + ' ' + contact.lastName);
                console.log("display rows");
                console.log(retName);
                return retName;
            };


        }
    ]);